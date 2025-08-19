'use client'
import { 
  CheckCircleIcon, 
  ClockIcon, 
  XCircleIcon, 
  TruckIcon,
  ArrowPathIcon,
  EyeIcon,
  EyeSlashIcon
} from '@heroicons/react/20/solid'

// Order statuses
type OrderStatus = 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled' | 'refunded'

// Product statuses
type ProductStatus = 'active' | 'inactive' | 'out_of_stock' | 'draft'

// Combined type
type Status = OrderStatus | ProductStatus

const statusConfig: Record<Status, { icon: React.ReactNode; color: string; label: string }> = {
  // Order statuses
  pending: { icon: <ClockIcon className="h-4 w-4" />, color: 'bg-yellow-100 text-yellow-800', label: 'Pending' },
  paid: { icon: <CheckCircleIcon className="h-4 w-4" />, color: 'bg-blue-100 text-blue-800', label: 'Paid' },
  shipped: { icon: <TruckIcon className="h-4 w-4" />, color: 'bg-purple-100 text-purple-800', label: 'Shipped' },
  delivered: { icon: <CheckCircleIcon className="h-4 w-4" />, color: 'bg-green-100 text-green-800', label: 'Delivered' },
  cancelled: { icon: <XCircleIcon className="h-4 w-4" />, color: 'bg-red-100 text-red-800', label: 'Cancelled' },
  refunded: { icon: <ArrowPathIcon className="h-4 w-4" />, color: 'bg-gray-100 text-gray-800', label: 'Refunded' },
  
  // Product statuses
  active: { icon: <EyeIcon className="h-4 w-4" />, color: 'bg-green-100 text-green-800', label: 'Active' },
  inactive: { icon: <EyeSlashIcon className="h-4 w-4" />, color: 'bg-gray-100 text-gray-800', label: 'Inactive' },
  out_of_stock: { icon: <XCircleIcon className="h-4 w-4" />, color: 'bg-red-100 text-red-800', label: 'Out of Stock' },
  draft: { icon: <ClockIcon className="h-4 w-4" />, color: 'bg-yellow-100 text-yellow-800', label: 'Draft' }
}

export function StatusBadge({ status }: { status: Status }) {
  const config = statusConfig[status]
  
  return (
    <span className={`inline-flex items-center gap-x-1.5 px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
      {config.icon}
      {config.label}
    </span>
  )
}

// Export types for use in other components
export type { Status, OrderStatus, ProductStatus }