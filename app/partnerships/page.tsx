import type { Metadata } from "next";
import { ActionLink, PageIntro } from "../../components/ui";

export const metadata: Metadata = { title: "Opportunities & Partnerships" };

const partners = [
  "Women’s empowerment organisations",
  "Community groups and charities",
  "Community interest companies",
  "Entrepreneurs and small businesses",
  "Wellbeing professionals",
  "Workshop facilitators and guest speakers",
  "Businesses interested in supporting women",
  "Sponsors and event partners",
];

export default function Partnerships() {
  return (
    <>
      <PageIntro eyebrow="Opportunities & partnerships" description="We welcome ideas from individuals, businesses and organisations interested in personal development, wellbeing, empowerment and community growth." tone="grow">
        Let’s create <em>opportunities together.</em>
      </PageIntro>
      <section className="section shell split-section">
        <div>
          <p className="eyebrow"><span /> Work with us</p>
          <h2>What could we <em>build together?</em></h2>
          <p>Tell us about a workshop you’d like to run, an opportunity to share or a partnership you’d like to explore. We’d love to hear what you have in mind.</p>
          <ActionLink href="/contact?topic=partnership">Explore a collaboration</ActionLink>
        </div>
        <ul className="partner-list">
          {partners.map((partner) => <li key={partner}>{partner}</li>)}
        </ul>
      </section>
    </>
  );
}
