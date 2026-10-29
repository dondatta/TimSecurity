import Link from "next/link";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import { Fleet } from "@/components/Robotics";
import { company, services } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-copy">
            <p className="eyebrow">Seattle, WA · Veteran-owned · Now with robot patrol</p>
            <h1>Protecting <em className="hl">what you build</em></h1>
            <p className="lede">
              Uniformed, service-minded officers for Seattle hotels, residences, parking facilities and construction
              sites, now backed by autonomous patrol robots that cover every overnight round.
            </p>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-primary">Get a Free Quote</Link>
              <Link href="/robotics" className="btn btn-ghost">See robot patrol</Link>
            </div>
          </div>
          <figure className="hero-media" style={{ margin: 0 }}>
            <Image
              src="/images/patrol-jeep.jpg"
              alt="The white UA Securities Jeep Wrangler patrol vehicle at night"
              width={1380}
              height={680}
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <figcaption>Watch for the white Jeep. Our marked patrol vehicle is on Seattle streets now.</figcaption>
            <Link href="/robotics" className="robot-card">
              <Image src="/images/robot-outdoor.jpg" alt="" width={773} height={580} sizes="92px" />
              <div>
                <span>New</span>
                <b>Robot-assisted patrol</b>
              </div>
            </Link>
          </figure>
        </div>
      </section>

      <div className="creds">
        <div className="wrap">
          <ul>
            <li>Veteran-owned · VOSB</li>
            <li>Licensed &amp; bonded</li>
            <li>Fully insured</li>
            <li>24/7 coverage</li>
            <li>Seattle since {company.founded}</li>
          </ul>
        </div>
      </div>

      <section className="section on-char">
        <div className="wrap stack" style={{ gap: 40 }}>
          <div className="split">
            <div className="copy">
              <p className="eyebrow">New · Robot-assisted patrol</p>
              <h2>24/7 patrol coverage <em className="hl">without 24/7 payroll</em></h2>
            </div>
            <div className="copy">
              <p className="lede muted">
                We&apos;re pairing our licensed officers with autonomous patrol robots and drones. The robots take the long,
                repetitive overnight rounds and record everything. Our team verifies every alert and responds in person.
              </p>
              <div className="btn-row">
                <Link href="/robotics" className="btn btn-primary">See how it works</Link>
              </div>
            </div>
          </div>
          <Fleet />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">What we do</p>
            <h2>Specialists for the sites that need it most</h2>
            <p className="lede muted">
              We don&apos;t send generalists. Every officer is trained, vetted and briefed for the specific risks of your property.
            </p>
          </div>
          <div className="svc-grid">
            {services.map((s, i) => (
              <Link key={s.slug} href={`/${s.slug}`} className="svc">
                <span className="num">{String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}</span>
                <h3>{s.short}</h3>
                <p>{s.tagline}</p>
                <span className="more">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <section className="section">
        <div className="wrap split">
          <div className="copy">
            <p className="eyebrow">Why UA Securities</p>
            <h2>The owner still works patrol</h2>
            <p className="lede muted">
              {company.owner}, a veteran and our founder, still works shifts himself and personally reviews every daily
              activity report before it reaches the client. The standard set at the top is the standard on every tour, every night.
            </p>
            <ul className="checks">
              <li>Specialized training for each industry we protect</li>
              <li>Rapid incident response and de-escalation</li>
              <li>Detailed daily reporting and documentation</li>
              <li>Flexible scheduling and coverage plans</li>
            </ul>
          </div>
          <div className="stack">
            <p className="eyebrow">Trusted on Seattle properties</p>
            <div className="clients" style={{ gridTemplateColumns: "1fr" }}>
              {company.clients.map((c) => (
                <div key={c.name} className="client">
                  <b>{c.name}</b>
                  <span>{c.current ? "Overnight tours & daily reporting · since" : "Served since"} {c.since}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
