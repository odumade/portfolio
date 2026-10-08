import { portfolio } from "@/data/portfolio";

function projectBrief(slugOrTitle?: string) {
  const projects = slugOrTitle
    ? portfolio.projects.filter((project) => {
        const haystack = `${project.title} ${project.slug.replaceAll("-", " ")}`.toLowerCase();
        return haystack.includes(slugOrTitle) || slugOrTitle.includes(project.title.toLowerCase());
      })
    : portfolio.projects;

  return projects
    .map((project) =>
      [
        `${project.title}: ${project.tagline}`,
        `Problem: ${project.problem}`,
        `Solution: ${project.solution}`,
        `Architecture: ${project.architecture}`,
        `Technologies: ${project.technologies.join(", ")}`,
        `Impact: ${project.impactPoints.join(" ")}`,
      ].join("\n"),
    )
    .join("\n\n");
}

export function buildKnowledge() {
  return {
    name: portfolio.name,
    role: portfolio.role,
    location: portfolio.location,
    email: portfolio.email,
    availability: portfolio.availability,
    tagline: portfolio.tagline,
    bio: portfolio.hero.bio,
    about: portfolio.about.paragraphs.map((parts) => parts.map((part) => part.text).join("")),
    focus: portfolio.about.focus,
    experience: portfolio.experience,
    education: portfolio.education,
    projects: portfolio.projects.map((project) => ({
      title: project.title,
      tagline: project.tagline,
      problem: project.problem,
      solution: project.solution,
      architecture: project.architecture,
      technologies: project.technologies,
      features: project.features,
      impact: project.impactPoints,
    })),
    research: portfolio.research,
    skills: portfolio.skills,
    leadership: portfolio.leadership,
    certifications: portfolio.certifications,
    faq: portfolio.faq,
  };
}

export function buildSystemPrompt() {
  return [
    `You are ${portfolio.assistant.name}, the portfolio assistant for ${portfolio.name}, a ${portfolio.role}.`,
    "Answer only from the portfolio knowledge below. Do not invent employers, metrics, degrees, or projects.",
    `If the knowledge does not contain the answer, say so and point the reader to ${portfolio.email}.`,
    "Be concise, specific, and professional. Refer to the person by name.",
    "Position them as an AI Engineer who integrates, deploys, scales, secures, and operates AI and LLM systems. Do not describe them as a machine learning researcher, or as someone who develops ML algorithms or models from scratch.",
    "Portfolio knowledge:",
    JSON.stringify(buildKnowledge()),
  ].join("\n\n");
}

export function answerFromPortfolio(question: string) {
  const q = question.toLowerCase();
  const mentioned = portfolio.projects.filter((project) => {
    const title = project.title.toLowerCase();
    const slug = project.slug.replaceAll("-", " ");
    return q.includes(title) || q.includes(slug);
  });

  if (mentioned.length > 0) {
    return projectBrief(q);
  }

  if (/skill|stack|technolog|tool|language|framework/.test(q)) {
    return portfolio.skills
      .map((group) => `${group.name}: ${group.skills.join(", ")}`)
      .join("\n");
  }

  if (/experience|job|worked|company|career|role/.test(q) && !/open to|available/.test(q)) {
    return portfolio.experience
      .map(
        (role) =>
          `${role.title} at ${role.company} (${role.period}). ${role.summary} ${role.highlights.join(" ")}`,
      )
      .join("\n\n");
  }

  if (/educat|degree|university|college|school/.test(q)) {
    return portfolio.education
      .map((item) => `${item.credential} at ${item.school} (${item.period}). ${item.detail}`)
      .join("\n");
  }

  if (/research|paper|publication|algorithm|theory/.test(q)) {
    if (portfolio.research.length === 0) {
      return `${portfolio.name} works on the engineering and operations side of AI: integrating, deploying, scaling, securing, and maintaining LLM systems. Academic research, ML theory, and training models from scratch are outside that focus. Ask about MLOps, cloud deployment, Kubernetes, CI/CD, or DevSecOps.`;
    }
    return portfolio.research
      .map((paper) => `${paper.title} (${paper.date}, ${paper.tag}). ${paper.summary}`)
      .join("\n\n");
  }

  if (/certif/.test(q)) {
    return portfolio.certifications
      .map((item) => `${item.title} — ${item.issuer} (${item.date}). ${item.summary}`)
      .join("\n");
  }

  if (/leader|mentor|community/.test(q)) {
    return portfolio.leadership
      .map((role) => `${role.title} at ${role.organization} (${role.period}). ${role.summary}`)
      .join("\n\n");
  }

  if (/contact|email|reach|hire|available|open to|freelance|remote|based|where/.test(q)) {
    return [
      `${portfolio.name} is ${portfolio.availability.toLowerCase()} and is based in ${portfolio.location}.`,
      `Email: ${portfolio.email}.`,
      portfolio.faq.find((item) => /remote|based/i.test(item.question))?.answer ?? "",
      portfolio.faq.find((item) => /freelance/i.test(item.question))?.answer ?? "",
    ]
      .filter(Boolean)
      .join(" ");
  }

  if (/project|built|build|ship|portfolio|case stud|work/.test(q)) {
    return `${portfolio.name} features ${portfolio.projects.length} systems on this site.\n\n${portfolio.projects
      .map((project) => `${project.title} — ${project.tagline}`)
      .join("\n")}`;
  }

  if (/who|about|background|bio|yourself|you are|your name/.test(q)) {
    const about = portfolio.about.paragraphs
      .map((parts) => parts.map((part) => part.text).join(""))
      .join(" ");
    return `${portfolio.name} is a ${portfolio.role} based in ${portfolio.location}. ${portfolio.hero.bio} ${about}`;
  }

  return `I can answer from ${portfolio.name}'s portfolio: projects, experience, skills, education, and background. The focus is AI engineering, MLOps, cloud deployment, and DevSecOps. Try asking about ${portfolio.projects[0]?.title ?? "a project"} or the technical stack. For anything else, email ${portfolio.email}.`;
}
