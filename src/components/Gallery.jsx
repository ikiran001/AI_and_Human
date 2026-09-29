import Reveal from './Reveal';
import SafeImage from './SafeImage';
import { gallery } from '../data/content';

export default function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <Reveal className="section-header">
          <span className="label">Visual Story</span>
          <h2>Humans &amp; Technology Together</h2>
        </Reveal>
        <div className="gallery-grid">
          {gallery.map((item) => (
            <Reveal key={item.label} className={`gallery-item${item.wide ? ' wide' : ''}${item.tall ? ' tall' : ''}`}>
              <SafeImage src={item.src} alt={item.label} />
              <span>{item.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
