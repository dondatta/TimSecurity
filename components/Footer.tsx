import Link from "next/link";
import Image from "next/image";
import { company, services } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div>
          <Link href="/" className="logo" aria-label="UA Securities home">
            <Image src="/images/ua-logo.png" alt="UA Securities LLC" width={584} height={300} />
          </Link>
          <p className="motto">{company.motto}</p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            {services.map((s) => (
              <li key={s.slug}><Link href={`/${s.slug}`}>{s.short}</Link></li>
            ))}
            <li><Link href="/robotics">Robot-Assisted Patrol</Link></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Request a Quote</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href={company.phoneHref}>{company.phone}</a></li>
            <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
            <li>Greater Seattle · King, Snohomish &amp; Pierce counties</li>
            <li>24/7 for emergencies</li>
          </ul>
        </div>
        <div className="legal">
          <span>© {new Date().getFullYear()} {company.legalName}. Veteran-owned · VOSB certified.</span>
          <span>Licensed &amp; bonded in Washington · Fully insured</span>
        </div>
      </div>
    </footer>
  );
}
