import { useReveal } from '../hooks/useReveal';

export default function Reveal({ children, className = '' }) {
  const { ref, className: rc } = useReveal();
  return <div ref={ref} className={`${rc} ${className}`.trim()}>{children}</div>;
}
