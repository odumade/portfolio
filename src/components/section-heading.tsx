import { Reveal } from "./reveal";

export function SectionHeading({
  index,
  kicker,
  title,
  lede,
}: {
  index?: string;
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <Reveal className="mx-auto mb-16 max-w-3xl text-center">
      <p className="kicker mb-4">{index ? `${index} / ${kicker}` : kicker}</p>
      <h2 className="heading-lg text-gradient mb-4">{title}</h2>
      <p className="text-base leading-relaxed text-body md:text-lg">{lede}</p>
    </Reveal>
  );
}
