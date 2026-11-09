import type { Metadata } from "next";
import { ContactForm } from "../../components/contact-form";
import { ActionLink, PageIntro } from "../../components/ui";
import { site } from "../../lib/site";
import { topics, whatsappLink } from "../../lib/contact";

export const metadata: Metadata = { title: "Contact" };

export default async function Contact({ searchParams }: {
  searchParams: Promise<{ topic?: string | string[] }>;
}) {
  const { topic } = await searchParams;
  const selectedTopic = typeof topic === "string" && Object.hasOwn(topics, topic) ? topic as keyof typeof topics : "general";

  return (
    <>
      <PageIntro eyebrow="Contact us" description="Get in touch about the community, events, speaking opportunities, sponsorships or working together.">
        Let’s <em>connect.</em>
      </PageIntro>
      <section className="section shell split-section contact-layout">
        <div>
          <p className="eyebrow"><span /> Get in touch</p>
          <h2>We’d love to <em>hear from you.</em></h2>
          <p>Tell us what you have in mind and choose the topic that best fits your enquiry.</p>
          <div className="contact-links">
            {site.email && <ActionLink href={`mailto:${site.email}`} variant="text">{site.email}</ActionLink>}
            {site.whatsapp && <ActionLink href={whatsappLink(site.whatsapp, "Hi Awande! I have a question about Heal Grow Thrive Together.")} variant="text">Message us on WhatsApp</ActionLink>}
            <ActionLink href="/partnerships" variant="text">Explore partnership opportunities</ActionLink>
          </div>
        </div>
        <ContactForm key={selectedTopic} topic={selectedTopic} email={site.email} whatsapp={site.whatsapp} />
      </section>
    </>
  );
}
