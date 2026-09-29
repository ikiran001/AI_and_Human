import Reveal from './Reveal';
import SafeImage from './SafeImage';
import { whyHumans } from '../data/content';

export default function WhySection() {
  return (
    <section className="section why" id="why">
      <div className="container">
        <Reveal className="section-header">
          <span className="label">The Evidence</span>
          <h2>Why AI Cannot Replace Humans</h2>
          <p>Three fundamental truths that no amount of computing power can change.</p>
        </Reveal>
        <div className="why-grid">
          {whyHumans.map((item, i) => (
            <Reveal key={item.title}>
              <article className={`why-card${i === 1 ? ' featured' : ''}`}>
                <div className="why-img">
                  <SafeImage src={item.image} alt={item.title} />
                </div>
                <div className="why-body">
                  <div className="why-stat">
                    <strong>{item.stat}</strong>
                    <span>{item.statLabel}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
