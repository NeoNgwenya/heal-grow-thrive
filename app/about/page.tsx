import type { Metadata } from "next";
import { ActionLink, PageIntro, PillarCards } from "../../components/ui";

export const metadata: Metadata = { title: "The Movement" };

const values = [
  ["Compassion", "Treat people with kindness and understanding."],
  ["Growth", "Keep learning and developing at every stage of life."],
  ["Empowerment", "Help people recognise their strengths and potential."],
  ["Integrity", "Act with honesty and responsibility."],
  ["Inclusion", "Welcome people from different backgrounds and experiences."],
  ["Unity", "Make it easier to connect, collaborate and support one another."],
  ["Resilience", "Encourage people to rebuild, adapt and begin again."],
];

export default function About() {
  return (
    <>
      <PageIntro eyebrow="The movement" description="A supportive community for people finding the courage to begin again, invest in themselves and create new opportunities.">
        A movement for <em>your next chapter.</em>
      </PageIntro>
      <section className="section shell split-section">
        <div><p className="eyebrow"><span /> Our story</p><h2>Why we <em>began.</em></h2></div>
        <div className="prose">
          <p>Heal Grow Thrive Together grew out of lived experience and the belief that everyone deserves the chance to heal from life’s challenges, grow into their potential and create a better future.</p>
          <p>When life takes an unexpected direction, rebuilding confidence or finding a new purpose can feel daunting. Through community conversations, personal development, networking and collaboration, we make space for people to share what they’ve learned and take the next step together.</p>
          <ActionLink href="/founder" variant="text">Meet Awande, our founder</ActionLink>
        </div>
      </section>
      <section className="shell info-grid">
        <article className="info-card tone-heal">
          <p className="eyebrow">Our vision</p>
          <h2>Lasting change.</h2>
          <p>Build an inclusive, supportive community that empowers people to heal, grow and create meaningful change in their lives and communities.</p>
        </article>
        <article className="info-card tone-grow">
          <p className="eyebrow">Our mission</p>
          <h2>More room to grow.</h2>
          <p>Support emotional wellbeing, personal development, financial empowerment and meaningful connections by creating opportunities to learn, share and collaborate.</p>
        </article>
      </section>
      <section className="section shell">
        <div className="section-heading"><p className="eyebrow"><span /> Our values</p><h2>What guides <em>us.</em></h2></div>
        <dl className="values-grid">
          {values.map(([title, description]) => <div key={title}><dt>{title}</dt><dd>{description}</dd></div>)}
        </dl>
      </section>
      <section className="section section--tinted">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow"><span /> Explore the pillars</p><h2>Heal. Grow. <em>Thrive.</em></h2></div>
          <PillarCards />
        </div>
      </section>
    </>
  );
}
