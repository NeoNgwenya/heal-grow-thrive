import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { ActionLink, PageIntro, PillarCards, PillarIcon } from "../../../components/ui";
import { pillars } from "../../../lib/pillars";

type Props = { params: Promise<{ pillar: string }> };

export function generateStaticParams() {
  return pillars.map(({ id }) => ({ pillar: id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pillar } = await params;
  const details = pillars.find(({ id }) => id === pillar);
  if (!details) notFound();
  return { title: `${details.name} | ${details.tagline}`, description: details.summary };
}

export default async function Pillar({ params }: Props) {
  const { pillar } = await params;
  const details = pillars.find(({ id }) => id === pillar);
  if (!details) notFound();

  return (
    <>
      <PageIntro eyebrow={`The pillars / ${details.name}`} description={details.intro} tone={details.id}>
        {details.name}. <em>{details.tagline}.</em>
      </PageIntro>
      <section className="section shell">
        <div className="section-heading"><p className="eyebrow"><span /> Put it into practice</p><h2>Where to <em>begin.</em></h2></div>
        <div className="pillar-activities">
          {details.activities.map(([title, description], index) => (
            <details className={`pillar-activity tone-${details.id}`} name="pillar-activities" key={title} open={index === 0}>
              <summary>
                <span className="activity-number" aria-hidden="true">0{index + 1}</span>
                <span>{title}</span>
                <ChevronDown size={18} aria-hidden />
              </summary>
              <p>{description}</p>
            </details>
          ))}
        </div>
        {details.id === "heal" && <p className="small-note">Community content is for encouragement and education. For medical or mental health care, speak with a qualified professional.</p>}
        <div className={`pillar-quote tone-${details.id}`}>
          <PillarIcon id={details.id} size={32} />
          <blockquote>“{details.quote}”</blockquote>
          <ActionLink href={details.id === "thrive" ? "/events#thrive-and-trade" : "/community"} variant="outline">
            {details.id === "thrive" ? "Explore Thrive & Trade Thursdays" : "Explore the community"}
          </ActionLink>
        </div>
      </section>
      <section className="section section--tinted">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow"><span /> The movement</p><h2>Explore the <em>three pillars.</em></h2></div>
          <PillarCards />
        </div>
      </section>
    </>
  );
}
