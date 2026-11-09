import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, CalendarDays, HeartHandshake } from "lucide-react";
import founder from "../images/founder.jpeg";
import { ActionLink, Botanical, PillarCards } from "../components/ui";
import { products } from "../lib/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Welcome to the movement</div>
            <h1>Your journey.<br />Your growth.<br /><em>Your next chapter.</em></h1>
            <p>A community to heal, build confidence and find your next opportunity.</p>
            <div className="hero-actions">
              <ActionLink href="/community">Join our community</ActionLink>
              <ActionLink href="/about" variant="outline">Explore the movement</ActionLink>
              <Link className="hero-events" href="/events"><CalendarDays size={16} aria-hidden /> Upcoming events</Link>
            </div>
          </div>
          <div className="hero-art">
            <Botanical className="hero-botanical" />
            <span className="hero-sparkle" aria-hidden="true">✧</span>
            <div className="portrait-frame">
              <Image src={founder} alt="Awande Mkwananzi, founder of Heal Grow Thrive Together" sizes="(max-width: 720px) 85vw, (max-width: 1100px) 42vw, 425px" preload />
            </div>
            <Link className="portrait-caption" href="/founder">
              <div><span>Meet the founder</span><strong>Awande Mkwananzi</strong></div>
              <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </div>
        <a className="hero-scroll" href="#pillars"><ArrowDown size={16} aria-hidden /><span>Explore the pillars</span></a>
      </section>

      <section className="section shell" id="pillars">
        <div className="section-heading centered" data-reveal="">
          <p className="eyebrow"><span /> The heart of the movement <span /></p>
          <h2>Three pillars. <em>One purpose.</em></h2>
        </div>
        <PillarCards reveal />
      </section>

      <section className="community-band">
        <div className="shell community-band-inner">
          <div data-reveal="">
            <p className="eyebrow"><span /> Find your people</p>
            <h2>You don’t have to <em>grow alone.</em></h2>
            <p>Share ideas, find encouragement and meet people taking their own next steps.</p>
            <ActionLink href="/community" variant="light">Find your community</ActionLink>
          </div>
          <div className="community-emblem" aria-hidden="true"><HeartHandshake size={94} strokeWidth={0.8} /><span>✦</span></div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading shop-heading" data-reveal="">
          <div>
            <p className="eyebrow"><span /> Books & journals</p>
            <h2>For the season <em>you’re in.</em></h2>
          </div>
          <ActionLink href="/shop" variant="outline">Visit the shop</ActionLink>
        </div>
        <div className="product-grid home-products">
          {products.map((product) => (
            <Link className="product-preview" key={product.id} href={`/shop#${product.id}`} data-reveal="">
              <div className={`product-stage product-stage--${product.id}`}>
                <Image src={product.image} alt="" sizes="(max-width: 510px) 28vw, 155px" />
              </div>
              <div className="product-preview-info">
                <div><span className="eyebrow">{product.type}</span><h3>{product.title}</h3></div>
                <ArrowRight size={19} aria-hidden />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
