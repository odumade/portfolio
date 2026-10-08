export function LegalPage({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <article className="section-padding container-wide pt-32">
      <h1 className="heading-lg text-gradient">{title}</h1>
      <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-body">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
