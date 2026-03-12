# dangruskin.com — Site Content

_Edit the text below and ask Claude Code to apply changes to the HTML files._

---

## PAGE: index.html (Home)

### Nav
- Logo: `Dan Gruskin`
- Nav links: `Work` | `About` | `Contact`

### Hero
- Eyebrow: `Senior Product Designer — San Diego, CA`
- Headline line 1: `I design for`
- Headline animated words (cycling): `high-stakes moments` | `messy systems` | `complex workflows`
- Headline line 2: `and the people who`
- Headline line 3: `can't work without them.`
- Sub copy: `15+ years across civic tech, clean energy SaaS, and consumer brands. I design with research, ship with craft, and thrive where the problem space is genuinely hard.`
- Meta label 1: `Currently`
- Meta value 1: `Senior Product Designer, Civic Tech`
- Meta label 2: `Open to`
- Meta value 2: `Startups — Remote`

### Work Section
- Section label: `Selected Work`

#### Card 01 — Supervisor Review Mode
- Title: `Supervisor Review Mode`
- Tags: `Workflow Design` · `Enterprise UX`
- Thumb tag: `Civic Tech`

#### Card 02 — Interview Platform Redesign
- Title: `Interview Platform Redesign`
- Tags: `UX Design` · `Enterprise UX`
- Thumb tag: `Civic Tech`

#### Card 03 — GridX Empower Re-imagined
- Title: `GridX Empower Re-imagined`
- Tags: `SaaS` · `Product Strategy`
- Thumb tag: `Clean Energy`

#### Card 04 — GridX Interactive Touchscreen Demo
- Title: `GridX Interactive Touchscreen Demo`
- Tags: `Interactive` · `Sales Enablement`
- Thumb tag: `Clean Energy`

#### Card 05 — Taylor Guitars Series Pages
- Title: `Taylor Guitars Series Pages`
- Tags: `E-commerce` · `Content Design`
- Thumb tag: `Consumer Brand`

#### Card 06 — Taylor Sustainability Hub
- Title: `Taylor Sustainability Hub`
- Tags: `Editorial Design` · `Brand`
- Thumb tag: `Consumer Brand`

### About Section
- Section label: `About`
- Heading: `Just a guy who learned Photoshop and turned it into a career.`
- Body paragraph 1: `I started in web dev and print, moved through creative direction, and landed in product design because that's where design actually changes how people work.`
- Body paragraph 2: `Today I build tools for asylum and refugee case management — the kind of work where good design isn't a nice-to-have. Previously GridX and Taylor Guitars. Always looking for the next hard problem.`

#### Experience List
- Section label: `Experience`
- Role: `Senior Product Designer` | Company: `Civic Tech` | Years: `2022 — Now`
- Role: `Product Designer` | Company: `GridX` | Years: `2019 — 2022`
- Role: `Creative Director` | Company: `Taylor Guitars` | Years: `2014 — 2019`
- Role: `Designer / Developer` | Company: `Various` | Years: `2008 — 2014`

### Contact Section
- Heading line 1: `Let's work`
- Heading line 2 (italic): `together.`
- Body: `I'm actively looking for my next role at a fast-moving startup. If you're building something that matters and need a designer who can lead, research, and ship — let's talk.`
- Link label: `Email` | Value: `dan@dangruskin.com`
- Link label: `LinkedIn` | Value: `linkedin.com/in/dangruskin`
- Link label: `Current Site` | Value: `dangruskin.com`

### Footer
- Left: `© 2026 Dan Gruskin`
- Right: `San Diego, CA — Open to Remote`

---

## PAGE: supervisor-review-mode.html

### Hero
- Eyebrow: `Case Study`
- Title line 1: `Supervisor`
- Title line 2 (italic): `Review Mode`
- Summary: `Moved the entire supervisor case review workflow from Adobe Acrobat and local desktops into a cloud-based application.`

#### Meta
- Role: `Product Designer`
- Team: `Designer, PM, Engineering, Stakeholders`
- Timeline: `4 Months`
- Domain: `Civic Tech · Enterprise UX`

### The Problem
- Section label: `The Problem`
- Statement: `Supervisors reviewed asylum cases using Adobe Acrobat, local file folders, and manual tracking.`
- Body paragraph 1: `Each review required downloading documents, editing in Acrobat, saving locally, and manually tracking versions across a desktop filing system. The entire process happened outside the application where cases actually lived.`
- Body paragraph 2: `This created real risk: missed steps, version confusion, and lost files — in a domain where accuracy directly affects asylum and refugee outcomes.`
- Body paragraph 3: `The goal was to bring the full review workflow into the application without disrupting how officers worked around supervisors.`

### Results
- Section label: `Results`
- Stat 1: `1,200+` | Label: `Sessions in month two, above projections`
- Stat 2: `22%` | Label: `Month-over-month growth, sustained through Q1`
- Stat 3: `83%` | Label: `First-session happy path completion`

### Process
- Section label: `Process`

#### Phase 01 — Research & Analysis
Interviewed 7 supervisors to map the actual process, not the documented one. The gap was significant — users had built their own workarounds: personal naming conventions, duplicate backups, handwritten checklists. I translated these into user flows showing every tool, handoff point, and breakdown. These flows became the primary artifact for aligning with leadership.

#### Phase 02 — Workshops
Three targeted workshops instead of one alignment meeting. **Leadership:** defining outcomes, not features. **Engineering:** mapping technical constraints early. **Cross-functional design group:** rapid ideation and stress-testing assumptions. Compressed months of alignment into two weeks.

#### Phase 03 — Prototyping
Built a high-fidelity prototype early to make design decisions concrete enough to critique. The core challenge: supervisors needed a distinct review context without losing their place in the application. I explored three patterns (overlay, new tab, contextual panel) and landed on a mode toggle that transformed the existing interface in place. The prototype made scope conversations with leadership specific rather than abstract.

_NDA note: The prototype is not shown here. This project involves sensitive casework data and is covered under NDA._

#### Phase 04 — Usability Testing
Four users, one task: complete a full review. Alongside the overall experience, we A/B tested three design decisions: three-column vs. single-column layout, filled vs. unfilled backgrounds for answered fields, and whether to include interview content inline. We also used the sessions to run discovery on a separate upcoming project.

_NDA note: Session artifacts are under NDA. Key quotes from testing:_

Testing quotes:
- `"I prefer the columns, definitely the columns, makes it feel more like the form and it's easier for me to see more info at once"`
- `"The grey is actually kind of nice - particularly when scrolling quickly like case review it's much harder to miss something"`
- `"It is helpful to me, because usually I have both screens open to view both (assessment and interview) and have to go between them"`

#### Phase 05 — Design System & Handoff
Broke the final design into documented components and contributed them to our internal design system. Handoff included state documentation for every interactive element and a component map for engineering. This cut back-and-forth significantly during the build.

#### Phase 06 — Launch
Adoption had historically been a problem — users default to what they know. I worked with stakeholders to design the rollout: phased release with a pilot group, in-app guidance for first sessions, and a real-time feedback channel. 1,200+ sessions in month two.

### Key Screens
- Section label: `Key Screens`

#### Card 1 — Mode Toggle
- Label: `Mode Toggle`
- Description: `Transforms the interface in place — same case, different tools. No navigation required.`

#### Card 2 — Decision Flow
- Label: `Decision Flow`
- Description: `Concur / Not Concur as a deliberate modal action. Weight of the UI matches the weight of the decision.`

#### Card 3 — Automatic Notification
- Label: `Automatic Notification`
- Description: `Officer notification built into the concur flow. Eliminated a manual follow-up step.`

### What Users Said
- Section label: `What Users Said`
- Quote 1: `"The changes you guys made definitely make it easier in viewing it, because sometimes it's really easy to miss things."` — `Supervisor User`
- Quote 2: `"I've been using it and it's so much nicer than downloading and uploading and keeping track of everything!"` — `Supervisor User`
- Quote 3: `"Overall it's an improvement, but it's still not perfect and I still have to do a lot of other review tasks in other places."` — `Supervisor User — the starting point for the next phase`

### Takeaways
- Section label: `Takeaways`
- Heading: `Adoption was strong because users shaped the product.`
- Body paragraph 1: `Supervisors were involved at every stage — research, workshops, testing, rollout. When users have shaped a product, they show up for it.`
- Body paragraph 2: `The most useful post-launch signal: "still not perfect, still tasks elsewhere." That quote is now the starting point for the next phase.`
- Body paragraph 3: `What I'd change: a larger usability testing cohort. Four users caught real issues, but edge cases in supervisor workflows only surfaced post-launch.`

### Next Project
- Label: `Next Project`
- Title: `Case Finder`
- Sub: `Search & Filter · Information Architecture · Civic Tech`

---

## PAGE: interview-platform-redesign.html

### Hero
- Eyebrow: `UX Design · Civic Tech · Enterprise UX`
- Title line 1: `Interview Platform`
- Title line 2 (italic): `Redesign`
- Summary: `Reduced cognitive load for asylum and refugee officers by modernizing a 7-year-old interview notes UI — preserving every feature officers relied on while making the experience meaningfully easier to use.`
- Confidential note: `*This case study is based on confidential work. All sensitive details and data have been modified, abstracted, or removed. Visuals shown are conceptual representations.`

#### Meta
- Role: `Senior Product Designer`
- Team: `Design, Engineering, Leadership, Stakeholders`
- Timeline: `3 Months`
- Domain: `Civic Tech · Enterprise UX`

### The Problem
- Section label: `The Problem`
- Statement: `Asylum and refugee officers are already managing one of the most cognitively demanding jobs imaginable. The interview platform was adding to that load — not reducing it.`
- Body paragraph 1: `Officers conducting interviews are simultaneously taking verbatim notes, managing required forms, coordinating with attorneys and interpreters, and processing deeply personal — often heartbreaking — testimony. The stakes are as high as they get.`
- Body paragraph 2: `The legacy platform had been designed 7 years prior and never updated. It had accumulated friction: a cluttered interface, visual noise, and common actions that took more effort to execute than they should. Officers had adapted — but adapted doesn't mean optimal.`
- Body paragraph 3: `The opportunity wasn't to reinvent the product. It was to simplify what was already there — reduce visual noise, modernize the UI, and make the most common actions easier to execute — without disrupting the shortcuts and workflows officers had built over years of practice.`

### Results
- Section label: `Results`
- Stat 1: `30%` | Label: `Adoption rate in week one — strong for any UI update, exceptional for this user base`
- Stat 2: `194` | Label: `Officers opted in during the first week of the launch window`
- Stat 3: `1` | Label: `Bug report in launch week — a minor alignment fix for an edge case involving an extremely long question`

### Process
- Section label: `Process`

#### Phase 01 — Prior Research & Assumptions
50+ prior user interviews with officers meant I already had a deep picture of how the platform was being used — the workarounds, the friction points, the moments where the interface was fighting the user. No separate discovery round was needed. I drew directly on that knowledge to form design assumptions and identify the highest-leverage areas to address.

#### Phase 02 — Design Crit & Studio
Facilitated a design studio with 7 other designers to brainstorm approaches to the UI complexity and multi-form-factor input challenges. Running it as a structured crit gave us the range of directions we needed without losing focus. The output was a set of divergent ideas to evaluate and narrow.

#### Phase 03 — User Research & Prototype Testing
Three sessions with active officers. I mapped their real interaction patterns — reordering, bulk delete, core interview documentation — then presented mockups of the redesigned UI and asked for direct reactions. At the start of each session I asked users to score the current app out of 10. I got 7.5, 10, and 10. After seeing the new designs, all three said they'd score it higher.

#### Phase 04 — Design System & Handoff
Finalized the designs and built the new components directly into the Figma design system I manage for the team. Then ran a structured handoff meeting with engineering — documented, reusable pieces rather than static screens for developers to interpret.

#### Phase 05 — Development Collaboration
The build took about a month. I worked alongside the dev team in joint sessions throughout — resolving bugs, refining details, and making sure the shipped product matched the design intent. This phase also included navigating leadership feedback on whitespace. The resolution: tighter margins where they made sense, plus a new table view mode that displays Q&A side-by-side. Both sides got something real.

#### Phase 06 — Validation Testing & Launch
Four users, pre-launch. All four said they'd opt in. None found the changes disruptive. They called out color coding for multi-answer questions as a standout — particularly valuable in family and group interviews. I proposed an opt-in window before the full switchover: early adopters would surface bugs, and if they liked the experience, they'd become advocates before the change was mandatory. 194 users opted in during the first week. Only 6 turned it off.

### Key Screens
- Section label: `Key Screens`

#### Card 1 — Color-Coded Q&A
- Label: `Color-Coded Q&A`
- Description: `Multi-applicant answers color-coded by family member. In group and family unit interviews, officers track multiple people's responses within a single question thread — color coding turned a scanning problem into a clear, at-a-glance read.`

#### Card 2 — Table View
- Label: `Table View`
- Description: `Questions and answers displayed side-by-side. Designed for officers on small laptop monitors, and surfaced as the middle ground between leadership's density request and user research pointing toward breathing room.`

#### Card 3 — Drag & Drop Reordering
- Label: `Drag & Drop Reordering`
- Description: `Refined reordering and bulk delete interactions for the Q&A list. Officers reorganize elements throughout every interview — making this faster and more reliable removed a persistent friction that added up over long sessions.`

### What Users Said
- Section label: `What Users Said`
- Quote 1 (hero): `"Increase to maybe an 8.5. Family unit, question format, the color coding, with the questions and alignment it's easier on the eye."` — `Officer User — post-prototype session, on their revised score for the new UI`
- Quote 2: `"If I could go higher than a 10 I would, this looks cleaner and sharper."` — `Officer User — post-prototype session`
- Quote 3: `"The drag and drop conversational answer features are exciting and helpful."` — `Officer User — validation testing`
- Quote 4: `"The new UI is a refinement, not a disruption — I'd still rate this app 10/10."` — `Officer User — validation testing`

### Takeaways
- Section label: `Takeaways`
- Heading: `Listening to leadership and advocating for users aren't mutually exclusive — but it takes work.`
- Body paragraph 1: `The strongest tension in this project came from leadership feedback on whitespace. Their instinct was to compress the UI; the user research pointed the other direction. The table view mode was the resolution — not a compromise that satisfied no one, but a genuine solution that gave officers a choice and gave leadership the density option they wanted.`
- Body paragraph 2: `The opt-in rollout was a deliberate design decision. Early adopters surfaced edge cases we'd missed, became advocates in their offices, and gave us a feedback loop before the change was mandatory. 30% adoption in week one with almost no churn was the result.`
- Body paragraph 3: `Working on tools this high-stakes is a constant reminder that interface decisions are never neutral. Officers using this platform are documenting people's lives. Clarity, speed, and reduced friction aren't UX nice-to-haves here — they're the point.`

### Next Project
- Label: `Next Project`
- Title: `GridX Empower Re-imagined`
- Sub: `SaaS · Product Strategy · Clean Energy`

---

## PAGE: empower.html

### Hero
- Eyebrow: `Experience Design · Vision Work · Clean Energy`
- Title line 1: `GridX Empower`
- Title line 2 (italic): `Re-imagined`
- Summary: `A 2–5 year vision for GridX's Empower platform — introducing a campaign-driven, segmented widget system for utilities and a personalized, insight-rich experience for their customers.`

#### Meta
- Role: `Lead Experience Designer`
- Team: `Design, Product, Engineering, Executives`
- Type: `Vision / Strategy`
- Domain: `Clean Energy · SaaS`

### The Problem
- Section label: `The Problem`
- Statement: `GridX had powerful energy APIs. What it didn't have was a front end that utilities could actually put in front of customers.`
- Body paragraph 1: `Utilities want to guide their customers through genuinely complex decisions — time-of-use rates, EV adoption, solar, rebates — without overwhelming them. GridX's Empower platform delivered insights through APIs, but was missing the embeddable front-end layer, personalization, and measurement tools utilities needed to deliver those insights at scale.`
- Body paragraph 2: `The core problem: how might we help utilities deliver the right widget to the right customer at the right time — and prove it works — while keeping implementation simple and on-brand?`
- Body paragraph 3: `This wasn't a ship-next-quarter project. It was a 2–5 year north star: a campaign-driven energy personalization system that could align product, engineering, and executive stakeholders around a shared vision of where Empower needed to go.`

### Results
- Section label: `Results`
- Stat 1: `Highly +` | Label: `Positive executive feedback — the vision landed exactly as intended`
- Stat 2: `Direct →` | Label: `Informed enhancements shipped to current products: improved targeting, richer analytics, expanded widget library`
- Stat 3: `Full ✓` | Label: `Stakeholder alignment achieved — executive team, product, and engineering moving in the same direction`

### Process
- Section label: `Process`

#### Phase 01 — Research
I synthesized qualitative research into problem statements and potential solutions, then stress-tested them with internal teams. Two distinct user types emerged with distinct needs: **utility users** — program managers, marketers, and admins — needed a simple way to orchestrate widget campaigns, target precise customer segments, and measure impact. **Utility customers** needed clear, contextual guidance that demystified bills and time-of-use rates, highlighted personalized savings opportunities, and surfaced next steps that turned insight into action.

I also established product constraints upfront: white-labelable, API-forward, and low-lift for utility IT teams to implement.

#### Phase 02 — Hypothesis
If utilities can segment and sequence widgets like lightweight campaigns — and customers receive contextual, timely guidance — then we'd see higher engagement and more program enrollments (EV, TOU, demand response), with a lower support burden. This became the design brief that shaped everything downstream.

#### Phase 03 — Information Architecture
After going deep into the GridX API capabilities, I mapped the full information architecture for the reimagined platform. This 1,000-foot view revealed the natural structure of the product: a Campaign system for utilities to orchestrate widgets, an API explorer for education and custom widget creation, and a Widget Library — both pre-built and custom — as a potential marketplace. Getting this structure right before wireframing avoided expensive rework later.

#### Phase 04 — Wireframes
I created lightweight wireframes to validate information density and component structure before committing to high fidelity. I moved quickly from lo-fi to hi-fi — the goal wasn't to validate aesthetics, it was to confirm that the right information was in the right place. Speed mattered here because the real artifact was the prototype.

#### Phase 05 — Prototype
I built a complete high-fidelity prototype of the "happy path" to present to executives. Key surfaces included: a **Homepage** with campaign insights and quick-start actions; a **Campaigns** section with filterable campaign management and a creation wizard; **Campaign Detail** pages with embed code, reporting dashboards, and widget previews with white-label branding; an **APIs** explorer for self-education; and a **Widget Library** with pre-built and custom widget management — a foundation for a future marketplace.

### Key Screens
- Section label: `Key Screens`

#### Card 1 — Campaigns Dashboard
- Label: `Campaigns Dashboard`
- Description: `Campaign Insights surface active campaigns, impressions, and engagement at a glance — with a filterable list and one-click campaign creation.`

#### Card 2 — Campaign Detail & Reporting
- Label: `Campaign Detail & Reporting`
- Description: `Each campaign surfaces embed code, live analytics dashboards, and a white-labeled widget preview — giving utilities everything to deploy and measure in one place.`

#### Card 3 — Widget Library
- Label: `Widget Library`
- Description: `A browsable library of pre-built widgets — Cost Over Period, Rate Comparison, EV Purchase, Solar Adoption — each tagged by category and API, with a path to custom widget creation.`

### Takeaways
- Section label: `Takeaways`
- Heading: `Sometimes UX isn't about shipping tomorrow — it's about making the future concrete.`
- Body paragraph 1: `The vision was considered too future-focused for immediate production, which was expected and fine. That wasn't the goal. The goal was to give GridX's leadership a shared, specific picture of where Empower could go — concrete enough to align around, detailed enough to inform current roadmap decisions.`
- Body paragraph 2: `It worked. The exploration directly influenced enhancements that did ship: improved targeting options, richer widget analytics, and an expanded widget library. The demo sparked delivery work and set a practical path forward — even if it is a long path.`
- Body paragraph 3: `This project reinforced something I believe strongly: vision work is real design work. Done well, it changes how an organization thinks, not just what it builds next quarter.`

### Next Project
- Label: `Next Project`
- Title: `GridX Interactive Touchscreen Demo`
- Sub: `Interactive · Sales Enablement · Clean Energy`

---

## PAGE: gridx-touchscreen.html

### Hero
- Eyebrow: `Experience Design · Sales Enablement · Clean Energy`
- Title line 1: `GridX Interactive`
- Title line 2 (italic): `Touchscreen Demo`
- Summary: `A self-paced touchscreen web app for GridX conference booths — letting attendees explore product features on their own terms, while giving sales staff more meaningful conversations.`

#### Meta
- Role: `Lead Experience Designer`
- Venue: `Clean Energy Conferences`
- Audience: `Current & Prospective Customers`
- Domain: `Clean Energy · Sales Enablement`

### The Problem
- Section label: `The Problem`
- Statement: `The GridX booth was great at talking to people who already knew GridX. Bringing in new people was a different problem.`
- Body paragraph 1: `At major clean energy conferences, GridX's primary demo format was a 20–45 minute live walkthrough. The problem: that format worked well for existing customers wanting to see what's new, but did almost nothing to draw in unfamiliar attendees. Most people walking past the booth weren't going to stop for a long demo — and many were actively avoiding the "hard sell" they assumed would follow.`
- Body paragraph 2: `The opportunity was to create a self-contained experience that anyone could interact with on their own terms — no salesperson required. Something that communicated product value quickly, invited exploration, and warmed up prospects before a human conversation happened.`
- Body paragraph 3: `My role at GridX was Lead Experience Designer, which meant I owned every touchpoint — software, marketing, physical booth. This project sat squarely at the intersection of all three.`

### Results
- Section label: `Results`
- Stat 1: `24%` | Label: `Increase in booth traffic compared to prior events with live-demo-only format`
- Stat 2: `18%` | Label: `Increase in full demo requests — better-informed attendees were more likely to commit`
- Stat 3: `100%` | Label: `Enjoyment of 'Deci' — our custom character who became the GridX mascot going forward`

### Process
- Section label: `Process`

#### Phase 01 — Research
I started with user behavior research focused on the in-booth conference experience — which I had first-hand knowledge of from attending our largest conference the previous year. I also conducted individual interviews with sales and marketing team members to understand what they actually needed the booth to do. Four key insights came out of those conversations: demos were too long and going to the wrong people; we were good at talking to folks we knew but poor at attracting strangers; people were avoiding the booth to dodge a hard sell; and a quick, visual product overview would do a lot of the heavy lifting.

#### Phase 02 — Brainstorming & Ideation
Based on the research, the direction was clear: an interactive demo that was fast, self-directed, and gave a compelling overview of GridX's products and capabilities. The experience needed to work on multiple screen sizes (large pedestal displays and iPads), require zero instruction to use, and hold up in a noisy, busy event environment. We also committed early to building a reusable framework — not a one-time asset.

#### Phase 03 — UI Design
I designed a clean, touch-optimized interface for the web app — large tap targets, simple navigation, and clear visual hierarchy that worked at a glance. The system supported tap and back navigation for quick topic switching and was built to scale across screen sizes without losing usability.

#### Phase 04 — Character Design & Animation
I designed 'Deci' — a custom character to guide users through the experience with personality and warmth. The goal was to make a complex software platform feel approachable rather than intimidating. Deci provided visual continuity across the experience and gave the brand something to rally around. After the conference, Deci became the official GridX mascot used across marketing materials.

#### Phase 05 — Video & Content
I developed the scripts for each product feature video — each under two minutes, focused on a single benefit, designed for maximum retention in a distracted environment. I also directed the visual style of animations and video elements to maintain brand consistency. Each video was a complete, standalone piece: a prospect could watch one or five and leave knowing something specific and useful.

#### Phase 06 — Engineering & Launch
I managed the development cycle as PM for a hired developer and video editor, coordinated hardware selection for the booth, and redesigned the physical booth layout to integrate the touchscreen experience. The result launched at our next major conference and drew consistent traffic throughout.

### Key Screens
- Section label: `Key Screens`

#### Card 1 — Home Screen
- Label: `Home Screen`
- Description: `Deci greets attendees and presents the four product areas. Self-directed from the first tap — no salesperson required to get started.`

#### Card 2 — Feature Walkthrough
- Label: `Feature Walkthrough`
- Description: `Each feature plays as a guided video with a contextual sidebar. Attendees explore the actual product UI — bill comparisons, rate analysis, EV savings — at their own pace.`

#### Card 3 — Lead Capture
- Label: `Lead Capture`
- Description: `Deci delivers the lead capture form at completion — when attendees are most engaged. Warm handoff to sales built into the experience itself.`

### Takeaways
- Section label: `Takeaways`
- Heading: `The best sales tool is one that doesn't feel like a sales tool.`
- Body paragraph 1: `The interactive demo worked because it respected attendees' time and autonomy. It didn't ask for anything — it just offered something interesting to explore. That low-pressure entry point turned passive observers into informed prospects, which made the downstream sales conversations dramatically more productive.`
- Body paragraph 2: `The reusable framework was also a significant win. Instead of rebuilding the demo environment for every conference, the team had a foundation they could update and expand. Good design for a single event; better design for every event after it.`
- Body paragraph 3: `And Deci — a character I designed to solve a specific UX problem — ended up becoming the company mascot. Sometimes the best brand work starts as a navigation solution.`

### Next Project
- Label: `Next Project`
- Title: `Taylor Guitars Series Pages`
- Sub: `E-commerce · Content Design · Consumer Brand`

---

## PAGE: taylor-series-pages.html

### Hero
- Eyebrow: `UX/UI Design · E-commerce · Consumer Brand`
- Title line 1: `Taylor Guitars`
- Title line 2 (italic): `Series Pages`
- Summary: `Redesigning the series pages that served as the main entry point for guitar buyers — eliminating analysis paralysis, doubling page views, and driving a 67% increase in clickthrough to product pages.`

#### Meta
- Role: `UX/UI Design & Art Direction`
- Team: `Stakeholders, Agency Partners`
- Client: `Taylor Guitars`
- Domain: `E-commerce · Content Design`

### The Problem
- Section label: `The Problem`
- Statement: `Taylor offers hundreds of guitar models. That's a feature until it becomes a reason not to buy.`
- Body paragraph 1: `The series pages on the Taylor site were one of the primary entry points for customers exploring guitars. With hundreds of options across dozens of series, users consistently got stuck. The differences between models weren't clear, the information hierarchy wasn't guiding decisions, and the result was analysis paralysis — users leaving without continuing their purchasing journey.`
- Body paragraph 2: `The design challenge was the sheer volume of information that had to live on these pages. Series overviews, model comparisons, specs, imagery, pricing, and clear paths to specific product pages — all without overwhelming a user who might be brand new to acoustic guitars or a seasoned player hunting something specific.`
- Body paragraph 3: `The solution had to work for both.`

### Results
- Section label: `Results`
- Stat 1: `105%` | Label: `Increase in page views after the redesign launched`
- Stat 2: `150%` | Label: `Increase in time on page — users were actually reading and exploring`
- Stat 3: `67%` | Label: `Increase in clickthrough rate to product pages — the journey was working`

### Process
- Section label: `Process`

#### Phase 01 — Defining the Problem
After initial research, I focused on understanding where users actually were in their buying journey — not where the business assumed they were. The research concluded that these pages needed to do three specific things: provide a high-level series overview, give easy access to specific models with clear imagery, and present multiple "outs" for users to dive deeper into what interested them. Journey mapping informed by two distinct personas — a style-focused newer player and an experienced collector who valued specs and tone — helped shape the module set. We empathized with fictional users because direct testing wasn't available at that stage.

#### Phase 02 — UX Design
My core UX work was about information architecture and content flow — knowing what customers needed at each stage of the page and building a structure that served multiple user types without forcing anyone down a single path. This meant breaking large copy blocks into scannable chunks, creating clear visual separations between series overview, model browsing, and feature deep-dives, and designing multiple entry points to specific product pages throughout the page rather than a single CTA at the bottom.

#### Phase 03 — Art Direction
I led the art direction for the visual language of these pages — coordinating photoshoots for lifestyle and beauty imagery, directing the video content strategy, and managing the asset pipeline to ensure every module had what it needed before development began. Asset wrangling at scale is unglamorous work, but getting it right was the difference between a smooth build and a delayed launch.

#### Phase 04 — Design & Prototyping
Working with agency partners, I wireframed and prototyped the new series page experience — developing new modules that hadn't existed on the site before. Each module was designed to solve a specific problem identified in the define phase: a model browser that let users quickly compare without navigating away, a feature section that communicated tonal character visually, and a "meet the series" summary that oriented users before they dove into specifics.

#### Phase 05 — Launch & Iteration
We launched the new pages, let them run, and came back to measure. The numbers came back strong across every metric. The plan going forward was CRO testing and continuous auditing — with a round-two design cycle already in the backlog before other priorities took over.

### Key Screens
- Section label: `Key Screens`

#### Card 1 — Model Browser
- Label: `Model Browser`
- Description: `A new module that hadn't existed on the site before. Users could browse models, compare specs, and navigate to product pages without leaving the series overview.`

#### Card 2 — Features Section
- Label: `Features Section`
- Description: `Features communicated through full-bleed lifestyle imagery and paired copy — translating tonal character and craftsmanship into language that resonated with both casual and experienced players.`

#### Card 3 — Browse & Filter
- Label: `Browse & Filter`
- Description: `A filterable model grid giving spec-focused buyers a fast path to exactly what they were looking for — without disrupting the overview experience for users still exploring.`

### Takeaways
- Section label: `Takeaways`
- Heading: `Helping someone browse isn't the same as helping someone decide.`
- Body paragraph 1: `The old series pages let users look at guitars. The new ones guided users toward a guitar. That distinction — between passive browsing and active decision support — drove every design choice on the project.`
- Body paragraph 2: `The 77% of users who continued from series pages to product pages after the redesign weren't being pushed. They were being led — by clearer information, better imagery, and a page structure that matched how people actually shop for something they care about.`
- Body paragraph 3: `A round-two cycle with more direct user testing and CRO experiments would have pushed these numbers further. The groundwork was laid. The backlog was full. The results were already strong enough to validate the direction.`

### Next Project
- Label: `Next Project`
- Title: `Taylor Sustainability Hub`
- Sub: `Editorial Design · Brand · Consumer`

---

## PAGE: taylor-sustainability-hub.html

### Hero
- Eyebrow: `UX Lead · Editorial Design · Taylor Guitars`
- Title line 1: `Taylor`
- Title line 2 (italic): `Sustainability Hub`
- Summary: `Building a modular micro-site to give Taylor's sustainability work a home — so the stories that were driving purchase decisions could actually be found by the people making them.`

#### Meta
- Role: `UX Lead & Product Designer`
- Team: `Stakeholders, Agency Partners, Content`
- Client: `Taylor Guitars`
- Domain: `Editorial Design · Brand`

### The Problem
- Section label: `The Problem`
- Statement: `Taylor's sustainability work was genuinely industry-leading. None of it was anywhere customers could find it.`
- Body paragraph 1: `Taylor Guitars has a long history of sustainability leadership — the Ebony Project, responsible sourcing, supply chain transparency, industry awards. But those stories lived in print magazines, internal files, and scattered pages. Customers had no central place to explore them, and sustainability was increasingly the reason younger buyers chose Taylor over another brand.`
- Body paragraph 2: `The goal was to design a digital hub that showcased Taylor's initiatives authentically, built trust through third-party validation, and still supported users along their purchasing journey — without feeling like a marketing brochure.`
- Body paragraph 3: `I led the UX and product design from discovery through launch: stakeholder workshops, information architecture, competitive audits, user research, wireframes, prototypes, and final high-fidelity designs, in close collaboration with developers and content teams.`

### Results
- Section label: `Results`
- Stat 1: `Multi-page ↑` | Label: `Users explored multiple stories and pages per session — high engagement depth`
- Stat 2: `Confident ✓` | Label: `Users who visited felt more confident in their purchase and more likely to share the brand`
- Stat 3: `Scalable →` | Label: `Modular component library made it easy to add new stories without starting from scratch`

### Process
- Section label: `Process`

#### Phase 01 — Discovery & Content Mapping
I facilitated early workshops with stakeholders to map content and define information architecture. These sessions clarified three non-negotiables: build trust with credible, authentic information; keep navigation simple and scannable; and design an experience that could grow independently while staying connected to the Taylor brand ecosystem. These priorities became the design criteria everything else was measured against.

#### Phase 02 — Competitive Analysis
Looking at brands like Patagonia, The Nature Conservancy, and Martin Guitars surfaced a clear pattern: the strongest sustainability stories were evergreen, authentic, and focused on people rather than products. The weakest examples felt like PR — updated infrequently, full of vague claims, no external validation. That contrast shaped both the content strategy and the design priorities for the hub.

#### Phase 03 — User Research
Surveys revealed that users wanted both quick, digestible stats and deeper long-form stories that legitimized Taylor's work. Trust signals — press coverage, awards, third-party endorsements — were essential. Younger demographics in particular were factoring corporate responsibility directly into their purchasing decisions. These insights shaped the personas and drove the emphasis on media mentions, certifications, and project narratives throughout the hub.

#### Phase 04 — Wireframing & Testing
I sketched and prototyped multiple homepage layouts and tested them with users. The feedback was consistent and actionable: videos needed to be accessible without hunting for them; quote blocks humanized the story in a way copy alone couldn't; and trust signals like press mentions and awards needed to be prominent, not buried. Each round of testing pushed the design toward something more balanced and scannable.

#### Phase 05 — Prototyping & Development
The final design evolved into a modular system backed by a complete component library. This structure was the real deliverable — not just a designed page, but a scalable framework that let the content team add new sustainability stories without needing to start from scratch or involve engineering. Collaboration with developers and content teams throughout ensured the final product stayed aligned with both user needs and operational reality.

### Key Screens
- Section label: `Key Screens`

#### Card 1 — Featured Project Module
- Label: `Featured Project Module`
- Description: `Each sustainability project gets its own editorial treatment — rich media, project context, and direct links to featured press coverage. Credibility built in.`

#### Card 2 — Quote Section
- Label: `Quote Section`
- Description: `Human voices anchored the story throughout. Pull quotes from Taylor leadership gave the brand a face and kept the experience from reading like a corporate report.`

#### Card 3 — Final Design
- Label: `Final Design`
- Description: `The deployed hub brought together editorial storytelling, trust signals, and a modular component system — designed to grow as Taylor's sustainability work did.`

### Takeaways
- Section label: `Takeaways`
- Heading: `Keep the user top of mind, especially when the internal team isn't.`
- Body paragraph 1: `The Sustainability Hub launched as a modular, media-rich experience that could grow alongside Taylor's initiatives. Users spent more time exploring multiple stories, reported feeling more confident in their purchasing decisions, and were more likely to share Taylor's brand with others. That last metric — brand advocacy — was the clearest signal that the trust-first approach had worked.`
- Body paragraph 2: `Two lessons stuck with me. First: keeping users central is hardest precisely when internal teams get caught up in features and organizational priorities. That's when the designer's job is to be an advocate, not just an executor. Second: content-heavy experiences need content strategy locked before design starts. Imagery and video extend timelines significantly — planning for that early is a design decision, not a project management one.`

### Next Project
- Label: `Next Project`
- Title: `Supervisor Review Mode`
- Sub: `Workflow Design · Enterprise UX · Civic Tech`
