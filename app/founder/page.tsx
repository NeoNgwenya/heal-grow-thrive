import type { Metadata } from "next";
import Image from "next/image";
import founder from "../../images/founder.jpeg";
import { ActionLink, Botanical } from "../../components/ui";

export const metadata: Metadata = {
  title: "Meet the Founder",
  description: "Meet Awande Mkwananzi, published author, healthcare professional and founder of Heal Grow Thrive Together.",
};

export default function Founder() {
  return (
    <section className="section shell founder-page">
      <div className="founder-photo">
        <Botanical className="founder-botanical" />
        <Image src={founder} alt="Portrait of Awande Mkwananzi" sizes="(max-width: 720px) 85vw, 420px" preload />
      </div>
      <div className="founder-bio">
        <p className="eyebrow"><span /> Meet the founder</p>
        <h1>Awande <em>Mkwananzi.</em></h1>
        <p className="lead">Founder, healthcare professional, entrepreneur and published author.</p>
        <div className="prose">
          <p>Awande’s work is shaped by her experiences, her commitment to personal development and her desire to help others recognise their potential.</p>
          <p>She is the author of <cite>Surviving Loss: Held by Grace</cite>, the creator of the Heal Grow Thrive Journal and an award nominee. Through her writing, community initiatives and entrepreneurial work, she encourages people to navigate life’s challenges, invest in themselves and pursue meaningful opportunities.</p>
          <p>Heal Grow Thrive Together reflects her belief that growth is possible when life takes an unexpected direction. Her vision is a community where people prioritise their wellbeing, explore their talents and help one another move forward.</p>
        </div>
        <blockquote>“You can choose yourself, start again and build a future you are proud of.”</blockquote>
        <p className="signature">Heal. Grow. Thrive. Together.</p>
        <ActionLink href="/shop" variant="text">Explore Awande’s book and journal</ActionLink>
      </div>
    </section>
  );
}
