import Reveal from './Reveal';
import { myths } from '../data/content';

export default function Myths() {
  return (
    <section className="section myths" id="myths">
      <div className="container">
        <Reveal className="section-header">
          <span className="label">Reality Check</span>
          <h2>Myths vs. Facts</h2>
          <p>Separating science fiction fear from scientific reality.</p>
        </Reveal>
        <div className="myths-list">
          {myths.map((m) => (
            <Reveal key={m.myth}>
              <div className="myth-row">
                <div className="myth-side myth-bad">
                  <span className="myth-tag">Myth</span>
                  <p>{m.myth}</p>
                </div>
                <div className="myth-arrow">→</div>
                <div className="myth-side myth-good">
                  <span className="myth-tag">Fact</span>
                  <p>{m.fact}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
