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
        <Image src="/images/robot-indoor.jpg" alt="Indoor security robot patrolling a station concourse" width={800} height={600} sizes="(max-width: 860px) 100vw, 33vw" />
        <div className="txt">
          <h3>Indoor robots</h3>
          <p>After-hours corridors, garages and access points, with smoke, water and intrusion alerts.</p>
        </div>
      </figure>
    </div>
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
