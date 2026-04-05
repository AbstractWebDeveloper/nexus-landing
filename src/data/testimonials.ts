export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    quote: "Nexus reduced our deployment pipeline from 45 minutes to under 3. It's not just automation — it's a competitive advantage.",
    name: 'Sarah Chen',
    role: 'VP of Engineering',
    company: 'ScaleAI',
    avatar: 'SC',
  },
  {
    quote: "We replaced 12 different tools with Nexus. Our team saves 20+ hours per week on manual processes.",
    name: 'Marcus Rodriguez',
    role: 'CTO',
    company: 'FlowStack',
    avatar: 'MR',
  },
  {
    quote: "The AI-powered suggestions alone paid for the entire platform. It found optimizations we'd never have spotted.",
    name: 'Emily Zhang',
    role: 'Lead DevOps',
    company: 'Quantum Labs',
    avatar: 'EZ',
  },
  {
    quote: "Enterprise-grade security with startup-level speed. Nexus is exactly what we needed to scale our operations.",
    name: 'James Park',
    role: 'Head of Platform',
    company: 'NovaTech',
    avatar: 'JP',
  },
  {
    quote: "Best developer experience I've seen in an automation tool. The API is clean, docs are solid, and support is incredible.",
    name: 'Aria Patel',
    role: 'Senior SRE',
    company: 'DataBridge',
    avatar: 'AP',
  },
  {
    quote: "From proof of concept to production in 2 days. Nexus made our integration project feel effortless.",
    name: 'Tom Nakamura',
    role: 'Engineering Manager',
    company: 'SyncWave',
    avatar: 'TN',
  },
]
