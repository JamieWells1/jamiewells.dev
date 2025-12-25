# jamiewells.dev

Personal agency portfolio site for Jamie Wells — a 20-year-old product engineer who builds SaaS products from scratch for founders.

## About Jamie

Software engineer at a finance company by day, product builder on the side. Has shipped consumer apps, developer tools, and fintech systems. Works fast because he knows what matters — not an agency, just one person who builds things that work.

Specializes in **builder-viewer interfaces** — products where users create, design, or build content. Complex state management, real-time editing, undo/redo systems, nested components. These patterns appear across all three shipped products.

## Shipped Products

### SkillDen

**Gamified skill tree builder** — skillden.app

Built in 18 hours. AI-powered. Users visualize and track real-life skill progressions using a game-like DAG (Directed Acyclic Graph) interface. Think skill trees from RPGs, but for actual skills.

Key features:

- DAG structure with foreign keys for multiple prerequisites
- 3x3 max connections constraint for low cognitive load
- Task-based progression with XP/Skill Points gamification loop
- "Current Quests" mobile view for actionable, dopamine-friendly UX
- DSL for power users to build trees via code
- Public/shared trees for user acquisition and content seeding
- Creator marketplace monetization model

### ProofBase

**Portfolio builder for degree apprentices** — proofbase.app

1000+ users. Monetized. Dynamic, professional portfolios with built-in analytics and AI-powered optimization.

Key features:

- Real-time portfolio builder with drag-and-drop sections
- AI Smart Review with 5-point analysis and improvement suggestions
- Comprehensive analytics dashboard (visitors, engagement, geographic data)
- Gamified leaderboards with ProofScore ranking system
- Referral system with commission tracking
- CV export (PDF/DOCX) with ATS optimization
- Custom subdomains (yourname.proofbase.app)

Target audience: Aspiring apprentices (mainly sixth form students), educational institutions, apprenticeship employers.

### StudentVault (Exited)

**Collaborative learning platform**

Create and share revision resources in course structures. Flashcard system with cross-platform sync.

Key features:

- Course-based content organization
- Collaborative resource sharing
- Progress tracking and insights
- Search across all materials

## What This Site Is

A static landing page designed to convert potential clients. The site communicates a clear value proposition: bring an idea, get a shipped product in weeks. It showcases the three products above as proof of execution capability.

## Target Audience

Non-technical founders who have a clear product idea but lack the technical skills or co-founder to build it. They want speed, competence, and a working URL — not a proposal deck.

## Site Structure

- **Hero** — "I turn ideas into shipped products" with CTA
- **Proof Strip** — Key metrics (18 hours to ship, 1000+ users, monetised traction)
- **Problem/Solution** — Why agencies and freelancers don't cut it
- **Responsibilities Split** — Clear division of what the client brings vs what gets delivered
- **Specialization** — Builder-viewer interfaces expertise
- **Timeline** — 3-week delivery process (Week 0: define, Weeks 1-2: build, Week 3: ship)
- **Portfolio** — Image galleries for each shipped product with modal lightbox
- **Fit Criteria** — Qualifying questions for potential clients
- **About** — Brief personal background
- **CTA** — Email contact

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion

## Design

Dark theme (#0a0a0a background) with product-specific accent colors:

- SkillDen: Amber (#f59e0b)
- ProofBase: Purple (#8b5cf6)
- StudentVault: Green (#22c55e)

Typography uses Geist Sans and Geist Mono. Minimal, high-contrast aesthetic optimised for readability and professionalism.

## Running Locally

```bash
npm install
npm run dev
```

Opens at http://localhost:3000
