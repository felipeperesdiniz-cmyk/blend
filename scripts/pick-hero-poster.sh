#!/usr/bin/env bash
# Pick a better first frame for the film hero.
#
# WHY THIS EXISTS
# The poster is the first thing every visitor sees, and the frame that *stays*
# on screen for anyone whose browser refuses to autoplay — iOS Low Power Mode,
# data saver, and most managed-device policies. The current poster is a wide
# shot of a full salon under flat ceiling light: plastic-wrapped chairs, bottles
# and clutter on the counters, a red EXIT sign, mostly backs of heads. The copy
# one scroll below it promises "sanctuary", "unhurried" and "$$$". The poster
# argues against the positioning before a word is read.
#
# WHAT TO LOOK FOR when picking from the contact sheet this produces:
#   - one or two people, not a room full
#   - a face or hands in focus, shallow depth of field
#   - warm light (the wood floor and the bulb strings, not the ceiling panels)
#   - NO painted "Blend hair boutique" wall — the white lockup overlays the
#     centre of frame and would land on top of the identical painted mark.
#     This is why two shots were already cut from the edit; see the source
#     comments in src/components/sections/HeroSection.tsx.
#   - nothing brighter than about luma 210 in the centre third, or the white
#     lockup loses contrast. The report below flags this for you.
#
# USAGE
#   brew install ffmpeg
#   ./scripts/pick-hero-poster.sh                 # build the contact sheet
#   ./scripts/pick-hero-poster.sh 7.25            # commit the frame at 7.25s
set -euo pipefail

cd "$(dirname "$0")/.."
SRC=public/hero-loop.v2.mp4
OUT=.poster-candidates

command -v ffmpeg >/dev/null || { echo "ffmpeg not found: brew install ffmpeg"; exit 1; }
[ -f "$SRC" ] || { echo "missing $SRC"; exit 1; }

if [ $# -eq 0 ]; then
  rm -rf "$OUT"; mkdir -p "$OUT"
  echo "Extracting candidates every 0.5s from $SRC ..."
  ffmpeg -loglevel error -i "$SRC" -vf fps=2 -q:v 3 "$OUT/frame-%03d.jpg"

  echo
  echo "  frame   time    centre-third mean luma   verdict"
  n=0
  for f in "$OUT"/frame-*.jpg; do
    n=$((n+1))
    t=$(python3 -c "print(f'{($n-1)/2:6.2f}')")
    # Mean luma of the centre third, where the lockup sits.
    luma=$(ffmpeg -loglevel error -i "$f" \
             -vf "crop=iw/3:ih/3:iw/3:ih/3,format=gray" \
             -f rawvideo - 2>/dev/null \
           | python3 -c "import sys;d=sys.stdin.buffer.read();print(f'{sum(d)/len(d):5.1f}' if d else '  n/a')")
    verdict=$(python3 -c "
l='$luma'.strip()
print('' if l=='n/a' else ('TOO BRIGHT for the white lockup' if float(l)>210 else 'ok'))")
    printf "  %-7s %ss   %s   %s\n" "$(basename "$f" .jpg)" "$t" "$luma" "$verdict"
  done

  echo
  echo "Open $OUT/ and pick one. Then re-run with its time, e.g.:"
  echo "  $0 7.25"
  exit 0
fi

TS="$1"
echo "Writing poster from t=${TS}s ..."
# -ss before -i seeks by keyframe and is fast; putting it after is frame-exact.
ffmpeg -loglevel error -y -i "$SRC" -ss "$TS" -frames:v 1 \
  -vf "scale=1280:-2" -c:v libwebp -quality 82 -compression_level 6 \
  public/hero-poster.v3.webp

ls -lh public/hero-poster.v3.webp
echo
echo "Now point the video at it — one line in src/components/sections/HeroSection.tsx:"
echo '  poster="/hero-poster.v3.webp"'
echo
echo "Filename is versioned deliberately: the .v2 name is already in caches and"
echo "on the CDN, and reusing it would serve the old frame to returning visitors."
