import Reveal from './Reveal';
import SafeImage from './SafeImage';
import { futurePoints } from '../data/content';

export default function Future() {
  return (
    <section className="section future" id="future">
      <div className="container">
        <Reveal className="section-header light">
          <span className="label">Tomorrow</span>
          <h2>The Future Is Human + AI</h2>
          <p>Not competition. Collaboration. The best outcomes happen when humans and AI work together.</p>
        </Reveal>
        <div className="future-grid">
          {futurePoints.map((f) => (
            <Reveal key={f.title}>
              <article className="future-card">
                <SafeImage src={f.image} alt={f.title} />
                <div className="future-body">
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <blockquote className="quote">
            <p>"The danger isn't that AI becomes too human. It's that we forget what makes us human in the first place."</p>
            <cite>— A reminder for the age of artificial intelligence</cite>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
