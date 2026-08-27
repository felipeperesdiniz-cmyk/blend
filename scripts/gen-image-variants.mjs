// Rebuilds the 400w/800w variants and src/data/imageWidths.ts from whatever is
// in public/images/{gallery,services}. Run after adding or replacing a photo:
//   node scripts/gen-image-variants.mjs
// Requires sips (macOS) and cwebp (brew install webp).
import { execFileSync } from 'node:child_process'
import { readdirSync, existsSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const DIRS = ['gallery', 'services']
const TARGETS = [400, 800]
const QUALITY = 80

const widthOf = (p) =>
  Number(execFileSync('sips', ['-g', 'pixelWidth', p], { encoding: 'utf8' }).trim().split(/\s+/).pop())

const manifest = {}

for (const dir of DIRS) {
  const root = join('public/images', dir)
  for (const file of readdirSync(root).sort()) {
    if (!file.endsWith('.webp')) continue
    if (/-(400|800)\.webp$/.test(file)) continue

    const full = join(root, file)
    const base = file.replace(/\.webp$/, '')
    const intrinsic = widthOf(full)
    const widths = []

    for (const target of TARGETS) {
      if (intrinsic <= target) continue
      const out = join(root, `${base}-${target}.webp`)
      if (!existsSync(out)) {
        execFileSync('sips', ['-s', 'format', 'png', '--resampleWidth', String(target), full, '--out', '/tmp/variant.png'], { stdio: 'ignore' })
        execFileSync('cwebp', ['-q', String(QUALITY), '-quiet', '/tmp/variant.png', '-o', out])
        console.log('built', out)
      }
      widths.push(target)
    }
    manifest[`/images/${dir}/${file}`] = [...widths, intrinsic]
  }
}

const body = Object.entries(manifest)
  .map(([k, v]) => `  '${k}': [${v.join(', ')}],`)
  .join('\n')

writeFileSync(
  'src/data/imageWidths.ts',
  `// Generated from the files in public/images — the widths that actually exist\n` +
  `// on disk for each photo. A plain <img> served one desktop-sized file to\n` +
  `// every device; the gallery tiles were shipping roughly four times the pixels\n` +
  `// a phone can show. Photo() reads this to build a srcset.\n` +
  `//\n` +
  `// Regenerate after adding or replacing images: node scripts/gen-image-variants.mjs\n` +
  `export const IMAGE_WIDTHS: Record<string, number[]> = {\n${body}\n}\n`,
)
console.log('manifest entries:', Object.keys(manifest).length)
