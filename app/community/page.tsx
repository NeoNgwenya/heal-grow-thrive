import type { Metadata } from "next";
import { HeartHandshake, Flower2, Sprout, Lightbulb, Users, Mic, Sparkles } from "lucide-react";
import { ActionLink, PageIntro } from "../../components/ui";
import { site } from "../../lib/site";
import { whatsappLink } from "../../lib/contact";

export const metadata: Metadata = { title: "Join the Community" };

const benefits = [
  { icon: HeartHandshake, text: "Encouragement and motivation" },
  { icon: Flower2, text: "Wellbeing and self-development discussions" },
  { icon: Sprout, text: "Weekly growth activities" },
  { icon: Lightbulb, text: "Business ideas and opportunities" },
  { icon: Users, text: "Networking and collaboration" },
  { icon: Mic, text: "Virtual gatherings and guest speakers" },
  { icon: Sparkles, text: "A space to celebrate each other’s progress" },
];

export default function Community() {
  const joinLink = site.community ?? (site.whatsapp
    ? whatsappLink(site.whatsapp, "Hi Awande! I’d love to join the Heal Grow Thrive Together community. Could you send me the details?")
    : undefined);

  return (
    <>
      <PageIntro eyebrow="Join our community" description="Whether you’re starting again, exploring new opportunities or looking for encouragement, there’s room to grow with us." tone="grow">
        You don’t have to <em>grow alone.</em>
      </PageIntro>
      <section className="section shell split-section">
        <div>
          <p className="eyebrow"><span /> What to expect</p>
          <h2>Make connections <em>that matter.</em></h2>
          <p>Our WhatsApp community brings people together to share experiences, exchange ideas and support one another through change.</p>
          <ActionLink href={joinLink ?? "/contact?topic=community"}>
            {site.community ? "Join on WhatsApp" : "Ask about membership"}
          </ActionLink>
        </div>
        <ul className="icon-list">
          {benefits.map(({ icon: Icon, text }) => <li key={text}><Icon size={21} strokeWidth={1.5} aria-hidden /><span>{text}</span></li>)}
        </ul>
      </section>
    </>
  );
}
