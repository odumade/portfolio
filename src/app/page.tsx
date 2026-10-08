import { About } from "@/components/about";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Leadership } from "@/components/leadership";
import { Projects } from "@/components/projects";
import { Research } from "@/components/research";
import { Skills } from "@/components/skills";
import { portfolio } from "@/data/portfolio";

export default function HomePage() {
  return (
    <div className="home-bands">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Research />
      <Skills />
      <Leadership />
      <Certifications />
      <Contact />
      <Faq />
      {portfolio.testimonials.length > 0 && (
        <section id="testimonials" className="section-padding container-wide">
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            {portfolio.testimonials.map((item) => (
              <figure key={item.name} className="surface rounded-3xl p-6">
                <blockquote className="text-body">&ldquo;{item.quote}&rdquo;</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-heading">
                  {item.name}
                  <span className="mt-1 block font-normal text-muted">{item.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
