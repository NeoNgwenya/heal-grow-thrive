"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ActionLink } from "./ui";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "The Movement" },
  { href: "/community", label: "Community" },
  { href: "/events", label: "Events" },
  { href: "/shop", label: "Shop" },
];

export function Navigation() {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);

  function closeMenu() {
    if (menu.current) menu.current.open = false;
  }

  const links = navigation.map(({ href, label }) => {
    const active = pathname === href || (href === "/about" && ["/founder", "/pillars/", "/partnerships"].some((path) => pathname.startsWith(path)));
    return <Link key={href} href={href} aria-current={active ? "page" : undefined} onClick={closeMenu}>{label}</Link>;
  });

  return (
    <>
      <nav className="desktop-nav" aria-label="Main navigation">{links}</nav>
      <div className="desktop-join"><ActionLink href="/community">Join the community</ActionLink></div>
      <details className="mobile-menu" ref={menu}>
        <summary aria-label="Toggle navigation">
          <Menu className="menu-open" size={25} aria-hidden />
          <X className="menu-close" size={25} aria-hidden />
        </summary>
        <nav aria-label="Mobile navigation">
          {links}
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
      </details>
    </>
  );
}
