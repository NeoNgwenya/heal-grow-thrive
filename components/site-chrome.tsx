import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import logo from "../images/logo.jpeg";
import { site } from "../lib/site";
import { Navigation } from "./navigation";
import { OutboundLink } from "./ui";

function Brand() {
  return (
    <Link href="/" className="brand">
      <Image src={logo} alt="" width={52} height={52} />
      <span>Heal Grow Thrive<small>Together</small></span>
    </Link>
  );
}

export function Header() {
  return (
    <header>
      <div className="announcement"><span aria-hidden="true">✦</span> A community for your next chapter <span aria-hidden="true">✦</span></div>
      <div className="site-header">
        <div className="shell header-inner">
          <Brand />
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>{site.description}</p>
          </div>
          <div className="footer-links">
            <h2>Explore</h2>
            <Link href="/about">The Movement</Link>
            <Link href="/founder">Meet the Founder</Link>
            <Link href="/shop">Books & Journals</Link>
          </div>
          <div className="footer-links">
            <h2>Get involved</h2>
            <Link href="/community">Join the Community</Link>
            <Link href="/events">Upcoming Events</Link>
            <Link href="/partnerships">Opportunities & Partnerships</Link>
            <Link href="/contact">Contact Us <ArrowUpRight size={13} aria-hidden /></Link>
          </div>
        </div>
        <div className="footer-bottom">
          <small>© {new Date().getFullYear()} {site.name}</small>
          <span>Heal. Grow. Thrive. Together.</span>
          {(site.instagram || site.facebook) && (
            <div className="socials">
              {site.instagram && <OutboundLink href={site.instagram}>Instagram <ArrowUpRight size={13} aria-hidden /></OutboundLink>}
              {site.facebook && <OutboundLink href={site.facebook}>Facebook <ArrowUpRight size={13} aria-hidden /></OutboundLink>}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
