export interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlighted: boolean
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'Perfect for side projects and exploration.',
    features: [
      '1,000 executions/month',
      '5 active workflows',
      'Community support',
      'Basic analytics',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    description: 'For teams shipping production workflows.',
    features: [
      '100,000 executions/month',
      'Unlimited workflows',
      'Priority support',
      'Advanced analytics',
      'Custom integrations',
      'Team collaboration',
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations with advanced needs.',
    features: [
      'Unlimited executions',
      'Dedicated infrastructure',
      '24/7 premium support',
      'SLA guarantee',
      'SSO & RBAC',
      'On-premise option',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]
