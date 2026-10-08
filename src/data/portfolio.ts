import type { Paper, Portfolio, Testimonial } from "./types";

/**
 * Edit this file to customize the portfolio.
 * Name, links, projects, experience, and copy all live here.
 */
export const portfolio = {
  name: "Anuoluwa Olutayo",
  initials: "AO",
  role: "AI Engineer",
  roles: [
    "MLOps",
    "AI Infrastructure",
    "Cloud Deployment",
    "DevSecOps",
    "Production LLM Systems",
  ],
  tagline: "I take AI systems from development to secure, production-ready deployments.",
  availability: "Available for AI/MLOps & DevSecOps roles",
  location: "Dallas, Texas",
  email: "you@example.com",
  siteUrl: "http://localhost:3000",
  resumeLabel: "Resume",
  portrait: "",
  seo: {
    title: "Anuoluwa Olutayo | AI Engineer for MLOps, Cloud & DevSecOps",
    description:
      "Portfolio of Anuoluwa Olutayo, an AI Engineer who integrates, deploys, scales, secures, and maintains LLM systems in production.",
  },
  social: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    twitter: "",
    whatsapp: "",
  },
  assistant: {
    name: "Aria",
    subtitle: "Anuoluwa Olutayo's AI assistant",
    greeting:
      "Hi, I'm Aria — Anuoluwa Olutayo's AI assistant. Ask me about the projects, skills, experience, or background on this site, or pick a question below.",
    suggestions: [
      "Who is Anuoluwa Olutayo?",
      "What projects are featured?",
      "What technologies are listed?",
      "Are you available for hire?",
    ],
  },
  nav: [
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ],
  footer: {
    blurb:
      "AI Engineer focused on MLOps, AI infrastructure, cloud deployment, and DevSecOps for production LLM systems.",
    rolesLine: "AI Engineer · MLOps · DevSecOps",
    explore: [
      { label: "About", href: "/#about" },
      { label: "Projects", href: "/#projects" },
      { label: "Experience", href: "/#experience" },
      { label: "Skills", href: "/#skills" },
    ],
    more: [
      { label: "Leadership", href: "/#leadership" },
      { label: "Certifications", href: "/#certifications" },
      { label: "Contact", href: "/#contact" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
    ],
  },
  hero: {
    greeting: "Hi, I'm",
    bio: "I take AI and LLM systems from a working build to a release a team can trust. The work is integration, cloud deployment, MLOps, and DevSecOps: CI/CD, containers, Kubernetes, monitoring, and the security controls around production.",
    primaryCta: { label: "View My Work", href: "/#projects" },
    secondaryCta: { label: "Get in Touch", href: "/#contact" },
  },
  about: {
    index: "01",
    kicker: "About",
    title: "About Me",
    lede: "I take AI systems from development to reliable, secure production deployments.",
    paragraphs: [
      [
        { text: "Hey! I'm " },
        { text: "Anuoluwa Olutayo", emphasis: true },
        { text: ", an AI Engineer focused on the operational side of " },
        { text: "LLM systems", emphasis: true },
        { text: ": integrating them, deploying them, and keeping them reliable and secure." },
      ],
      [
        {
          text: "The work is MLOps and DevSecOps. That means CI/CD, cloud infrastructure, containers, Kubernetes, automation, monitoring, and the security controls a production release actually needs.",
        },
      ],
      [
        {
          text: "I don't train models from scratch or publish research. I take an AI system that already has a path and make it deployable: environments, access, policy, observability, and a way back when a release goes wrong.",
        },
      ],
    ],
    chips: [
      "Kubernetes",
      "Docker",
      "Terraform",
      "CI/CD",
      "AWS",
      "Helm",
      "FastAPI",
      "LangGraph",
      "DevSecOps",
    ],
    focus: [
      {
        icon: "llm",
        title: "LLM Engineering",
        description:
          "Integrate RAG and agent workflows into services that can be deployed, observed, and rolled back.",
      },
      {
        icon: "cloud",
        title: "AI Infrastructure",
        description:
          "Cloud environments, containers, and Kubernetes as the runtime a production LLM service actually needs.",
      },
      {
        icon: "mlops",
        title: "MLOps & Deployment",
        description:
          "CI/CD, promotion, monitoring, and a release path that survives the first incident.",
      },
      {
        icon: "security",
        title: "DevSecOps",
        description:
          "Identity, secrets, image scanning, and policy checks so a release fails closed instead of shipping risk.",
      },
    ],
    stats: [
      { value: "5", label: "Featured Systems" },
      { value: "3", label: "Cloud Platforms" },
      { value: "6", label: "Certifications" },
      { value: "2", label: "Leadership Roles" },
    ],
  },
  projectsIntro: {
    index: "02",
    kicker: "Projects",
    title: "Selected Work",
    lede: "Systems integrated, deployed, secured, and kept running — from the pipeline to production.",
  },
  projects: [
    {
      slug: "citation-desk",
      title: "Citation Desk",
      eyebrow: "A RAG assistant that shows the source, not just the answer",
      tagline: "Answers grounded in your documents, with page-level citations.",
      problem:
        "Most assistants return a fluent paragraph and hide whether it came from a file, the web, or the model's memory. That is the wrong tradeoff when the answer will be checked.",
      solution:
        "A retrieval pipeline routes each question to uploaded documents or a web fallback, streams the steps, and cites the file, page, and passage used to write the reply.",
      architecture:
        "Next.js chat UI, a FastAPI streaming API, a chunk-and-embed indexer, and a pgvector store. The generator is only allowed to answer from retrieved spans.",
      technologies: ["Next.js", "FastAPI", "LangGraph", "pgvector", "Python"],
      features: [
        "Passage-level citations",
        "Route trace for every answer",
        "Upload and re-index without a redeploy",
        "Refusal when retrieval confidence is low",
      ],
      impact: [
        { value: "0.4s", label: "Cited lookup" },
        { value: "3", label: "Retrieval routes" },
        { value: "100%", label: "Answers with sources" },
      ],
      impactPoints: [
        "Every answer ships with the passage it used, so a reviewer can check it without reopening the file.",
        "Low-confidence questions refuse instead of guessing.",
        "The same pipeline supports policy docs, runbooks, and internal wikis.",
      ],
      github: "https://github.com/",
      live: "https://example.com",
      screenshots: [
        {
          kind: "chat",
          title: "Cited answer",
          caption: "Reply with the source passage and a retrieval route",
          alt: "Chat interface showing an answer with a document citation",
        },
        {
          kind: "pipeline",
          title: "Retrieval trace",
          caption: "Classify, retrieve, and generate as visible steps",
          alt: "Pipeline diagram of the citation retrieval flow",
        },
        {
          kind: "board",
          title: "Confidence board",
          caption: "Passages ranked before the model is allowed to write",
          alt: "Ranked passages with confidence scores",
        },
      ],
      caseStudy: [
        {
          id: "problem",
          title: "The problem with uncited answers",
          paragraphs: [
            "Teams were pasting documents into a chat window and treating the reply as a summary. When a sentence was wrong, nobody could tell whether retrieval missed the page or the model invented a detail.",
            "Citation Desk is the placeholder case study for a source-grounded assistant. Replace this narrative with the system you actually shipped.",
          ],
        },
        {
          id: "approach",
          title: "Engineering approach",
          paragraphs: [
            "Documents are split into overlapping windows, embedded, and stored with page and line metadata. At question time a router chooses document search, a web fallback, or a refusal.",
            "The writer receives only the selected spans. If the top score is below a threshold, the product says it cannot support an answer.",
          ],
          bullets: [
            "Chunking preserves page boundaries so citations stay precise",
            "A router keeps web results out of private-document questions",
            "The prompt forbids claims that are not present in the spans",
          ],
        },
        {
          id: "architecture",
          title: "Architecture",
          paragraphs: [
            "The interface streams tokens and a side panel of pipeline events. The API owns indexing, retrieval, and generation so the client never holds document vectors.",
          ],
        },
        {
          id: "results",
          title: "Results",
          paragraphs: [
            "In sample evaluations, cited answers were reviewable in a single click, and unsupported questions failed closed. Swap these results for your own measurements.",
          ],
        },
      ],
    },
    {
      slug: "route-agent",
      title: "Route Agent",
      eyebrow: "An agent that picks a tool, then shows the path it took",
      tagline: "Multi-step workflows with a visible plan and a stop condition.",
      problem:
        "Agent demos loop until they look busy. Operators need to see which tool ran, what it returned, and why the agent stopped.",
      solution:
        "A planner proposes a short tool sequence, executes it with budgets, and writes a final brief that links each claim back to a tool result.",
      architecture:
        "A LangGraph state machine with plan, act, observe, and finish nodes. Tools are typed functions for search, SQL, and a calculator. A step budget ends the run.",
      technologies: ["LangGraph", "Python", "FastAPI", "PostgreSQL", "OpenAI"],
      features: [
        "Explicit plan before any tool call",
        "Per-step token and time budget",
        "Tool traces stored with the answer",
        "Human approval on write actions",
      ],
      impact: [
        { value: "4", label: "Graph nodes" },
        { value: "6", label: "Step budget" },
        { value: "0", label: "Hidden tool calls" },
      ],
      impactPoints: [
        "Operators can replay a run without reading logs.",
        "Write tools wait for approval instead of acting on a guess.",
        "Runs stop when the budget is spent, even if the model wants another step.",
      ],
      github: "https://github.com/",
      live: "",
      screenshots: [
        {
          kind: "pipeline",
          title: "Agent trace",
          caption: "Plan, tool call, observation, and finish",
          alt: "Agent workflow with four visible steps",
        },
        {
          kind: "chat",
          title: "Brief with tools",
          caption: "Final answer linked to the tool results it used",
          alt: "Assistant brief next to tool call cards",
        },
        {
          kind: "dashboard",
          title: "Run budget",
          caption: "Steps, tokens, and latency for a single task",
          alt: "Dashboard of agent run cost and latency",
        },
      ],
      caseStudy: [
        {
          id: "problem",
          title: "Agents that hide their work",
          paragraphs: [
            "A hidden loop is difficult to debug and impossible to trust with a real inbox or database. Route Agent is a placeholder for an agent product whose plan and tool calls stay on screen.",
          ],
        },
        {
          id: "approach",
          title: "Engineering approach",
          paragraphs: [
            "The planner emits a structured plan. Each act node can call one typed tool. The finish node may only cite observations already in state.",
          ],
          bullets: [
            "JSON schema for plans and tool arguments",
            "A hard step cap plus a token cap",
            "Approval gate before any mutating tool",
          ],
        },
        {
          id: "challenges",
          title: "Challenges",
          paragraphs: [
            "The model would occasionally plan a tool that did not exist. Rejecting unknown tool names and asking for a revised plan removed that loop.",
          ],
        },
        {
          id: "results",
          title: "Results",
          paragraphs: [
            "Sample tasks finished inside the step budget with a trace a reviewer could follow. Replace this with your production numbers.",
          ],
        },
      ],
    },
    {
      slug: "platform-lane",
      title: "Platform Lane",
      eyebrow: "The path from a container to a secured cluster",
      tagline: "Kubernetes, environments, and a release an LLM service can actually run on.",
      problem:
        "A working API on a laptop is not a deployment. Teams need environments, access, health checks, and a cluster path before an LLM service is safe to call.",
      solution:
        "A deployment lane that builds the image, promotes it through environments, and runs it on Kubernetes with secrets, probes, and a rollback.",
      architecture:
        "CI builds the container, Terraform prepares the cloud account, and Helm installs the service. Runtime config and secrets stay outside the image.",
      technologies: ["Kubernetes", "Helm", "Terraform", "Docker", "GitHub Actions"],
      features: [
        "Separate dev, staging, and production environments",
        "Health checks and a documented rollback",
        "Secrets pulled at runtime, not baked into the image",
        "Resource limits so one service cannot starve the node",
      ],
      impact: [
        { value: "3", label: "Environments" },
        { value: "Helm", label: "Install path" },
        { value: "0", label: "Secrets in git" },
      ],
      impactPoints: [
        "The same artifact is what gets promoted, so staging matches production.",
        "A bad release has a rollback that does not require rebuilding.",
        "Access to the cluster and the secrets is separate from access to the repo.",
      ],
      github: "https://github.com/",
      live: "",
      screenshots: [
        {
          kind: "pipeline",
          title: "Release lane",
          caption: "Build, promote, deploy, and check",
          alt: "Deployment pipeline from build to a health check",
        },
        {
          kind: "dashboard",
          title: "Cluster view",
          caption: "Service health, replicas, and latency",
          alt: "Dashboard of a Kubernetes service in production",
        },
        {
          kind: "board",
          title: "Environment gate",
          caption: "Dev, staging, and production promotion",
          alt: "Board showing promotion status across three environments",
        },
      ],
      caseStudy: [
        {
          id: "problem",
          title: "A laptop API is not a deployment",
          paragraphs: [
            "Platform Lane is a placeholder for the infrastructure path around an LLM service: environments, cluster install, secrets, and rollback. The model itself is an input, not the thing being invented here.",
          ],
        },
        {
          id: "approach",
          title: "Engineering approach",
          paragraphs: [
            "The pipeline builds one image, scans it, and promotes that same digest. Helm values change per environment. Secrets come from the cloud secret store at runtime.",
          ],
          bullets: [
            "Immutable image digest from CI",
            "Kubernetes probes and resource limits",
            "Rollback to the previous release without a rebuild",
          ],
        },
        {
          id: "results",
          title: "Results",
          paragraphs: [
            "Sample releases moved through three environments with no secrets in the repository. Replace this with the clusters and pipelines you have actually operated.",
          ],
        },
      ],
    },
    {
      slug: "release-ops",
      title: "Release Ops",
      eyebrow: "CI/CD and monitoring for a model you did not have to invent",
      tagline: "Promotion, rollout, and alerts for an AI service already in use.",
      problem:
        "A model artifact is not an operations plan. Without a pipeline, a registry, and an alert, the service drifts and nobody knows which build is live.",
      solution:
        "A release path that versions the artifact, deploys it on a schedule, watches latency and errors, and pages when the live service leaves its expected range.",
      architecture:
        "CI publishes the container, a registry records the digest, and a deployer rolls it out. Metrics and logs feed one dashboard with a rollback hook.",
      technologies: ["GitHub Actions", "Docker", "MLflow", "Kubernetes", "Prometheus"],
      features: [
        "One digest promoted from staging to production",
        "Registry record for every release",
        "Latency, error, and saturation alerts",
        "Rollback wired to the same pipeline",
      ],
      impact: [
        { value: "1", label: "Promoted digest" },
        { value: "CI", label: "Release path" },
        { value: "24/7", label: "Service watch" },
      ],
      impactPoints: [
        "Production runs a known artifact, not a notebook export.",
        "The person on call can see which release is live.",
        "Rollback does not require the person who packaged the model.",
      ],
      github: "https://github.com/",
      live: "",
      screenshots: [
        {
          kind: "dashboard",
          title: "Service watch",
          caption: "Latency, errors, and the live release",
          alt: "Operations dashboard for a deployed AI service",
        },
        {
          kind: "board",
          title: "Promotion board",
          caption: "Staging and production digests",
          alt: "Board comparing the staged release with production",
        },
        {
          kind: "pipeline",
          title: "Release path",
          caption: "Build, publish, deploy, watch",
          alt: "CI pipeline that publishes and deploys a container",
        },
      ],
      caseStudy: [
        {
          id: "problem",
          title: "The artifact is not the release",
          paragraphs: [
            "Release Ops is a placeholder MLOps case study about operating a service. The model is treated as a versioned input. The work is promotion, rollout, and monitoring.",
          ],
        },
        {
          id: "approach",
          title: "Engineering approach",
          paragraphs: [
            "CI is the only way a digest reaches production. The registry stores who published it. Alerts fire on the service, not on a training loss.",
          ],
          bullets: [
            "Immutable container digest",
            "Staged rollout before full traffic",
            "Dashboard tied to the release id",
          ],
        },
        {
          id: "results",
          title: "Results",
          paragraphs: [
            "Sample rollouts kept a previous digest ready so a bad release could be reversed from the pipeline. Replace this with your own release history.",
          ],
        },
      ],
    },
    {
      slug: "guardrail-studio",
      title: "Guardrail Studio",
      eyebrow: "Evals for prompts before they reach a user",
      tagline: "A small eval suite for tone, grounding, and unsafe replies.",
      problem:
        "Prompt changes ship because they look better on one example. Regressions show up later, in front of a user.",
      solution:
        "A suite of tagged cases runs on every prompt change and blocks the release when grounding or safety scores drop.",
      architecture:
        "YAML cases, a runner that calls the same API as production, and a report that diffs the current prompt against the last green run.",
      technologies: ["Python", "FastAPI", "Next.js", "LLM evals"],
      features: [
        "Cases for grounding, refusal, and format",
        "Diff against the last passing run",
        "A gate in the release checklist",
        "Failure examples stored with the score",
      ],
      impact: [
        { value: "48", label: "Eval cases" },
        { value: "3", label: "Score axes" },
        { value: "CI", label: "Release gate" },
      ],
      impactPoints: [
        "A prompt edit cannot ship on a single happy-path screenshot.",
        "Failures stay attached to the case that caught them.",
        "The same cases document what the assistant is allowed to do.",
      ],
      github: "https://github.com/",
      live: "https://example.com",
      screenshots: [
        {
          kind: "board",
          title: "Eval board",
          caption: "Grounding, refusal, and format scores",
          alt: "Evaluation board with three score columns",
        },
        {
          kind: "chat",
          title: "Failed case",
          caption: "The reply that missed the required refusal",
          alt: "A failed evaluation case beside the model reply",
        },
        {
          kind: "dashboard",
          title: "Run diff",
          caption: "Current prompt versus the last green run",
          alt: "Diff of evaluation scores between two runs",
        },
      ],
      caseStudy: [
        {
          id: "problem",
          title: "One good example is not an eval",
          paragraphs: [
            "Guardrail Studio is a placeholder for an evaluation harness around an LLM feature. The point is a repeatable gate, not a larger prompt.",
          ],
        },
        {
          id: "approach",
          title: "Engineering approach",
          paragraphs: [
            "Each case has an input, a tag, and a checker. Checkers are deterministic where possible. A model judge is used only for axes that need one, and its prompt is versioned too.",
          ],
        },
        {
          id: "results",
          title: "Results",
          paragraphs: [
            "Sample runs caught a format regression the author did not see in manual testing. Use your own case count and failure stories here.",
          ],
        },
      ],
    },
  ],
  experienceIntro: {
    index: "03",
    kicker: "Experience",
    title: "Work Experience",
    lede: "Placeholder roles — replace these with the systems you have shipped.",
  },
  experience: [
    {
      title: "AI Engineer",
      company: "YOUR COMPANY",
      period: "2025 — Present",
      current: true,
      summary:
        "Taking LLM systems from a working build to a secured, observable deployment other teams can run.",
      highlights: [
        "Shipped a document assistant with citations, tracing, and a release gate.",
        "Put evaluation in CI so a prompt change cannot ship on a single example.",
        "Traced every tool call so failures are visible without reading raw logs.",
      ],
      technologies: ["Python", "LangGraph", "FastAPI", "PostgreSQL", "Docker"],
    },
    {
      title: "MLOps Engineer",
      company: "YOUR COMPANY",
      period: "2024 — 2025",
      summary:
        "Owned the path around existing models: packaging, promotion, rollout, and the monitors that say whether the service is healthy.",
      highlights: [
        "Replaced a manual handoff with a pipeline that promotes one container digest.",
        "Kept a previous release ready so rollback did not depend on the person who packaged it.",
        "Tied latency and error alerts to the release that was actually live.",
      ],
      technologies: ["Docker", "Kubernetes", "GitHub Actions", "MLflow", "AWS"],
    },
    {
      title: "DevSecOps Intern",
      company: "YOUR COMPANY",
      period: "2023 — 2024",
      summary:
        "Supported CI, containers, and the checks that keep a service from shipping with known gaps.",
      highlights: [
        "Added image scans and secret checks to a pipeline that previously only built.",
        "Documented the environment setup so the next deploy did not start from a laptop.",
      ],
      technologies: ["Docker", "GitHub Actions", "Terraform", "Linux"],
    },
  ],
  educationIntro: {
    title: "Education",
    lede: "Replace this with your school, degree, and focus.",
  },
  education: [
    {
      school: "YOUR UNIVERSITY",
      credential: "B.S. Computer Science",
      period: "2021 — 2025",
      detail:
        "YOUR EDUCATION — coursework in software systems, cloud infrastructure, and security.",
    },
  ],
  researchIntro: {
    index: "04",
    kicker: "Research",
    title: "Research",
    lede: "",
  },
  research: [] as Paper[],
  skillsIntro: {
    index: "04",
    kicker: "Skills",
    title: "Technical Skills",
    lede: "The stack for taking AI systems into production. Edit the groups to match your depth.",
  },
  skills: [
    {
      name: "LLM Systems",
      skills: [
        "LangChain",
        "LangGraph",
        "RAG",
        "Agents",
        "Evals",
        "FastAPI",
        "Streaming",
        "pgvector",
      ],
    },
    {
      name: "MLOps",
      skills: ["CI/CD", "MLflow", "Model serving", "Rollouts", "Registries", "Release gates"],
    },
    {
      name: "Cloud & Infrastructure",
      skills: ["AWS", "Kubernetes", "Helm", "Docker", "Terraform", "Linux"],
    },
    {
      name: "DevSecOps",
      skills: [
        "Image scanning",
        "Secret management",
        "IAM",
        "Pipeline security",
        "SBOM",
        "Least privilege",
      ],
    },
    {
      name: "Observability",
      skills: ["Prometheus", "Grafana", "OpenTelemetry", "Logging", "Alerting"],
    },
    {
      name: "Languages",
      skills: ["Python", "TypeScript", "Bash", "SQL"],
    },
    {
      name: "Backend & APIs",
      skills: ["FastAPI", "Next.js", "REST", "PostgreSQL", "Redis"],
    },
  ],
  leadershipIntro: {
    index: "05",
    kicker: "Leadership",
    title: "Leadership",
    lede: "The work of getting AI systems shipped, documented, and safe for the next person to operate.",
  },
  leadership: [
    {
      title: "AI Platform Lead",
      organization: "YOUR COMMUNITY",
      period: "2024 — 2025",
      summary:
        "Set the path from a working demo to something a team could deploy: environments, reviews, and a release checklist.",
      highlights: [
        "Ran sessions that ended with a service in a container, not a notebook.",
        "Reviewed projects for deployability, access, and monitoring before features.",
      ],
    },
    {
      title: "Mentor",
      organization: "YOUR ORGANIZATION",
      period: "2023 — 2024",
      summary:
        "Helped peers get a service through CI and into a shared environment, and wrote down the setup so it was repeatable.",
      highlights: [
        "Turned one-off deploy advice into a short runbook.",
        "Paired on pipeline failures, secret handling, and rollback drills.",
      ],
    },
  ],
  certificationsIntro: {
    index: "06",
    kicker: "Certifications",
    title: "Certifications",
    lede: "Formal study across cloud, MLOps, and secure delivery. Replace these with yours.",
  },
  certifications: [
    {
      date: "2025",
      title: "YOUR CERTIFICATION — Kubernetes",
      issuer: "YOUR ISSUER",
      summary: "Workloads, networking, and the controls for running a service on a cluster.",
      href: "",
    },
    {
      date: "2025",
      title: "YOUR CERTIFICATION — MLOps",
      issuer: "YOUR ISSUER",
      summary: "Packaging, promotion, deployment, and monitoring for models already built.",
      href: "",
    },
    {
      date: "2024",
      title: "YOUR CERTIFICATION — DevSecOps",
      issuer: "YOUR ISSUER",
      summary: "Pipeline security, image scanning, secrets, and least-privilege access.",
      href: "",
    },
    {
      date: "2024",
      title: "YOUR CERTIFICATION — Terraform",
      issuer: "YOUR ISSUER",
      summary: "Infrastructure as code for the accounts and environments an AI service runs in.",
      href: "",
    },
    {
      date: "2024",
      title: "YOUR CERTIFICATION — Cloud architecture",
      issuer: "YOUR ISSUER",
      summary: "AWS services, networking, and the minimum needed to run a workload outside a laptop.",
      href: "",
    },
    {
      date: "2023",
      title: "YOUR CERTIFICATION — LLM systems in production",
      issuer: "YOUR ISSUER",
      summary: "Integrating, evaluating, and operating language-model services.",
      href: "",
    },
  ],
  contact: {
    index: "07",
    kicker: "Contact",
    title: "Get in Touch",
    lede: "Have a role, a platform, or a deployment to get into production? Send a note.",
    heading: "Let's Ship It Securely",
    body: "Open to AI Engineer, MLOps, and DevSecOps roles. If the work is taking an AI system into a reliable production deployment, start here.",
    replyNote:
      "Messages are validated in the browser. With a webhook configured they are forwarded; otherwise the form confirms in demo mode and nothing is stored.",
    freelance: {
      enabled: true,
      eyebrow: "Accepting client projects",
      title: "Need a product built, not a hire?",
      body: "Also available for focused builds: LLM features, automation, and internal tools. Replace this with your studio link.",
      cta: "Visit the studio",
      href: "https://example.com",
    },
  },
  faqIntro: {
    title: "Common Questions",
    lede: "The things people usually ask before getting in touch.",
  },
  faq: [
    {
      question: "What roles are you open to?",
      answer:
        "Full-time AI Engineer, MLOps, and DevSecOps roles — the work of integrating, deploying, securing, and operating AI systems. Edit this answer in the portfolio data.",
    },
    {
      question: "Where are you based, and do you work remotely?",
      answer:
        "Based in Dallas, Texas. Open to remote work and to teams that care more about the system than the time zone.",
    },
    {
      question: "What do you actually build?",
      answer:
        "Production LLM systems, RAG and agent services, the cloud and Kubernetes around them, CI/CD, monitoring, and the security checks on the way to release.",
    },
    {
      question: "How much production experience should I claim here?",
      answer:
        "Replace this with an honest summary of what you have operated: users, latency, incidents, and what you would do differently.",
    },
    {
      question: "Do you take freelance or contract work?",
      answer:
        "Yes, for scoped builds. The studio card in the contact section is the placeholder for that offer.",
    },
    {
      question: "How quickly do you reply?",
      answer: "Usually within a day. Say so here in your own words once the inbox is connected.",
    },
  ],
  testimonials: [] as Testimonial[],
  blogIntro: {
    title: "Notes",
    lede: "Short writing on building AI systems. Replace these posts with your own.",
  },
  blog: [
    {
      slug: "promote-the-digest",
      title: "YOUR POST: Promote the digest, not the notebook",
      date: "March 2026",
      excerpt:
        "Production should run a known container. Notes on why the release path matters more than a fresh export.",
      tags: ["MLOps", "CI/CD"],
      paragraphs: [
        "A model that only exists in a notebook is not a release. The thing that reaches production should be an image digest the pipeline already built and scanned.",
        "Staging and production then differ by configuration, not by whoever packaged the artifact last. Rollback is the previous digest, already in the registry.",
        "Replace this note with a release you actually operated — the pipeline, the failure, and what you changed.",
      ],
    },
    {
      slug: "secure-the-path-to-prod",
      title: "YOUR POST: Secure the path to production",
      date: "January 2026",
      excerpt:
        "An LLM service inherits every shortcut in the pipeline. Secrets, images, and access belong in the release, not in a follow-up ticket.",
      tags: ["DevSecOps", "Cloud"],
      paragraphs: [
        "The fastest way to ship an assistant is also the fastest way to ship a secret in an image. The release path has to scan, restrict, and record before traffic arrives.",
        "Least privilege on the cluster, secrets outside the repo, and a gate that fails the build are cheaper than an incident write-up.",
        "This is placeholder writing. Swap it for a post about a control you put on a real deployment.",
      ],
    },
  ],
  legal: {
    privacy: [
      "This portfolio is a personal site. The contact form validates what you type and, when a webhook is configured, forwards that message to the owner. In demo mode the message is not stored.",
      "The assistant sends your question to a model provider only when an API key is configured. In demo mode answers are generated on the server from the public portfolio content and are not logged.",
      "Replace this page with a policy that matches how you actually handle mail, analytics, and model providers.",
    ],
    terms: [
      "The project write-ups on this site are portfolio placeholders until you replace them. Do not treat sample metrics as claims about a live product.",
      "External links, including GitHub, LinkedIn, and the studio link, point wherever you set them in the portfolio data.",
      "Replace this page with terms that match your own site.",
    ],
    disclaimer: [
      "Sample projects, metrics, and certifications are placeholders for Anuoluwa Olutayo. They are not statements about a specific employer or a deployed system.",
      "The assistant answers from the content of this site. It can be wrong, especially in demo mode, and it is not a substitute for a direct conversation.",
    ],
  },
} satisfies Portfolio;
