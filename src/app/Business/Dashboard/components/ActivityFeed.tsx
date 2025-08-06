import { 
  ClockIcon, 
  CheckCircleIcon, 
  ExclamationTriangleIcon,
  TruckIcon 
} from '@heroicons/react/20/solid'
import type { ActivityItem } from '@/types/dashboard'

export function ActivityFeed({ items }: { items: ActivityItem[] }) {
  const getIcon = (type: ActivityItem['type']) => {
    switch (type) {
      case 'order':
        return <ClockIcon className="h-5 w-5 text-blue-600" />
      case 'payment':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />
      case 'dispute':
        return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />
      case 'pod':
        return <TruckIcon className="h-5 w-5 text-purple-500" />
      default:
        return null
    }
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Recent Activity</h2>
      <ul className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id} className="py-3">
            <div className="flex space-x-3">
              <div className="flex-shrink-0 pt-0.5">
                {getIcon(item.type)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {item.title}
                </p>
                {item.location && (
                  <p className="text-xs text-gray-500 mt-0.5">
                    <span className="font-medium">Location:</span> {item.location}
                  </p>
                )}
                <p className="text-xs text-gray-500 mt-0.5">
                  <time dateTime={item.time}>{item.time}</time>
                </p>
              </div>
              <div className="flex-shrink-0 self-center">
                <p className="text-sm font-medium text-blue-800">
                  {item.amount}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-3 text-center">
        <button className="text-sm font-medium text-blue-800 hover:text-blue-700">
          View all activity →
        </button>
      </div>
    </div>
  )
}