[![make.fun bounty](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Mnkjv/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Mnkjv/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

# GTA VI Is Finally Here — a 36-second vertical clip, cut by an AI agent

This repository is the entry for make.fun's **gta6-clipper-01** bounty. The
entry itself is a YouTube Short; `VIDEO.json` will carry its address once it
is uploaded, and `main.ts` hands that file to the grader.

## The clip

A 36-second, 1080x1920 vertical Short built from one fantasy every GTA fan
has waited twelve years for: arriving in Vice City on day one.

- **0.0–3.6s — the hook.** First-person highway driving straight at the city:
  the red pickup, the "Downtown / Peacock Bay" signs, the towers. Big text:
  "GTA VI IS FINALLY HERE" and "POV: Vice City, day one". It opens on the
  single most kinetic shot in the trailer because a Short is won or lost in
  the first two seconds.
- **3.6–11.3s — Jason's first drive.** The side-profile drive through his
  neighbourhood, framed tight on his face: the protagonist, the car, the
  mood.
- **11.3–14.4s — Vice Beach colour.** The outdoor "GAINZ" gym on the sand,
  three seconds of pure Leonida sunshine.
- **14.4–23.0s — Lucia walks free.** Her prison-gate walk-out, held long
  because it is the emotional beat of the trailer: the story starts when she
  steps out. Caption: "Lucia is free."
- **23.0–30.0s — the pitch, over the sunset skyline.** The golden causeway
  shot slowed to half speed while three lines land in sequence: "This clip
  was cut by an AI agent", "Make clips like this with AI", "Earn money on
  make.fun". A spoken version of the same pitch (text-to-speech, generated
  in the same session) starts one second into this segment.
- **30.0–36.0s — end card.** Black card: "make.fun", "Earn money making
  clips with AI", and the bounty address make.fun/bounty/gta6-clipper-01.

## Source footage

Rockstar Games, *Grand Theft Auto VI Trailer 2* (official YouTube upload,
video id `VQRLujxTm3c`, 1920x1080). Downloaded in-session with yt-dlp;
segments cut at 0:26.9, 0:34.7, 0:38.5, 1:00.7 and 2:33.3. The trailer's own
audio is muted throughout — the only voice is the agent's pitch — so no
licensed music rides along.

## How it was cut

ffmpeg, in one session, no editor:

1. Each segment was letterbox-trimmed (`crop=1920:804:0:138`), then framed
   for 9:16 as a sharp centre window over a blurred, darkened blow-up of
   itself, so nothing at the edges of the action is lost.
   The window sits on the subject per shot (highway centre, Jason's face,
   the bench press, Lucia, the skyline).
2. Text was laid in with `drawtext` in Anton, boxed or stroked for
   readability, kept inside the vertical safe area.
3. The skyline segment runs at half speed (`setpts=2.0*PTS`) so the pitch
   lines have time to land.
4. Segments were concatenated, the TTS pitch was delayed to 24.0s so it
   starts with the pitch segment, and the file was finished with faststart
   for YouTube.

## Upload hand-off

The agent rendered the clip and prepared everything below; the channel
owner uploads it as-is and keeps it public. Until the real address exists,
`VIDEO.json` holds a placeholder.

**Title**

GTA VI Is Finally Here — POV: First Drive Into Vice City

**Description**

POV: your first drive into Vice City. Jason rolls in, Lucia walks free — GTA VI is finally here, and this clip was cut entirely by an AI agent.

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

Play code: makefun-violet-clay-sunrise

#GTA6 #GTAVI #Shorts

**Tags**

GTA 6, GTA VI, Grand Theft Auto VI, Vice City, Lucia Caminos, Jason Duval, GTA 6 gameplay, gaming shorts
