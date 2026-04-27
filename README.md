## Prompt 
You are a junior frontend developer and UI designer specializing in Next.js developer portfolios. Build a complete, production-ready personal portfolio for MD. Golam Sarwar — a web developer from Dhaka, Bangladesh with MERN stack experience who is currently learning Next.js.

---

## TECH STACK
- Next.js 14 (App Router, JavaScript)
- Tailwind CSS (darkMode: 'class')
- GSAP + ScrollTrigger (scroll-driven animations, timelines)
- Framer Motion (component-level animations, hover, transitions)
- Lenis (@studio-freight/lenis) (smooth scrolling — initialize in a client-side provider)
- next-themes (dark/light mode toggle — wrap layout in ThemeProvider, defaultTheme: "dark")
- lucide-react (icons)
- react-icons (tech logos via Si* icons e.g. SiReact, SiNodedotjs)

---

## DESIGN SYSTEM

Fonts: Import from Google Fonts
- Display/Headings: "Syne" (weights 600, 700, 800)
- Body: "DM Sans" (weights 400, 500)
(Import via next/font/google)

Color Palette (CSS variables in globals.css, applied via Tailwind theme extension):

Dark mode:
- bg-primary: #080C14
- bg-secondary: #0D1320
- accent-primary: #00D9FF (cyan)
- accent-secondary: #0066FF (electric blue)
- text-primary: #F0F4FF
- text-secondary: #8899AA
- border-color: rgba(0, 217, 255, 0.15)

Light mode:
- bg-primary: #F4F7FF
- bg-secondary: #FFFFFF
- accent-primary: #0055CC
- accent-secondary: #0099CC
- text-primary: #0A0F1E
- text-secondary: #4A5568
- border-color: rgba(0, 85, 204, 0.15)

Background: Use an animated mesh gradient (3 slow-moving radial blobs in CSS keyframes, colors: cyan, deep blue, dark navy). Add a faint noise texture overlay at 4% opacity. Add very faint CSS grid lines at opacity 0.03. Keep it subtle and professional — no particles, no heavy WebGL.

Glassmorphism: backdrop-blur-md, bg-white/5 dark:bg-white/5, border border-white/10

---

## SECTIONS TO BUILD

### 1. NAVBAR
- Sticky/fixed at top, glass background on scroll (backdrop-blur + bg-opacity transition)
- Logo: styled monogram "<GS />" in accent color using Syne font
- Nav links (smooth scroll to IDs): About, Education, Tech Stack, Skills, Projects, Contact
- ThemeToggle button using next-themes (sun/moon icon swap, lucide-react)
- Mobile: hamburger → Framer Motion animated slide-down drawer
- Entrance: Framer Motion fade-down on page load

### 2. HERO SECTION
- Full 100vh height
- Two-column layout: left = text content, right = profile image
- LEFT COLUMN content in this order:
  a. Eyebrow badge: "[ Available for Work ]" — animated with blinking cursor
  b. H1: "MD. Golam Sarwar" — GSAP stagger letter-by-letter reveal (split text)
  c. Typing animation cycling: "Full Stack Developer" | "MERN Stack Engineer" | "Next.js Developer" | "Problem Solver" — implement with Framer Motion or a useEffect typing hook
  d. Tagline: "Building fast, scalable web apps with clean code and modern tech."
  e. CTA Row: "View My Work" (filled accent button) + "Download Resume" (ghost/outlined button)
  f. Social icons row: GitHub, LinkedIn, Email (lucide-react or react-icons)
- RIGHT COLUMN: 
  - Circular image container (w-64 h-64 rounded-full, border with animated rotating conic-gradient ring)
  - Placeholder: gradient circle with "GS" initials — note "Replace with public/profile.jpg"
  - Subtle floating animation on image (CSS keyframe: translateY -10px to 10px, 4s ease-in-out infinite)
- GSAP Timeline on mount: stagger entrance of (eyebrow → h1 → typing → tagline → CTAs → socials → image)
- Overall entrance easing: power3.out

### 3. ABOUT ME SECTION
- Section ID: "about"
- Two-column: left = bio text, right = quick stats grid
- Heading: "About Me" with animated underline using CSS/Framer
- Bio text (4 short paragraphs):
  "I'm a passionate web developer from Dhaka, Bangladesh with hands-on experience in the MERN stack."
  "I enjoy building full-stack web applications that are fast, clean, and user-focused."
  "Currently leveling up with Next.js, TypeScript, and modern animation libraries."
  "Always learning, always building — I'm looking for opportunities to grow with a great team."
- Quick Stats (animated count-up on scroll trigger using GSAP):
  - "5+" Projects Built
  - "2+" Years Coding
  - "10+" Technologies
  - "100%" Dedication
- Stats cards: glassmorphism style
- Framer Motion: left content slides in from left, stats slide from right on ScrollTrigger

### 4. EDUCATION SECTION
- Section ID: "education"
- Section heading: "Education"
- Vertical timeline layout with 3 cards alternating left/right on desktop, stacked on mobile
- Timeline: vertical line that draws (scaleY 0 → 1) via GSAP ScrollTrigger
- Timeline dot at each card intersection (accent color, pulsing animation)
- Cards: glassmorphism, with icon (graduation cap — lucide-react)
- Card 1: SSC | "[Your School Name]" | "[Year]" | "GPA: [X.XX]"
- Card 2: HSC | "[Your College Name]" | "[Year]" | "GPA: [X.XX]"
- Card 3: B.Sc in Computer Science & Engineering | "[Your University Name]" | "2022 – Present" | "CGPA: [X.XX]"
- Cards stagger in with GSAP ScrollTrigger as user scrolls

### 5. TECH STACK SECTION
- Section ID: "tech-stack"
- Section heading: "Tech Stack"
- Subtitle: "Technologies I work with"
- Icon grid (auto-fill, minmax(100px, 1fr))
- Include these technologies with official SVG logos via react-icons (Si* prefix):
  HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Tailwind CSS,
  Node.js, Express.js, MongoDB, Git, GitHub, VS Code, Figma, Postman
- Each item: icon (2.5rem, accent color on hover), tech name below, soft card background
- Hover: scale(1.1) + box-shadow glow in accent color (Framer Motion whileHover)
- Grid entrance: Framer Motion stagger (0.05s per item) triggered by scroll

### 6. SKILLS SECTION
- Section ID: "skills"
- Section heading: "Skills"
- Two-column layout with skill categories
- Each skill: label (left), percentage (right), animated horizontal progress bar
- Bar fill animation: GSAP ScrollTrigger — scaleX from 0 → 1, easing power2.out, triggered on scroll
- Bar color: accent gradient (cyan → blue)
- Skills list:
  Frontend: React (90%), Next.js (75%), Tailwind CSS (88%), JavaScript (85%), HTML/CSS (92%)
  Backend: Node.js (78%), Express.js (75%), REST APIs (80%)
  Database: MongoDB (72%), Mongoose (70%)
  Tools: Git/GitHub (82%), VS Code (95%)
  Learning: TypeScript (60%), System Design (45%)

### 7. PROJECTS SECTION
- Section ID: "projects"
- Section heading: "Projects"
- Subtitle: "Things I've built"
- 3-column card grid (responsive: 1col mobile, 2col tablet, 3col desktop)
- Each project card:
  - Gradient thumbnail (top of card, different gradient per card)
  - Project title
  - Short description (max 2 lines, text-secondary)
  - Tech tags (small pill badges: React, Node.js, etc.)
  - Buttons row: "Live Demo" (accent filled) + "GitHub" (ghost)
  - Optional "Featured" badge top-right
- 3 placeholder projects:
  1. "TaskFlow App" — MERN stack task management app with authentication
     Tags: React, Node.js, Express, MongoDB
  2. "DevBlog Platform" — Blogging platform with markdown support
     Tags: Next.js, Tailwind, MongoDB
  3. "E-Shop" — Full-stack e-commerce with cart and payment
     Tags: React, Node.js, MongoDB, Express
- Card hover: translateY(-8px), border glow, image zoom (Framer Motion)
- Entrance: Framer Motion stagger, triggered by scroll

### 8. CONTACT SECTION
- Section ID: "contact"
- Section heading: "Get In Touch"
- Subtitle: "I'm currently open to opportunities — let's talk!"
- Two-column layout:
  LEFT: Contact info + social links
    - Email: golamsarwar@email.com
    - Location: Dhaka, Bangladesh
    - LinkedIn, GitHub icon links (large, hoverable)
    - Friendly note: "I typically reply within 24 hours."
  RIGHT: Contact form
    - Fields: Name, Email, Subject, Message (textarea)
    - All inputs: glassmorphism style, accent border on focus, smooth transition
    - Submit button: "Send Message →" with hover animation
    - Note: wire up to a free service (EmailJS or Formspree) — add comment with instructions
- Framer Motion: left slides from left, form slides from right on scroll

### 9. FOOTER
- Simple, centered, minimal
- "<GS />" monogram in Syne font
- Horizontal nav links (smooth scroll)
- Text: "© 2025 MD. Golam Sarwar — Built with Next.js & ♥"
- Back-to-top button (ArrowUp icon, fixed bottom-right on mobile, inline on desktop)
- Framer Motion: fade-up entrance

---

## ANIMATION RULES
- GSAP: use for page load timeline (hero), scroll-triggered reveals, skill bars, timeline draw
- Framer Motion: use for all component-level hover/tap states, section entrances, navbar, drawer
- Lenis: initialize in a 'use client' LenisProvider component, wrap app in layout.tsx
- All GSAP ScrollTrigger instances: start "top 80%" trigger, scrub: false
- Always use `will-change: transform` on animated elements
- Respect `prefers-reduced-motion` — wrap all animation logic with a check:
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
- Stagger delays: 0.08s between children for grids, 0.12s for list items
- Duration: 0.4s–0.7s for scroll reveals, 1.0s–1.4s for hero title

---

## CODE QUALITY RULES
- TypeScript strict mode
- Each section is its own component file in components/sections/
- Reusable: SectionHeading component, GlassCard component, AnimatedBackground component
- All client-side animation code must be in 'use client' components
- Use useRef + useEffect for GSAP — never use document.querySelector
- Clean up GSAP ScrollTrigger instances in useEffect cleanup function
- Tailwind: use cn() (clsx + tailwind-merge) for conditional classes
- All images use next/image
- Comment placeholder zones clearly: "// TODO: Replace with real data"

---

## OUTPUT FORMAT
Generate the complete file tree and ALL file contents in order:
1. package.json
2. tailwind.config.ts
3. app/globals.css
4. app/layout.tsx
5. app/page.tsx
6. components/providers/LenisProvider.tsx
7. components/layout/Navbar.tsx
8. components/layout/Footer.tsx
9. components/ui/ThemeToggle.tsx
10. components/ui/AnimatedBackground.tsx
11. components/ui/SectionHeading.tsx
12. components/ui/GlassCard.tsx
13. components/sections/Hero.tsx
14. components/sections/About.tsx
15. components/sections/Education.tsx
16. components/sections/TechStack.tsx
17. components/sections/Skills.tsx
18. components/sections/Projects.tsx
19. components/sections/Contact.tsx

Each file should be complete and production-ready. Do not use placeholder comments for code — write the actual implementation.