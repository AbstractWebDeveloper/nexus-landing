export interface Step {
  number: string
  title: string
  description: string
}

export const steps: Step[] = [
  {
    number: '01',
    title: 'Connect Your Tools',
    description: 'Link your existing services in seconds. We support 200+ integrations out of the box.',
  },
  {
    number: '02',
    title: 'Build Your Workflow',
    description: 'Use our visual editor or code-first approach to define your automation logic.',
  },
  {
    number: '03',
    title: 'Deploy & Monitor',
    description: 'Go live with one click. Track performance in real-time and optimize continuously.',
  },
]
