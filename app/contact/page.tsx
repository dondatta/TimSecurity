import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import { company, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Free Quote",
  description: "Request a free security quote from UA Securities. Serving Seattle and King, Snohomish and Pierce counties. Call (206) 605-8091.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="eyebrow">Get in touch</p>
          <h1>Let&apos;s talk about your site</h1>
          <p className="lede">
            Tell us about your property and we&apos;ll put together a security plan that fits your needs and budget. No obligation,
            just a straight conversation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-grid">
          <QuoteForm services={[...services.map((s) => s.short), "Robot-Assisted Patrol", "Other"]} />
          <dl className="direct">
            <div>
              <dt>Phone</dt>
              <dd><a className="big" href={company.phoneHref}>{company.phone}</a></dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd><a href={`mailto:${company.email}`}>{company.email}</a></dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>Available 24/7 for emergencies. Office hours Mon–Fri, Pacific time.</dd>
            </div>
            <div>
              <dt>Service area</dt>
              <dd>
                King, Snohomish and Pierce counties.
                <div className="towns">
                  {company.serviceArea.map((t) => <span key={t}>{t}</span>)}
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
