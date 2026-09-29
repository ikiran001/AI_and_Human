import { images } from '../data/images';
import { stats } from '../data/content';

export default function Hero() {
  return (
    <header className="hero" id="hero">
      <div className="hero-bg" style={{ backgroundImage: `url('${images.hero}')` }} />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-badge">The truth about artificial intelligence</p>
        <h1>AI Will <span className="strike">Never</span> Take Over <span className="highlight">Humanity</span></h1>
        <p className="hero-sub">
          Machines compute. Humans create, feel, dream, and lead.
          AI is our most powerful tool — not our replacement.
        </p>
        <div className="hero-cta">
          <a href="#why" className="btn btn-primary">Discover Why</a>
          <a href="#future" className="btn btn-outline">See the Future</a>
        </div>
        <div className="hero-stats">
          {stats.map((s) => (
            <div key={s.label} className="hero-stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
