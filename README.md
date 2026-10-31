# Bishal Biswas — Personal Builder Portfolio

A bespoke, production-ready personal developer portfolio built for **Bishal Biswas** — Student Developer, Builder & Experimenter across Software, AI, Embedded Systems, and Electronics.

Built with Next.js App Router, TypeScript, Tailwind CSS, and Motion for React.

---

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server Components & Static Site Generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with CSS custom properties
- **Animations**: [Motion for React](https://motion.dev/) (respects `prefers-reduced-motion`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Vercel ready

---

## 🎨 Design System & Palette

- **Background**: `#0B0D12` (Deep Obsidian)
- **Secondary Surface**: `#171A22` (Dark Slate)
- **Accent**: `#A8FF78` (Acid Lime)
- **Primary Text**: `#F4F5F7`
- **Muted Text**: `#A5A8B3`
- **Borders**: `rgba(244, 245, 247, 0.08)`
- **Typography**: Space Grotesk (Headings), Inter (Body), JetBrains Mono (Technical / Code / Metadata)

---

## 🚀 Projects Showcased

1. **EDEN**: Custom voice assistant powered by ESP32 hardware, microphone streaming, local Whisper speech recognition, and Flask backend.
2. **ATTENDER**: Full-stack attendance management platform featuring Next.js, Supabase, role-based workflows, and photo-assisted verification concepts.
3. **CraveAI**: Food discovery and recipe curation platform with Supabase PostgreSQL full-text search and AI-assisted cooking steps.
4. **SmartShut**: Smart biometric security and energy-saving automation concept with optical fingerprint sensor and PIR occupancy cutoffs.
5. **Embedded & Hardware Experiments**: Microcontroller workflows, ESP-NOW telemetry nodes, I2S audio pipelines, and sensor circuits.

---

## ✏️ How to Customize Your Portfolio

All personal data, projects, case studies, verified skills, and links are concentrated inside:

👉 **[`src/data/portfolio.ts`](src/data/portfolio.ts)**

You only need to edit this single file to update:
1. **Developer Information**: Name (`developer.name`), location, education (`education: [...]`), milestones, and portrait (`developer.portraitUrl`).
2. **Projects & Case Studies**: Add, remove, or modify projects in `projects: [...]`. Each project supports honest screenshots or automatic preview badges, role breakdowns, constraints, implementation steps, and delivered features.
3. **Tech Stack**: Update the verified technologies under each category in `skills: [...]`.
4. **Currently Building**: Update your active workbench experiments in `currentlyBuilding: [...]`.
5. **Contact Information**: Set your real `email`, GitHub, and LinkedIn links.

---

## 🚀 Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Type-check:
   ```bash
   npx tsc --noEmit
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## ☁️ Deploying to Vercel

1. Push this repository to GitHub or GitLab.
2. Log into [Vercel](https://vercel.com/) and click **Add New... > Project**.
3. Import the repository. Next.js App Router will be detected automatically.
4. Click **Deploy**.
