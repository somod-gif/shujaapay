import { CreditCard, Package, Truck, DollarSign, ShoppingCart } from 'lucide-react'

const metrics = [
  {
    title: 'Total Sales',
    value: '₦245,300',
    change: '+12% from last month',
    icon: DollarSign,
  },
  {
    title: 'Orders',
    value: '48',
    change: '+4 from last week',
    icon: ShoppingCart,
  },
  {
    title: 'Products',
    value: '12',
    change: '+2 new products',
    icon: Package,
  },
  {
    title: 'Pending Deliveries',
    value: '5',
    change: '2 to be shipped today',
    icon: Truck,
  },
]

export default function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">{metric.title}</p>
              <p className="text-2xl font-bold mt-1 text-gray-800">{metric.value}</p>
              <p className="text-xs text-gray-500 mt-1">{metric.change}</p>
            </div>
            <div className="p-3 rounded-full bg-blue-100 text-blue-800">
              <metric.icon className="w-5 h-5" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}