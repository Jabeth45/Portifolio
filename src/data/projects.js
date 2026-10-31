// EDIT ME: one object per project, shown in this order (same order and names as the CV).
//
// isPublic: false -> the card shows "Repository going public soon" and no link.
//           true  -> the card shows a "View on GitHub" link to `repo`.
// When you make a repo public on GitHub, flip its isPublic to true and redeploy.
//
// image: a small square-ish icon shown in the card header (files live in /public/projects).
export const projects = [
  {
    title: "NexEye",
    type: "SECURITY TOOL",
    desc: "A Linux command-line tool that checks the public side of a domain you own, flags the gaps to fix first, and saves the proof behind every finding.",
    tags: ["Linux", "Command line", "Security"],
    image: { src: "/projects/nexeye.svg", width: 64, height: 64 },
    repo: "https://github.com/Jabeth45/nexeye",
    isPublic: false,
  },
  {
    title: "LiveSync",
    type: "WEB APP",
    desc: "A browser karaoke platform for uploading music, syncing lyrics, recording live vocals and replaying performances, built on browser audio APIs and local storage.",
    tags: ["Web Audio", "Browser", "Local storage"],
    image: { src: "/projects/livesync.webp", width: 120, height: 125 },
    repo: "https://github.com/Jabeth45/voice-studio-live",
    isPublic: false,
  },
  {
    title: "YouTube Analytics Bot",
    type: "TELEGRAM BOT",
    desc: "A Telegram bot that shows your YouTube channel stats on demand: subscribers, views, top videos and recent uploads, all from a chat.",
    tags: ["Telegram", "YouTube", "Analytics"],
    image: { src: "/projects/yt-analytics.svg", width: 64, height: 64 },
    repo: "https://github.com/Jabeth45/YT-Analytics_Bot",
    isPublic: false,
  },
  {
    title: "RC4 File Encryptor",
    type: "CRYPTOGRAPHY",
    desc: "A C++17 tool that encrypts and decrypts files with the RC4 cipher. Built for learning.",
    tags: ["C++17", "Encryption", "Educational"],
    image: { src: "/projects/rc4.webp", width: 398, height: 248 },
    repo: "https://github.com/Jabeth45/RC4_Malware",
    isPublic: true,
  },
];

// Projects that are not published yet. Each one shows as a small icon tile with no text;
// clicking it opens an empty panel that just says "Soon".
// "icon" is a key from icons.js. "label" is only read aloud by screen readers.
// Add or remove entries to change how many tiles show.
export const upcoming = [
  { icon: "tileSecurity", label: "Upcoming security project, coming soon" },
  { icon: "tileCode", label: "Upcoming web project, coming soon" },
  { icon: "tileTerminal", label: "Upcoming tool, coming soon" },
];
