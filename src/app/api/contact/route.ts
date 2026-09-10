import { NextResponse } from 'next/server'
import { BUSINESS } from '@/data/constants'

/**
 * Server-side capture for the contact form.
 *
 * The form used to call window.open() on a WhatsApp deep link and throw away
 * everything the visitor typed. Someone who chose to fill in a form rather than
 * tap the WhatsApp button was answered with WhatsApp anyway, and if they closed
 * that tab the enquiry — and the email address they had just given — was gone.
 * Nothing was ever stored or delivered.
 *
 * This sends the message to the salon's inbox over Resend's HTTP API, called
 * with fetch so it adds no npm dependency.
 *
 * Configuration (both required for delivery):
 *   RESEND_API_KEY   from resend.com
 *   CONTACT_FROM     a verified sender on your domain,
 *                    e.g. "Blend Website <website@blendhairboutique.com>"
 *
 * With those unset the route answers 503 and the form shows its fallback,
 * which offers WhatsApp, email and the phone number. That is the same place
 * the visitor would have ended up before, so an unconfigured deploy is no
 * worse than the old behaviour — it just no longer pretends to have sent.
 */

export const runtime = 'nodejs'

type Payload = { name: string; email: string; service: string; message: string; company?: string }

const MAX = { name: 120, email: 200, service: 120, message: 4000 }

// Deliberately permissive. This is a sanity check to reject obvious rubbish,
// not an attempt to decide which addresses are real — that argument is
// unwinnable and costs real enquiries.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string))

export async function POST(req: Request) {
  let body: Payload
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  // Honeypot. A real visitor never sees this field, so anything in it is a bot.
  // Answer 200 so the bot believes it succeeded and does not retry.
  if (body.company) return NextResponse.json({ ok: true })

  const name = (body.name ?? '').trim().slice(0, MAX.name)
  const email = (body.email ?? '').trim().slice(0, MAX.email)
  const service = (body.service ?? '').trim().slice(0, MAX.service)
  const message = (body.message ?? '').trim().slice(0, MAX.message)

  if (!name || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'invalid_fields' }, { status: 422 })
  }

  const key = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM
  if (!key || !from) {
    console.error('[contact] RESEND_API_KEY or CONTACT_FROM is not set; cannot deliver')
    return NextResponse.json({ error: 'not_configured' }, { status: 503 })
  }

  const html = `
    <h2>New enquiry from blendhairboutique.com</h2>
    <p><strong>Name:</strong> ${esc(name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
    <p><strong>Service of interest:</strong> ${esc(service) || '—'}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap">${esc(message) || '—'}</p>
  `.trim()

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [BUSINESS.email],
        // So hitting reply in the inbox replies to the client, not to the site.
        reply_to: email,
        subject: `Website enquiry — ${name}${service ? ` (${service})` : ''}`,
        html,
      }),
    })

    if (!res.ok) {
      console.error('[contact] resend responded', res.status, await res.text())
      return NextResponse.json({ error: 'send_failed' }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] send threw', err)
    return NextResponse.json({ error: 'send_failed' }, { status: 502 })
  }
}
