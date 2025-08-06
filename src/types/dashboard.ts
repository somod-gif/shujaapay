export interface MetricCardProps {
  title: string
  value: string
  change: string
  isPositive: boolean | null
  currency?: 'NGN' | 'GHS' | 'KES'
}

export interface ActivityItem {
  id: number
  type: 'order' | 'payment' | 'dispute' | 'pod'
  title: string
  time: string
  amount: string
  location?: string
}

export type LogisticsPartner = 'KAIHMA' | 'Sendy' | 'GIG' | 'Custom'