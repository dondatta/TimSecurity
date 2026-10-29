import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import { CostCompare, Fleet } from "@/components/Robotics";

export const metadata: Metadata = {
  title: "Robot-Assisted Patrol",
  description:
    "Autonomous patrol robots and drones backed by UA Securities officers: 24/7 patrol coverage in Seattle without 24/7 payroll.",
};

const caps = [
  ["360° day, night & thermal video", "Recorded continuously and searchable after any incident."],
  ["Never skips a round", "Same route, every time, with time-stamped proof."],
  ["Plate & motion detection", "Flags after-hours vehicles and people in restricted areas."],
  ["Two-way audio", "Our team can speak to anyone on site through the robot."],
  ["Discreet for guests", "A steady presence in lots and corridors that doesn't crowd the lobby."],
  ["No sick days", "Coverage holds through holidays, weather and shift gaps."],
];

export default function RoboticsPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="eyebrow">Robot-assisted patrol · Now booking pilot sites</p>
          <h1>24/7 patrol coverage <em className="hl">without 24/7 payroll</em></h1>
          <p className="lede">
            Autonomous robots take the long, repetitive overnight rounds and record everything. Our licensed officers verify
            every alert and respond in person. One contract covers the robot, monitoring, officers and upkeep.
          </p>
        </div>
      </section>

      <section className="section on-deep" style={{ paddingTop: 0 }}>
        <div className="wrap"><Fleet /></div>
      </section>

      <section className="section">
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div className="copy">
            <p className="eyebrow">What coverage costs per hour</p>
            <h2>The overnight math has changed</h2>
            <p className="muted">
              With Seattle&apos;s minimum wage at $21.30 an hour in 2026, overnight guard hours keep getting more expensive. Most
              properties keep a smaller officer team and let a robot take the overnight rounds. Your quote depends on site size,
              hours and coverage.
            </p>
          </div>
          <CostCompare />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">How an alert is handled</p>
            <h2>Robot detects. People decide.</h2>
          </div>
          <ol className="steps">
            <li><h3>Robot detects</h3><p>Motion, a person, or a vehicle where none should be.</p></li>
            <li><h3>We verify</h3><p>Our operators view the live feed and speak through the robot.</p></li>
            <li><h3>Officer responds</h3><p>We dispatch an officer or call police, and send you a report.</p></li>
          </ol>
        </div>
      </section>

      <section className="section on-char">
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div className="copy">
            <p className="eyebrow">What the robot does</p>
            <ul className="checks">
              {caps.map(([t, d]) => (
                <li key={t}><span><b>{t}.</b> <span className="muted">{d}</span></span></li>
              ))}
            </ul>
          </div>
          <div className="copy">
            <p className="eyebrow">Sample overnight patrol log</p>
            <div className="log">
              <table>
                <tbody>
                  <tr><td className="t">22:00</td><td>Patrol start · Garage P1 → P2 → Loading dock</td></tr>
                  <tr><td className="t">23:42</td><td>Round 4 complete · all doors secured</td></tr>
                  <tr><td className="t">01:17</td><td><span className="flag">ALERT</span> Person at loading dock door</td></tr>
                  <tr><td className="t">01:18</td><td>Operator voice warning issued</td></tr>
                  <tr><td className="t">01:19</td><td>Subject left area · officer notified</td></tr>
                  <tr><td className="t">06:00</td><td>Patrol end · 16 rounds · report sent</td></tr>
                </tbody>
              </table>
            </div>
            <p className="fine">Example only. Clients receive a report like this every morning.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingBlock: 32 }}>
        <div className="wrap">
          <p className="fine">
            Equipment photos: Knightscope K5 by Votpuske and DJI Mavic 3 by HKesteloo, via Wikimedia Commons (CC BY-SA 4.0).
            They show the types of equipment we deploy, not UA Securities units.
          </p>
        </div>
      </section>

      <CtaBand title="Book a free site assessment" text="We walk your property, map a patrol route, and show you what robot-assisted coverage would cost next to your current guard hours." />
    </>
  );
}
