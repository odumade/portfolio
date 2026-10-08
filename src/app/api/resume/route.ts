import { portfolio } from "@/data/portfolio";

export function GET() {
  const lines = [
    portfolio.name,
    portfolio.role,
    portfolio.location,
    portfolio.email,
    "",
    portfolio.tagline,
    "",
    portfolio.hero.bio,
    "",
    "EXPERIENCE",
    ...portfolio.experience.flatMap((role) => [
      `${role.title} — ${role.company} (${role.period})`,
      role.summary,
      ...role.highlights.map((item) => `- ${item}`),
      role.technologies.join(", "),
      "",
    ]),
    "EDUCATION",
    ...portfolio.education.map((item) => `${item.credential}, ${item.school} (${item.period}) — ${item.detail}`),
    "",
    "PROJECTS",
    ...portfolio.projects.flatMap((project) => [
      `${project.title} — ${project.tagline}`,
      project.solution,
      project.technologies.join(", "),
      "",
    ]),
    "SKILLS",
    ...portfolio.skills.map((group) => `${group.name}: ${group.skills.join(", ")}`),
  ];

  const filename = `${portfolio.name.replace(/\s+/g, "-")}-Resume.txt`;
  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
