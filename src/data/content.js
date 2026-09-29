import { images } from './images';

export const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#why', label: 'Why Humans Win' },
  { href: '#qualities', label: 'Human Edge' },
  { href: '#myths', label: 'Myths vs Facts' },
  { href: '#future', label: 'The Future' },
  { href: '#gallery', label: 'Gallery' },
];

export const whyHumans = [
  {
    title: 'AI Has No Consciousness',
    text: 'AI processes patterns — it does not feel, dream, or understand meaning. Consciousness, self-awareness, and subjective experience remain uniquely human.',
    image: images.aiBrain,
    stat: '0%',
    statLabel: 'machines with true consciousness',
  },
  {
    title: 'Creativity Is Born, Not Computed',
    text: 'Great art, music, and innovation come from lived experience, emotion, and cultural context. AI can remix — humans can create something the world has never seen.',
    image: images.humanCreative,
    stat: '100%',
    statLabel: 'of Nobel Prizes won by humans',
  },
  {
    title: 'Empathy Cannot Be Simulated',
    text: 'A doctor\'s comforting touch, a teacher\'s patience, a leader\'s inspiration — these require genuine emotional intelligence that no algorithm can replicate.',
    image: images.empathy,
    stat: '85%',
    statLabel: 'of jobs need human social skills',
  },
];

export const humanQualities = [
  { icon: '🧠', title: 'Critical Thinking', desc: 'Humans question assumptions, challenge authority, and think outside the box — AI only optimizes within its training data.' },
  { icon: '❤️', title: 'Emotional Intelligence', desc: 'Reading a room, resolving conflict, building trust — these are deeply human skills that define leadership and relationships.' },
  { icon: '🎨', title: 'Original Creativity', desc: 'From the Mona Lisa to space exploration, humanity\'s greatest leaps came from imagination, not computation.' },
  { icon: '⚖️', title: 'Moral Judgment', desc: 'Ethical decisions require values, context, and accountability. AI has no moral compass — humans do.' },
  { icon: '🤝', title: 'Social Connection', desc: 'Communities, families, friendships — the fabric of society is woven by human bonds that machines cannot form.' },
  { icon: '🔮', title: 'Intuition & Wisdom', desc: 'Sometimes the right answer isn\'t in the data. Gut feeling, experience, and wisdom guide humans where algorithms fail.' },
];

export const myths = [
  { myth: 'AI will replace all jobs by 2030', fact: 'History shows technology creates more jobs than it destroys. AI will transform roles — not eliminate humanity from work.' },
  { myth: 'AI is smarter than humans', fact: 'AI excels at narrow tasks. Humans excel at general intelligence, adaptability, and learning across domains.' },
  { myth: 'Machines will become sentient', fact: 'No AI system has passed the threshold of consciousness. Sentience requires biology, experience, and subjective awareness.' },
  { myth: 'We should fear AI takeover', fact: 'AI is a tool built by humans, for humans. The real question is how we choose to use it — responsibly and ethically.' },
];

export const futurePoints = [
  { title: 'AI Assists, Humans Lead', text: 'Doctors use AI for diagnosis but deliver care with compassion. Lawyers use AI for research but argue with conviction.', image: images.collaboration },
  { title: 'Augmented Intelligence', text: 'The future isn\'t human vs. machine — it\'s human + machine. Together, we solve problems neither could alone.', image: images.meeting },
  { title: 'Humans Set the Goals', text: 'AI optimizes. Humans decide what matters — justice, beauty, love, purpose. We remain the authors of meaning.', image: images.future },
];

export const gallery = [
  { src: images.hero, label: 'Human + AI', wide: true },
  { src: images.teamwork, label: 'Teamwork' },
  { src: images.technology, label: 'Technology', tall: true },
  { src: images.workspace, label: 'Innovation' },
  { src: images.learning, label: 'Learning' },
  { src: images.coding, label: 'Building Together', wide: true },
  { src: images.robotHuman, label: 'Partnership' },
  { src: images.aiChip, label: 'AI Tools' },
];

export const stats = [
  { value: '7.5B+', label: 'Humans on Earth' },
  { value: '0', label: 'Sentient AI systems' },
  { value: '300K+', label: 'Years of human evolution' },
  { value: '∞', label: 'Human potential' },
];
