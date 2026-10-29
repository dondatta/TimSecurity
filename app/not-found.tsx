import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-head">
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1>Off the patrol route</h1>
        <p className="lede">That page doesn&apos;t exist.</p>
        <div className="btn-row"><Link href="/" className="btn btn-primary">Back to home</Link></div>
      </div>
    </section>
  );
}
