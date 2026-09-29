import { useState } from 'react';

export default function SafeImage({ src, alt, className, style }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`img-fallback ${className || ''}`} style={style} role="img" aria-label={alt}>
        <span>{alt}</span>
      </div>
    );
  }

  return (
    <img src={src} alt={alt} className={className} style={style} loading="lazy" decoding="async" onError={() => setError(true)} />
  );
}
