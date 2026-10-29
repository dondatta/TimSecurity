"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { company } from "@/lib/site";

const links = [
  { href: "/robotics", label: "Robot Patrol", isNew: true },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);

  // Close the mobile menu after navigating.
  useEffect(() => {
    if (menu.current) menu.current.open = false;
  }, [pathname]);

  const current = (href: string) =>
    pathname === href || (href === "/services" && pathname.endsWith("-security")) ? "page" : undefined;

  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="logo" aria-label="UA Securities home">
          <Image src="/images/ua-logo.png" alt="UA Securities LLC" width={584} height={300} priority />
        </Link>
        <nav className="nav" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={current(l.href)}>
              {l.label}
              {l.isNew && <span className="tag">New</span>}
            </Link>
          ))}
          <a className="phone" href={company.phoneHref}>{company.phone}</a>
          <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
        </nav>
        <details className="menu" ref={menu}>
          <summary>Menu</summary>
          <div className="panel">
            <Link href="/">Home</Link>
            {links.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
                {l.isNew && <span className="tag">New</span>}
              </Link>
            ))}
            <a href={company.phoneHref}>Call {company.phone}</a>
          </div>
        </details>
      </div>
    </header>
  );
}
