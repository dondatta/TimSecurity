import Image from "next/image";

export function Fleet() {
  return (
    <div className="fleet">
      <figure className="unit" style={{ margin: 0 }}>
        <Image src="/images/robot-outdoor.jpg" alt="Autonomous outdoor security patrol robot in a parking lot" width={773} height={580} sizes="(max-width: 860px) 100vw, 33vw" />
        <div className="txt">
          <h3>Outdoor patrol robots</h3>
          <p>Perimeters, garages, lots and grounds, around the clock, with 360° day, night and thermal video.</p>
        </div>
      </figure>
      <figure className="unit" style={{ margin: 0 }}>
        <Image src="/images/drone.jpg" alt="Camera drone in flight" width={960} height={720} sizes="(max-width: 860px) 100vw, 33vw" />
        <div className="txt">
          <h3>Aerial drones</h3>
          <p>Fast sweeps and incident overwatch on construction sites and large properties.</p>
        </div>
      </figure>
      <figure className="unit" style={{ margin: 0 }}>
        <IndoorRobot />
        <div className="txt">
          <h3>Indoor robots</h3>
          <p>After-hours corridors, garages and access points, with smoke, water and intrusion alerts.</p>
        </div>
      </figure>
    </div>
  );
}

function IndoorRobot() {
  return (
    <svg className="ph" viewBox="0 0 160 120" role="img" aria-label="Indoor security robot">
      <rect width="160" height="120" fill="#464646" />
      <path d="M0 96 H160" stroke="#2e2e2e" strokeWidth="2" />
      <ellipse cx="80" cy="104" rx="22" ry="4" fill="#2e2e2e" />
      <rect x="64" y="22" width="32" height="80" rx="10" fill="#f5f4f2" />
      <rect x="68" y="30" width="24" height="15" rx="3" fill="#2e2e2e" />
      <circle cx="80" cy="37.5" r="3" fill="#f08a44" />
      <rect x="72" y="16" width="16" height="7" rx="3" fill="#f08a44" />
      <rect x="64" y="88" width="32" height="5" fill="#f08a44" />
    </svg>
  );
}

export function CostCompare() {
  return (
    <div className="cost">
      <div className="cost-row">
        <div className="cost-head"><span>Traditional guard post</span><strong>$35–$85 / hr</strong></div>
        <div className="track"><div className="range guard" /></div>
      </div>
      <div className="cost-row">
        <div className="cost-head"><span>Robot patrol</span><strong>$7–$15 / hr</strong></div>
        <div className="track"><div className="range robot" /></div>
      </div>
      <div className="axis"><span>$0</span><span>$30</span><span>$60</span><span>$90</span></div>
      <p className="fine">Published 2026 industry ranges for US guard services and leased security robots, shown for comparison. Not a quote.</p>
    </div>
  );
}
