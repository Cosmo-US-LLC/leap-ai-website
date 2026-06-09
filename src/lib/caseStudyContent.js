import caseStudyAirport from "../assets/images/new-home/case-study-airport.webp";
import caseStudyFinance from "../assets/images/new-home/case-study-finance.webp";
import caseStudyInsurance from "../assets/images/new-home/case-study-insurance.webp";
import partnerCtaPhoto from "../assets/images/new-home/partner-cta-photo.webp";

export const CASE_STUDIES = [
  {
    slug: "regional-airport-ground-crew",
    tag: "Aviation / Airport Operations",
    image: caseStudyAirport,
    metric: "47%",
    metricLabel: "cost reduction",
    title: "How a Regional Airport Cut Ground Crew Costs by 47%",
    description:
      "They spent weeks trying to solve it with ChatGPT and spreadsheets. The real answer was a constraint optimization model, built in 4 days, saving $800K per quarter.",
    hero: {
      titlePrefix: "How a Regional Airport ",
      titleHighlight: "Cut Ground Crew Costs by 47%",
      subtitle:
        "They spent weeks trying to solve it with ChatGPT and spreadsheets. The real answer was a constraint optimization model — built in 4 days, saving $800K per quarter.",
    },
    sidebar: {
      metrics: [
        { value: "47%", label: "Cost Reduction" },
        { value: "$0.9M", label: "New Quarterly Cost" },
        { value: "4 Days", label: "To Build" },
        { value: "20,000%", label: "First-Year ROI" },
      ],
      delivered: [
        "MILP Optimization Model",
        "Full Constraint Encoding",
        "Quarterly Schedule Generation",
        "Labor Law Compliance",
        "Cost-Minimization Engine",
        "Operations-Ready Output",
      ],
      technologies: ["MILP", "Google OR-Tools", "CP-SAT", "Mathematical Optimization"],
      industry: "Aviation / Airport Operations",
      location: "Quebec, Canada",
    },
    cta: {
      titleMuted: "Facing a Complex ",
      titleBold: "Optimization Problem?",
      description:
        "Not every problem needs a language model. Book a call to find out which AI approach fits yours.",
      image: partnerCtaPhoto,
      imageAlt: "Leap 41 team reviewing strategy",
    },
    sections: [
      {
        type: "content",
        title: "The Problem: A Scheduling Puzzle No Spreadsheet Could Solve",
        paragraphs: [
          "A growing regional airport in Quebec handles commercial flights across **9 gates**, each requiring a dedicated **6-person ground crew** for arrivals, departures, and turnarounds.",
          "Scheduling those crews across a full quarter — 90+ days, multiple shifts, variable flight volumes — had become a serious operational headache. The operations team was building schedules manually in Excel, spending **2 to 3 weeks per cycle** juggling labor regulations, crew availability, gate assignments, and budget constraints.",
          "The result was always the same: schedules that were technically valid but financially bloated. **Ground crew staffing was running at $1.7 million per quarter** — and leadership suspected there was significant waste baked into the process.",
        ],
      },
      {
        type: "highlightCards",
        cards: [
          {
            icon: "calendar",
            title: "Manual Scheduling",
            description:
              "Each quarterly schedule took 2–3 weeks to build manually in Excel — a fragile, error-prone process.",
          },
          {
            icon: "dollar",
            title: "$1.7M / Quarter",
            description:
              "Ground crew staffing costs were running well above what the flight volume actually required.",
          },
          {
            icon: "plane",
            title: "9 Gates, 6-Person Crews",
            description:
              "Coordinating coverage across gates, shifts, and labor rules created exponential scheduling complexity.",
            fullWidth: true,
          },
        ],
      },
      {
        type: "content",
        title: "Why ChatGPT Couldn't Solve This",
        paragraphs: [
          "Before engaging Leap AI, the airport's operations team spent several weeks trying to solve the problem with **ChatGPT and Excel macros**. The logic seemed sound: describe the constraints, ask the model to generate an optimized schedule.",
          "It didn't work. Not because the team lacked effort — but because **this wasn't a language problem.**",
          "Large language models are extraordinary at understanding context, generating text, and reasoning through ambiguity. But crew scheduling is a **constraint satisfaction problem** — a mathematical challenge with hard boundaries: labor laws, minimum rest periods, gate coverage requirements, budget ceilings, and shift-length limits.",
          "An LLM can describe the problem eloquently. It cannot solve it optimally. That requires a fundamentally different class of tool.",
        ],
      },
      {
        type: "callout",
        title: "The Key Insight",
        paragraphs: [
          "AI is a toolbox, not a single tool. The organizations that get the most value from AI are the ones that match the right technique to the right problem.",
          "Language models for language problems. Optimization solvers for optimization problems. Knowing the difference — and having access to both — is the competitive advantage.",
        ],
      },
      {
        type: "content",
        title: "The Solution: A Purpose-Built Optimization Engine",
        paragraphs: [
          "Leap AI built a **Mixed Integer Linear Programming (MILP)** model using **Google OR-Tools CP-SAT solver** — one of the most powerful open-source constraint optimization engines available.",
          "The model was designed to minimize total staffing cost while respecting every operational and regulatory constraint the airport faces. It doesn't guess. It doesn't approximate. It finds the mathematically optimal solution across the entire scheduling horizon.",
          "From first conversation to working model: **4 days.**",
        ],
      },
      {
        type: "checklist",
        intro: "The optimization model enforces every real-world constraint simultaneously:",
        items: [
          "Full gate coverage — every arrival, departure, and turnaround is staffed",
          "Labor law compliance — maximum hours, mandatory rest periods, overtime rules",
          "Crew size requirements — 6-person minimum per active gate",
          "Shift continuity — no broken shifts or impossible transitions",
          "Budget optimization — minimum cost schedule that satisfies all constraints",
          "Quarterly horizon — full 90-day schedules generated in minutes",
        ],
      },
      {
        type: "howItWorks",
        title: "How it Works",
        steps: [
          {
            icon: "file",
            title: "Define Constraints",
            description:
              "Flight schedules, gate assignments, crew rules, and labor regulations are encoded as mathematical constraints.",
          },
          {
            icon: "code",
            title: "Build Model",
            description:
              "A MILP model structures the problem as binary decision variables with a cost-minimization objective.",
          },
          {
            icon: "search",
            title: "Solve",
            description:
              "Google OR-Tools CP-SAT solver explores the solution space and finds the mathematically optimal schedule.",
          },
          {
            icon: "deploy",
            title: "Deploy",
            description:
              "The optimized schedule is delivered in a format ready for operations — no new systems or training required.",
          },
        ],
      },
      {
        type: "content",
        title: "The Results",
        paragraphs: [
          "The impact was immediate and dramatic.",
          "Quarterly ground crew staffing costs dropped from **$1.7 million to $0.9 million** — a **47% reduction**. The savings came not from cutting corners, but from eliminating the inefficiencies that manual scheduling inevitably creates: overstaffing during low-volume periods, suboptimal shift distributions, and redundant overlap.",
          "The scheduling process itself went from **2–3 weeks of manual work to minutes of compute time**. The operations team now runs the model, reviews the output, and makes any manual adjustments they want — a process that takes hours, not weeks.",
          "In the first year alone, the projected savings exceed **$3.2 million**. Against the cost of building the model, that represents a **return on investment above 20,000%.**",
        ],
      },
      {
        type: "content",
        title: "Beyond the Numbers",
        paragraphs: [
          "The financial impact tells only part of the story.",
          "Before the optimization model, the operations team dreaded the quarterly scheduling cycle. It was tedious, high-stakes work where a single error could cascade into coverage gaps or compliance violations. The cognitive load was enormous.",
          "Now, the team focuses on **oversight and refinement** rather than construction. They review an optimal baseline and adjust for human factors — vacation preferences, team dynamics, training rotations — that the model intentionally leaves room for.",
          "The model didn't replace the operations team. It gave them a foundation they can trust and the time to focus on the decisions that actually require human judgment.",
        ],
      },
      {
        type: "callout",
        title: "The Takeaway for Operations Leaders",
        paragraphs: [
          "Not every problem is a language problem. Not every AI solution needs a large language model.",
          "The organizations that will lead in the next decade aren't just the ones adopting AI — they're the ones that know **which kind of AI to apply**. When the problem is ambiguity and context, reach for an LLM. When the problem is constraints and optimization, reach for a solver.",
          "This airport didn't need a chatbot. They needed a mathematician. And the difference between the two saved them **$3.2 million in year one.**",
          "Speed doesn't come from rushing. It comes from **knowing which tool to pick up first.**",
        ],
      },
    ],
  },
  {
    slug: "ai-powered-roleplay-sales",
    tag: "Financial Services",
    image: caseStudyFinance,
    metric: "3×",
    metricParts: ["3", "×"],
    metricLabel: "practice frequency",
    title: "AI-Powered Roleplay That Actually Improves Sales Performance",
    description:
      "How a financial services firm replaced outdated training with interactive AI roleplay — and saw a measurable lift in advisor confidence and close rates within 60 days.",
    hero: {
      titlePrefix: "AI-Powered Roleplay That Actually ",
      titleHighlight: "Improves Sales Performance",
      subtitle:
        "How a financial services firm replaced outdated training with interactive AI roleplay — and saw a measurable lift in advisor confidence and close rates within 60 days.",
    },
    sidebar: {
      metrics: [
        { value: "3×", label: "Practice Frequency" },
        { value: "40%", label: "Faster Onboarding" },
        { value: "89%", label: "Advisor Satisfaction" },
        { value: "60 Days", label: "To Impact" },
      ],
      delivered: [
        "Adaptive AI Personas",
        "Real-Time Feedback",
        "Custom Scenarios",
        "Progress Analytics",
        "Compliance Guardrails",
        "Manager Dashboard",
      ],
      technologies: ["LLM", "NLP", "Speech Synthesis", "Real-Time AI"],
      industry: "Financial Services / Insurance",
      location: "North America",
    },
    cta: {
      titleMuted: "Ready to Transform Your ",
      titleBold: "Sales Training? ",
      description:
        "See how AI-powered roleplay can accelerate advisor readiness and improve close rates.",
      image: partnerCtaPhoto,
      imageAlt: "Sales team in training session",
    },
    sections: [
      {
        type: "content",
        title: "The Training Gap",
        paragraphs: [
          "Sales training in financial services has a fundamental problem: it's expensive, inconsistent, and almost impossible to scale.",
          "Most firms rely on a combination of classroom sessions, scripted scenarios, and peer-to-peer roleplay. Managers carve out time between their own responsibilities to run practice sessions — when they can. New hires get intensive onboarding, but ongoing development often falls to sporadic team meetings and annual refreshers.",
          "The result is predictable. Advisors who practice more perform better. But practice opportunities are scarce, unevenly distributed, and rarely measured.",
        ],
      },
      {
        type: "highlightCards",
        cards: [
          {
            icon: "sliders",
            title: "Inconsistent Quality",
            description:
              "Training quality varies dramatically depending on the manager, office, and available time.",
          },
          {
            icon: "calendarClock",
            title: "Low Frequency",
            description:
              "Practice sessions happen monthly at best — not enough to build lasting habits.",
          },
          {
            icon: "barChart",
            title: "No Measurement",
            description:
              "Without structured tracking, there is no way to connect training effort to performance outcomes.",
            fullWidth: true,
          },
        ],
      },
      {
        type: "content",
        title: "Why Traditional Roleplay Falls Short",
        paragraphs: [
          "Peer-to-peer roleplay has been the industry default for decades. Two advisors take turns playing client and advisor, running through objection-handling or needs-analysis scenarios.",
          "In theory, it works. In practice, it suffers from three structural weaknesses.",
          "First, **peers are predictable**. After a few rounds, advisors learn each other's patterns. The practice loses its edge. Real clients don't follow scripts.",
          "Second, **feedback is subjective**. Without a consistent evaluation framework, the quality of coaching depends entirely on who's watching. Two managers might assess the same conversation differently.",
          "Third, **scheduling is a bottleneck**. Coordinating two or more people for a practice session means competing with meetings, client calls, and administrative work. The session that gets cancelled is always training.",
        ],
      },
      {
        type: "content",
        title: "Introducing AI-Powered Roleplay",
        paragraphs: [
          "Leap AI built an interactive roleplay platform that gives every advisor access to realistic, on-demand practice — without requiring a partner, a manager, or a scheduled session.",
          "Advisors select a scenario that matches their focus area: a first-time homebuyer asking about mortgage protection, a business owner reviewing group benefits, or a retiree evaluating annuity options. The AI adapts its persona in real time, responding the way an actual client would — with hesitation, questions, objections, and emotional nuance.",
          "Each session generates structured, actionable feedback. Not vague encouragement, but specific analysis: where the advisor built rapport, where they missed a discovery opportunity, where their compliance language needed tightening.",
          "The platform integrates directly into the firm's existing learning management system. No new apps. No new passwords. Just better practice, available whenever an advisor has 15 minutes.",
        ],
      },
      {
        type: "checklist",
        intro:
          "The platform delivers a complete training loop — practice, feedback, and measurement — in a single session:",
        items: [
          "Adaptive AI personas that respond like real customers",
          "Real-time feedback on communication technique",
          "Custom scenarios matching your product lines",
          "Progress analytics and improvement tracking",
          "Compliance guardrails and best-practice scoring",
          "Manager dashboard for team oversight",
        ],
      },
      {
        type: "howItWorks",
        title: "How a Session Works",
        steps: [
          {
            icon: "clipboardList",
            title: "Select Scenario",
            description:
              "Choose from a library of custom scenarios designed around your product lines and customer profiles.",
          },
          {
            icon: "messages",
            title: "Practice",
            description:
              "Engage in a realistic conversation with an AI persona that adapts to your responses in real time.",
          },
          {
            icon: "feedback",
            title: "Get Feedback",
            description:
              "Receive structured coaching on rapport, discovery, objection handling, and compliance.",
          },
          {
            icon: "trendingUp",
            title: "Track Progress",
            description:
              "Monitor improvement over time with analytics visible to advisors and managers.",
          },
        ],
      },
      {
        type: "callout",
        title: "Real-World Impact",
        paragraphs: [
          "Within the first 60 days, advisors using the platform completed an average of **12 practice sessions each** — compared to the previous average of 2 per quarter through traditional roleplay.",
          "Managers reported that coaching conversations shifted from \"here's what you should do\" to \"I noticed you've already improved on X — let's work on Y.\" The platform gave advisors ownership of their development, and managers could see progress without sitting in on every practice.",
        ],
      },
      {
        type: "content",
        title: "Measurable Results",
        paragraphs: [
          "The firm tracked performance across three dimensions over the first 90 days.",
          "**Practice frequency** increased 3×. Advisors practiced more often because they could do it on their own schedule, without coordination overhead. The most engaged advisors ran 2–3 sessions per week.",
          "**Onboarding time** decreased by approximately 40 percent. New hires reached competency benchmarks faster because they had unlimited, structured practice from day one — not just observation and shadowing.",
          "**Advisor satisfaction** with training reached 89 percent in internal surveys, up from 54 percent under the previous program. The most cited reason: \"I can practice without feeling judged.\"",
          "Close rates and conversion metrics showed early positive movement, though the firm attributes this to a combination of factors including the new training, updated scripts, and seasonal trends.",
        ],
      },
      {
        type: "callout",
        title: "The Bottom Line",
        paragraphs: [
          "Training that happens once a month doesn't build habits. Training that's available on demand does.",
          "AI-powered roleplay doesn't replace managers or mentors. It gives every advisor access to the kind of deliberate, repeated practice that top performers have always found ways to get on their own.",
          "The firms that will win the next decade of financial services aren't just hiring better people. They're **building better systems for developing the people they already have**.",
        ],
      },
    ],
  },
  {
    slug: "insurance-call-coverage",
    tag: "Insurance",
    image: caseStudyInsurance,
    metric: "100%",
    metricLabel: "call coverage",
    title:
      "How a Canadian Insurance Agency Gained Control of Every Sales Conversation in 30 Days",
    description:
      "They were reviewing just 5% of calls. Within 30 days, they had full oversight of every meaningful sales conversation — without adding a single headcount.",
    hero: {
      titlePrefix: "How a Canadian Insurance Agency ",
      titleHighlight: "Gained Control of Every Sales Conversation in 30 Days",
      subtitle:
        "They were reviewing just 5% of calls. Within 30 days, they had full oversight of every meaningful sales conversation — without adding a single headcount.",
    },
    sidebar: {
      metrics: [
        { value: "100%", label: "Call Coverage" },
        { value: "30 min", label: "Turnaround" },
        { value: "~80%", label: "QA Time Saved" },
        { value: "30 Days", label: "To Deploy" },
      ],
      delivered: [
        "Automatic Transcription & Analysis",
        "Performance Scoring",
        "Coaching Recommendations",
        "Compliance Checklist",
        "Escalation Alerts",
        "CRM Integration",
      ],
      technologies: ["AI/ML", "NLP", "Speech-to-Text", "Cloud Computing"],
      industry: "Insurance / Financial Services",
      location: "Quebec, Canada",
    },
    cta: {
      titleMuted: "Ready to See ",
      titleBold: "Every Conversation?",
      description:
        "Book a 30-minute strategy call to see how AI-powered call evaluation can transform your sales oversight.",
      image: partnerCtaPhoto,
      imageAlt: "Insurance team reviewing call analytics",
    },
    sections: [
      {
        type: "content",
        title: "The Challenge",
        paragraphs: [
          "This Canadian online insurance agency knew that coaching worked. When their licensed advisors received structured feedback, performance improved. The problem wasn't quality — it was **coverage**.",
          "With roughly **200 to 250 sales calls per week**, each lasting **60 to 90 minutes**, their QA leader could realistically review only **10 to 15 calls weekly**. That meant just **five to eight percent** of customer conversations were being evaluated.",
          "More than 90 percent went unreviewed. In a competitive and regulated industry, that level of visibility isn't enough.",
          "To manually review every call would require scaling QA headcount to match the sales team — an economic non-starter. Leadership didn't want more listeners. They wanted leverage.",
        ],
      },
      {
        type: "highlightCards",
        cards: [
          {
            icon: "eyeOff",
            title: "Limited Coverage",
            description:
              "Only 5–8% of 200+ weekly sales calls were being reviewed by the QA team.",
          },
          {
            icon: "clock",
            title: "Time Intensive",
            description:
              "Each 75-minute call required full playback, note-taking, and coaching preparation.",
          },
          {
            icon: "scale",
            title: "Structural Ceiling",
            description:
              "Scaling QA headcount to match the sales team was economically unfeasible.",
            fullWidth: true,
          },
        ],
      },
      {
        type: "content",
        title: "The Bottleneck No One Could Outwork",
        paragraphs: [
          "The agency already had a structured coaching process. Calls were recorded through their in-house PBX system. The QA lead selected conversations based on experience — prioritizing new advisors, perceived underperformers, or occasional random checks.",
          "Feedback was delivered one-on-one, often monthly or as needed.",
          "But reviewing a single 75-minute call requires full playback, note-taking, structured evaluation, and preparation for coaching. Multiply that by more than 200 calls per week and the math becomes impossible.",
          "Time pressure introduced another risk. To manage workload, parts of calls were sometimes skipped to reach the \"important\" moments. Context could be lost. Subtle compliance signals could be missed.",
          "Leadership faced a structural ceiling: partial oversight in a business where consistency and regulatory alignment matter.",
        ],
      },
      {
        type: "content",
        title: "Building Full Visibility Without Changing Workflow",
        paragraphs: [
          "Leap AI partnered with leadership and the QA function to design a system that would augment human coaching rather than replace it.",
          "The mandate was clear: analyze **100 percent of meaningful sales calls**, integrate directly into their existing CRM, and meet regulatory-grade security standards.",
          "Within four weeks, an AI-powered call evaluation engine was deployed.",
          "Within 30 minutes after each sales appointment ends, the system automatically transcribes and evaluates the conversation. Inside the CRM record, leadership and agents can see:",
        ],
      },
      {
        type: "checklist",
        intro: null,
        items: [
          "Structured conversation summary",
          "Performance score aligned with internal standards",
          "Clear reasoning behind the score",
          "Specific coaching recommendations",
          "Completed compliance checklist",
        ],
      },
      {
        type: "callout",
        title: "Real-Time Issue Detection",
        paragraphs: [
          "The system introduced automated escalation flags. If a conversation includes language that suggests compliance risk, inappropriate tone, or customer dissatisfaction, leadership is alerted immediately.",
          "In one early instance, an advisor lost patience during a call. The system flagged the interaction within minutes. The director contacted the client before a complaint could be filed — turning what could have escalated into reputational or regulatory friction into a recovery opportunity.",
        ],
      },
      {
        type: "howItWorks",
        title: "How It Works",
        steps: [
          {
            icon: "mic",
            title: "Record",
            description:
              "Calls are captured through the existing PBX system with no changes to advisor workflow.",
          },
          {
            icon: "fileAudio",
            title: "Transcribe",
            description:
              "AI processes the audio into a structured, searchable transcript within minutes.",
          },
          {
            icon: "clipboardCheck",
            title: "Evaluate",
            description:
              "Performance is scored automatically against internal quality standards.",
          },
          {
            icon: "layoutDashboard",
            title: "Deliver",
            description:
              "Results appear directly inside the CRM record — no new platforms or logins.",
          },
        ],
      },
      {
        type: "content",
        title: "Elevating the QA Function",
        paragraphs: [
          "Before implementation, the QA leader spent approximately **20 to 25 hours per week** listening to recordings and preparing notes. Coaching required full-call review.",
          "Today, listening time has dropped to near zero.",
          "Instead of replaying entire conversations, the QA leader reviews AI-generated evaluations and focuses only on the segments that matter. Preparation time has fallen to roughly **5 to 8 hours per week**, yet coaching capacity now extends across the entire team.",
          "The system did not eliminate the human role. It removed the mechanical burden around it. Coaching is now consistent, targeted, and scalable.",
        ],
      },
      {
        type: "content",
        title: "Designed for a Regulated Environment",
        paragraphs: [
          "Security and compliance were foundational requirements, not afterthoughts.",
          "The solution operates with **Canadian data residency** and encrypted data transfer. Processing occurs within a secure, serverless environment with **no data retention and no third-party storage**. Customer information is not used to train external models.",
          "Every evaluation leaves traceable logs, and human reviewers retain full oversight and correction capability.",
          "The result is not a black box layered onto a regulated business. It is a controlled, auditable quality infrastructure aligned with financial services standards.",
        ],
      },
      {
        type: "callout",
        title: "The Takeaway for Financial Leaders",
        paragraphs: [
          "In high-volume, regulated sales environments, performance variance is inevitable. The question is whether you can see it early enough to correct it.",
          "This insurance agency moved from partial visibility to full oversight in 30 days — without adding headcount, disrupting workflow, or compromising data security.",
          "They didn't automate people away. They gave their people leverage. And in competitive financial services markets, **leverage compounds**.",
        ],
      },
    ],
  },
];

export function getCaseStudyBySlug(slug) {
  return CASE_STUDIES.find((study) => study.slug === slug);
}

export function getRelatedCaseStudies(slug, limit = 2) {
  return CASE_STUDIES.filter((study) => study.slug !== slug).slice(0, limit);
}
