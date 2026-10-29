import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Security Services",
  description: "Hotel, condo and apartment, parking and construction site security across the Seattle metro, plus robot-assisted patrol.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="eyebrow">What we do</p>
          <h1>Security services built for Seattle</h1>
          <p className="lede">
            From hotel lobbies to active construction sites, licensed and professional security tailored to your property and its risks.
          </p>
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.slug} className={i % 2 ? "section on-deep" : "section"} style={{ paddingBlock: 64 }}>
          <div className="wrap split" style={{ alignItems: "start" }}>
            <div className="copy">
              <p className="eyebrow">{String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}</p>
              <h2>{s.short}</h2>
              <p className={i % 2 ? "lede muted" : "lede"}>{s.tagline}</p>
              <div className="btn-row">
                <Link href={`/${s.slug}`} className={i % 2 ? "btn btn-ghost" : "btn btn-primary"}>Details</Link>
              </div>
            </div>
            <div className="copy">
              <p className={i % 2 ? "muted" : undefined}>{s.intro}</p>
              <ul className="checks">
                {s.points.slice(0, 4).map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <CtaBand title="Need security for your property?" />
    </>
  );
}
