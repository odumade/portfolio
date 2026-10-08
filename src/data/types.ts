export type RichPart = {
  text: string;
  emphasis?: boolean;
};

export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type FocusArea = {
  title: string;
  description: string;
  icon: "llm" | "cloud" | "mlops" | "security";
};

export type ScreenshotKind = "chat" | "dashboard" | "board" | "vision" | "pipeline";

export type Screenshot = {
  kind: ScreenshotKind;
  title: string;
  caption: string;
  alt: string;
};

export type CaseSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  tagline: string;
  problem: string;
  solution: string;
  architecture: string;
  technologies: string[];
  features: string[];
  impact: Stat[];
  impactPoints: string[];
  github: string;
  live: string;
  screenshots: Screenshot[];
  caseStudy: CaseSection[];
};

export type Experience = {
  title: string;
  company: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  technologies: string[];
};

export type Education = {
  school: string;
  credential: string;
  period: string;
  detail: string;
};

export type Paper = {
  date: string;
  title: string;
  summary: string;
  tag: string;
  href: string;
};

export type SkillGroup = {
  name: string;
  skills: string[];
};

export type LeadershipRole = {
  title: string;
  organization: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type Certification = {
  date: string;
  title: string;
  issuer: string;
  summary: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  paragraphs: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type Portfolio = {
  name: string;
  initials: string;
  role: string;
  roles: string[];
  tagline: string;
  availability: string;
  location: string;
  email: string;
  siteUrl: string;
  resumeLabel: string;
  portrait: string;
  seo: {
    title: string;
    description: string;
  };
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    whatsapp: string;
  };
  assistant: {
    name: string;
    subtitle: string;
    greeting: string;
    suggestions: string[];
  };
  nav: NavItem[];
  footer: {
    explore: NavItem[];
    more: NavItem[];
    blurb: string;
    rolesLine: string;
  };
  hero: {
    greeting: string;
    bio: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  about: {
    index: string;
    kicker: string;
    title: string;
    lede: string;
    paragraphs: RichPart[][];
    chips: string[];
    focus: FocusArea[];
    stats: Stat[];
  };
  projectsIntro: {
    index: string;
    kicker: string;
    title: string;
    lede: string;
  };
  projects: Project[];
  experienceIntro: {
    index: string;
    kicker: string;
    title: string;
    lede: string;
  };
  experience: Experience[];
  educationIntro: {
    title: string;
    lede: string;
  };
  education: Education[];
  researchIntro: {
    index: string;
    kicker: string;
    title: string;
    lede: string;
  };
  research: Paper[];
  skillsIntro: {
    index: string;
    kicker: string;
    title: string;
    lede: string;
  };
  skills: SkillGroup[];
  leadershipIntro: {
    index: string;
    kicker: string;
    title: string;
    lede: string;
  };
  leadership: LeadershipRole[];
  certificationsIntro: {
    index: string;
    kicker: string;
    title: string;
    lede: string;
  };
  certifications: Certification[];
  contact: {
    index: string;
    kicker: string;
    title: string;
    lede: string;
    heading: string;
    body: string;
    replyNote: string;
    freelance: {
      enabled: boolean;
      eyebrow: string;
      title: string;
      body: string;
      cta: string;
      href: string;
    };
  };
  faqIntro: {
    title: string;
    lede: string;
  };
  faq: FaqItem[];
  testimonials: Testimonial[];
  blogIntro: {
    title: string;
    lede: string;
  };
  blog: BlogPost[];
  legal: {
    privacy: string[];
    terms: string[];
    disclaimer: string[];
  };
};
