"use client";

import { useState } from "react";
import { company } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export default function QuoteForm({ services }: { services: string[] }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("sent");
        setMessage("Thanks. Your request is in, and we'll get back to you within one business day.");
        form.reset();
        return;
      }
      const body = (await res.json().catch(() => ({}))) as { error?: string; fallback?: boolean };
      if (body.fallback) {
        // Email delivery isn't configured on the server yet: hand the request to the visitor's email app.
        const text = [
          `Name: ${data.name}`, `Email: ${data.email}`, `Phone: ${data.phone || "-"}`,
          `Company / property: ${data.company || "-"}`, `Service: ${data.service || "-"}`, "", data.details || "",
        ].join("\n");
        window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(`Quote request: ${data.service || "Security"}`)}&body=${encodeURIComponent(text)}`;
        setStatus("idle");
        setMessage(`Your email app should open with your request filled in. If it doesn't, call ${company.phone}.`);
        return;
      }
      throw new Error(body.error || "Request failed");
    } catch {
      setStatus("error");
      setMessage(`We couldn't send your request. Please call ${company.phone} or email ${company.email}.`);
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div>
        <h3>Request a free quote</h3>
        <p className="note">We reply within one business day.</p>
      </div>
      <div className="row2">
        <div className="field">
          <label htmlFor="name">Full name *</label>
          <input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>
      <div className="row2">
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="company">Company / property</label>
          <input id="company" name="company" autoComplete="organization" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="service">Service</label>
        <select id="service" name="service" defaultValue="">
          <option value="" disabled>Select a service…</option>
          {services.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="details">Tell us about your site</label>
        <textarea id="details" name="details" rows={5} placeholder="Property type, address or area, hours of coverage you need…" />
      </div>
      {/* Spam trap: hidden from people, filled in by bots. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px" }} />
      <div className="btn-row" style={{ alignItems: "center" }}>
        <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send request"}
        </button>
      </div>
      {message && <p role="status" className={status === "error" ? "note" : "note"} style={status === "error" ? { color: "#b3261e" } : undefined}>{message}</p>}
    </form>
  );
}
