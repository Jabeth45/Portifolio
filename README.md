# Yabets-Melese

Personal portfolio site. React + Vite.

## Run it
```bash
npm install
npm run dev        # local site
npm run build      # production build into dist/
npm run preview    # open the built site
```
Needs Node 20.19 or newer.

## Change the content
Everything you edit is in `src/data/`:

| File | What it controls |
|---|---|
| `profile.js` | name, headline (role), intro, photo, CV, GitHub, email, footer location |
| `skills.js` | the five skill rows and their items (Languages, Web, Databases, Security, Tools) |
| `projects.js` | the project cards, plus the "coming soon" tiles |
| `icons.js` | the skill icons (generated, you rarely touch it) |

### Keep it in sync with the CV
The headline, intro, skills, project names and project descriptions use the CV wording. When you change one, change the other. The CV does not list sqlmap, but the site does (Security row): add it to the CV or remove it from `skills.js`.

### CV
1. Copy the PDF into `public/` (for example `public/Yabets-Melese-CV.pdf`).
2. In `profile.js` set `cv: { file: "/Yabets-Melese-CV.pdf", downloadName: "Yabets-Melese-CV.pdf" }`.

The Download CV button then shows in the hero and in Contact. It stays hidden while `cv` is `null`. Leave your phone number and home address off a public CV.

### Projects
- Each card has an icon in `public/projects/` (listed in `projects.js`).
- `isPublic: false` shows "Repository going public soon" with no link. When the repo is public, set it to `true` and redeploy.
- **Coming soon tiles:** the `upcoming` list in `projects.js` draws the small icon-only tiles under the cards. Clicking one opens an empty panel that says "Soon". Add or remove entries to change how many show; `icon` is a key from `icons.js` and `label` is only read aloud by screen readers. When a project is ready, add it to `projects` and delete its tile.
- The repo `RC4_Malware` has "Malware" in its name. Consider renaming it (for example `rc4-file-cipher`); GitHub redirects the old link, then update `repo` in `projects.js`.

### Skills and icons
- Brand logos come from Simple Icons (CC0). Nmap, sqlmap and Privilege Escalation have no official logo, so they use Lucide line icons (ISC). Java, Networking and the tile icons come from Material Design Icons (Apache-2.0). All sets are copied into `src/data/icons.js`, so nothing loads from a CDN.
- To add a skill: add `{ name, icon }` in `skills.js`. If the icon is new, add its path to `icons.js` (brand logos use a 24x24 `path`, line icons use a list of shapes).

### Photo
Replace `public/profile.webp` with a square photo, 600x600 or bigger, and update `width` and `height` in `profile.js`. The current one is 200x200, so it looks soft on sharp screens.

### Favicon and logo
- The tab icon is your brain-and-circuit icon, traced to vectors from the original image. Files in `public/`: `favicon.svg` (tab), `favicon.ico` (16/32/48), `apple-touch-icon.png` (180, square, iOS rounds it), `icon-192.png` and `icon-512.png` (listed in `site.webmanifest`).
- The tab versions show the brain slightly larger inside the tile so it stays readable at 16px.
- The navbar and footer brain is the same drawing (`src/components/BrandMark.jsx`). Its color is `--accent-text` in `src/styles.css`.
- Browsers cache favicons very hard. The links in `index.html` end in `?v=2`; change it to `?v=3` whenever you change the icon again. After deploying, a hard refresh or a private window shows the new one.

## Look
- Colors are tokens at the top of `src/styles.css`: background `#09090b`, cards `#111114`, lines `#26262d`, text `#f4f4f5`, muted `#a1a1aa`, accent `#8b5cf6`, purple text `#a78bfa`.
- Text on the purple button is the dark background color, because white fails the contrast check on `#8B5CF6`.
- No light theme, no toggle, no gold, no hacker effects. Only the hero has a small fade-in, and it turns off for people who prefer reduced motion.
- Font: Inter, bundled with the site.
- Footer: brain mark, copyright line, a short "designed & built in" note and a back-to-top link. Your name is not repeated there on purpose; it is already in the navbar and hero.

## Put it online
```bash
git init
git add .
git commit -m "feat: new portfolio"
git branch -M main
git remote add origin https://github.com/Jabeth45/<repo-name>.git
git push -u origin main
```
Then on Vercel: Add New Project, import the repo, framework Vite (build `npm run build`, output `dist`). Open the preview link on your phone before you go to production.

## Security notes
- Static site: no login, no forms, no secrets.
- `vercel.json` sets a strict Content Security Policy and other headers. Do not add inline `<script>` or `style=""`; add files instead. If you add a third-party service, add its domain to the policy on purpose.
- Dependency versions are exact. Run `npm audit` before each deploy.

## Still to do
- [ ] Add your CV (see above)
- [ ] Swap in a higher-resolution photo
- [ ] Make each repo public, then flip its `isPublic`
- [ ] Push to GitHub and import into Vercel
