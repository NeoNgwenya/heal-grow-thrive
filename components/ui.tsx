import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Crown, Flower2, Sprout } from "lucide-react";
import { pillars, type PillarId } from "../lib/pillars";

export function OutboundLink({ href, children, className }: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const newTab = /^(?:https?:)?\/\//i.test(href);

  return (
    <a href={href} className={className} target={newTab ? "_blank" : undefined} rel={newTab ? "noopener noreferrer" : undefined}>
      {children}
      {newTab && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}

export function ActionLink({ href, children, variant = "primary" }: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "text" | "light";
}) {
  const external = !href.startsWith("/") || href.startsWith("//");
  const icon = external ? <ArrowUpRight size={16} aria-hidden /> : <ArrowRight size={16} aria-hidden />;
  const className = `action action--${variant}`;

  return external ? (
    <OutboundLink href={href} className={className}>{children}{icon}</OutboundLink>
  ) : (
    <Link href={href} className={className}>{children}{icon}</Link>
  );
}

export function Botanical({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 164 277" fill="none" stroke="currentColor" strokeWidth="1.05" aria-hidden="true">
      <path d="M45 270C57 222 90 168 98 116c7-45-2-75-12-107M59 233c1-34-12-58-36-78M73 204c18-26 43-37 71-49M91 159C85 132 65 110 40 97m57 31c8-27 24-46 48-61M99 86C88 67 74 55 53 46m46 18c10-17 14-30 14-50" />
      <path d="M86 9c-16 24-11 43 12 63 6-28 0-48-12-63ZM53 46c2 20 17 37 46 40-14-22-28-36-46-40Zm60-32c12 21 8 39-14 50-1-19 4-37 14-50Zm32 53c-6 29-24 48-48 61 7-31 24-53 48-61ZM40 97c5 26 21 48 51 62-9-29-24-50-51-62Zm104 58c-10 25-35 41-71 49 19-27 40-45 71-49ZM23 155c-6 28 10 60 36 78-2-36-16-63-36-78Z" />
    </svg>
  );
}

const pillarIcons = { heal: Flower2, grow: Sprout, thrive: Crown };

export function PillarIcon({ id, size = 25 }: { id: PillarId; size?: number }) {
  const Icon = pillarIcons[id];
  return <Icon size={size} strokeWidth={1.4} aria-hidden />;
}

export function PillarCards({ reveal = false }: { reveal?: boolean }) {
  return (
    <div className="pillar-grid">
      {pillars.map((pillar, index) => (
        <Link href={`/pillars/${pillar.id}`} className={`pillar-card tone-${pillar.id}`} key={pillar.id} data-reveal={reveal ? "" : undefined}>
          <div className="pillar-card-top"><PillarIcon id={pillar.id} /><span>0{index + 1}</span></div>
          <h3>{pillar.name}<span>.</span></h3>
          <p>{pillar.summary}</p>
          <span className="pillar-card-link"><span>{pillar.tagline}</span><ArrowUpRight size={16} aria-hidden /></span>
        </Link>
      ))}
    </div>
  );
}

export function PageIntro({ eyebrow, children, description, tone = "heal" }: {
  eyebrow: string;
  children: ReactNode;
  description: string;
  tone?: PillarId;
}) {
  return (
    <section className={`page-intro tone-${tone}`}>
      <div className="shell page-intro-inner">
        <div className="eyebrow"><span />{eyebrow}</div>
        <h1>{children}</h1>
        <p>{description}</p>
        <Botanical className="page-botanical" />
      </div>
    </section>
  );
}
