import MetricsGrid from './components/MetricsGrid'
import { ActivityFeed } from './components/ActivityFeed'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <div className="lg:hidden text-sm text-gray-500">Today, {new Date().toLocaleDateString()}</div>
      </div>
      
      <div className="mb-6">
        <div className="bg-blue-800 text-white p-4 sm:p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Welcome back to KAIHMA</h2>
          <p className="text-blue-100 text-sm sm:text-base">
            Your commerce operating system for Africa. Track your sales, manage orders, and grow your business.
          </p>
        </div>
      </div>

      <MetricsGrid />
      <ActivityFeed items={[]} />
    </div>
  )
}