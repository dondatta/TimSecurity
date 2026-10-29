import Link from "next/link";
import { company } from "@/lib/site";

export default function CtaBand({
  title = "Ready to secure your site?",
  text = "Tell us about your property and we'll put together a coverage plan that fits your needs and budget.",
}: { title?: string; text?: string }) {
  return (
    <section className="cta-band on-char">
      <div className="stripe" />
      <div className="wrap">
        <div className="copy">
          <h2>{title}</h2>
          <p className="muted">{text}</p>
        </div>
        <div className="btn-row">
          <Link href="/contact" className="btn btn-primary">Get a Free Quote</Link>
          <a href={company.phoneHref} className="btn btn-ghost">{company.phone}</a>
        </div>
      </div>
    </section>
  );
}
