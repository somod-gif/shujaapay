'use client'

interface Order {
  id: string
  status: string
  trackingNumber?: string
}

interface OrderAction {
  label: string
  action: () => void
  variant?: 'primary' | 'secondary'
}

interface OrderActionsProps {
  order: Order
}

export function OrderActions({ order }: OrderActionsProps) {
  const actions: Record<string, OrderAction[]> = {
    paid: [
      { label: 'Mark as Shipped', action: () => console.log('Mark shipped', order.id), variant: 'primary' },
      { label: 'Cancel Order', action: () => console.log('Cancel', order.id), variant: 'secondary' }
    ],
    shipped: [
      { label: 'Mark as Delivered', action: () => console.log('Mark delivered', order.id), variant: 'primary' },
      { label: 'Update Tracking', action: () => console.log('Update tracking', order.id), variant: 'primary' }
    ],
    delivered: [
      { label: 'Request Review', action: () => console.log('Request review', order.id), variant: 'primary' },
      { label: 'Contact Customer', action: () => console.log('Contact customer', order.id), variant: 'primary' }
    ]
  }

  const currentActions = actions[order.status] || []

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Order Actions</h3>
      <div className="flex flex-wrap gap-3">
        {currentActions.map((action, index) => (
          <button
            key={index}
            onClick={action.action}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              action.variant === 'secondary'
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  )
}