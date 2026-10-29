import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "UA Securities was founded in Seattle in 2021 by Timothy Fleming, a veteran. Veteran-owned, VOSB certified, licensed and bonded.",
};

const creds = [
  ["Licensed & bonded", "Fully licensed in the state of Washington and bonded for your protection."],
  ["Fully insured", "Comprehensive liability coverage on every engagement."],
  ["Background checked", "Every officer passes a thorough background check before deployment."],
  ["Trained & certified", "State-required training plus ongoing professional development."],
  ["Seattle-based", "A local company that knows the neighborhoods it protects."],
  ["10+ years combined", "Over a decade of security experience across our owner and team."],
];

const values = [
  ["Reliability", "We show up. Every shift, every site, on time."],
  ["Accountability", "Every incident is documented. Every officer is responsible."],
  ["Professionalism", "Our officers represent your property, and we hold them to that."],
  ["Communication", "You always know what's happening on your site."],
];

export default function AboutPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="eyebrow">Our story</p>
          <h1>Built on the ground. Trusted on the job.</h1>
          <p className="lede">
            UA Securities was founded in Seattle in {company.founded} by {company.owner}, a veteran and the company&apos;s owner and CEO.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div className="copy">
            <h2>Not run from behind a desk</h2>
          </div>
          <div className="copy">
            <p className="lede">
              Timothy still works patrol shifts himself and personally reviews every daily activity report before it goes to the
              client, so the standard set at the top is the standard on every tour, every night.
            </p>
            <p className="muted">
              That is our approach to hospitality security: greet first, enforce second. Our officers are a visible, professional
              presence who welcome guests and residents, know the property, and are ready when a situation needs handling.
            </p>
          </div>
        </div>
      </section>

      <section className="section on-char">
        <div className="wrap split" style={{ alignItems: "start" }}>
          <p className="quote">
            {company.motto}
            <span className="by">The UA Securities standard</span>
          </p>
          <div className="copy">
            <p className="eyebrow">Credentials</p>
            <ul className="checks">
              {creds.map(([t, d]) => (
                <li key={t}><span><b>{t}.</b> <span className="muted">{d}</span></span></li>
              ))}
              <li><span><b>Veteran-owned.</b> <span className="muted">VOSB certified.</span></span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">What drives us</p>
            <h2>Our core values</h2>
          </div>
          <div className="values">
            {values.map(([t, d]) => (
              <div key={t}><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Ready to work with us?" text="Let's talk about your property and put together a security plan that works." />
    </>
  );
}
