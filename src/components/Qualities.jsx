import Reveal from './Reveal';
import { humanQualities } from '../data/content';

export default function Qualities() {
  return (
    <section className="section qualities" id="qualities">
      <div className="container">
        <Reveal className="section-header light">
          <span className="label">Human Edge</span>
          <h2>What Makes Us Irreplaceable</h2>
          <p>Qualities that define humanity — and that no algorithm can replicate.</p>
        </Reveal>
        <div className="qualities-grid">
          {humanQualities.map((q) => (
            <Reveal key={q.title}>
              <div className="quality-card">
                <span className="quality-icon">{q.icon}</span>
                <h3>{q.title}</h3>
                <p>{q.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
