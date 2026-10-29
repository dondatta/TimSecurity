import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import { company, services } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.intro } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="eyebrow">UA Securities · Seattle, WA</p>
          <h1>{s.title}</h1>
          <p className="lede">{s.tagline}</p>
        </div>
      </section>

      <section className="section">
        <div className={s.image ? "wrap split" : "wrap"}>
          <div className="copy" style={{ maxWidth: 680 }}>
            <p className="lede">{s.intro}</p>
            <h3 style={{ marginTop: 12 }}>What we do</h3>
            <ul className="checks">
              {s.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
            {s.slug === "hotel-hospitality-security" && (
              <p className="muted">
                We currently provide overnight security tours and daily reporting for Coast Hotels Seattle (since August 2022),
                and have served the Paramount Hotel Seattle (since June 2022) and the Thompson Hotel Seattle (since July 2021).
              </p>
            )}
            <p className="fine">{company.credentials.join(" · ")}</p>
          </div>
          {s.image && (
            <Image src={s.image.src} alt={s.image.alt} width={1200} height={800} sizes="(max-width: 860px) 100vw, 50vw" style={{ aspectRatio: "4 / 3" }} />
          )}
        </div>
      </section>

      <section className="section on-deep" style={{ paddingBlock: 48 }}>
        <div className="wrap split">
          <div className="copy">
            <p className="eyebrow">Add-on</p>
            <h3>Robot-assisted overnight patrol</h3>
            <p className="muted">Cover the long overnight rounds with an autonomous patrol robot, backed by our officers.</p>
          </div>
          <div className="btn-row"><Link href="/robotics" className="btn btn-ghost">How it works</Link></div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow" style={{ marginBottom: 18 }}>Other services</p>
          <div className="svc-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {others.map((o) => (
              <Link key={o.slug} href={`/${o.slug}`} className="svc">
                <h3>{o.short}</h3>
                <p>{o.tagline}</p>
                <span className="more">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
