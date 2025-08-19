'use client'
import { useState } from 'react'
import { 
  ArrowTrendingUpIcon, 
  ArrowTrendingDownIcon,
  ShoppingBagIcon,
  ArrowPathIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'
import { SalesChart } from './SalesChart'
import { FilterBar } from '../components/FilterBar'

// Mock data
const analyticsData = {
  overview: {
    totalSales: '₦1,245,300',
    totalOrders: 148,
    averageOrderValue: '₦8,415',
    refundRate: '4.2%'
  },
  trends: {
    salesGrowth: '+12.5%',
    orderGrowth: '+8.3%',
    customerGrowth: '+15.2%'
  },
  topProducts: [
    { name: 'Wireless Headphones', sales: '₦345,800', units: 42, growth: '+18%' },
    { name: 'Smart Watch', sales: '₦289,500', units: 35, growth: '+12%' },
    { name: 'Phone Case', sales: '₦156,200', units: 92, growth: '+5%' },
    { name: 'Power Bank', sales: '₦128,400', units: 48, growth: '+22%' },
    { name: 'Bluetooth Speaker', sales: '₦98,700', units: 27, growth: '+8%' }
  ],
  refunds: [
    { orderId: 'ORD-045', product: 'Wireless Headphones', amount: '₦25,000', reason: 'Defective', date: '2024-01-15' },
    { orderId: 'ORD-038', product: 'Smart Watch', amount: '₦42,000', reason: 'Wrong size', date: '2024-01-14' },
    { orderId: 'ORD-031', product: 'Phone Case', amount: '₦8,500', reason: 'Changed mind', date: '2024-01-12' }
  ]
}

const timePeriods = [
  { value: '7d', label: 'Last 7 days' },
  { value: '30d', label: 'Last 30 days' },
  { value: '90d', label: 'Last 90 days' },
  { value: 'ytd', label: 'Year to date' }
]

export default function AnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('30d')
  const [dateRange, setDateRange] = useState<{ start: Date; end: Date }>({
    start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    end: new Date()
  })

  const handleDateRangeChange = (start: Date, end: Date) => {
    setDateRange({ start, end })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Sales Analytics</h1>
          <p className="text-gray-600">Track your store performance and growth</p>
        </div>
        
        {/* Time Period Selector */}
        <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
          {timePeriods.map((period) => (
            <button
              key={period.value}
              onClick={() => setSelectedPeriod(period.value)}
              className={`px-3 py-1 text-sm rounded-md ${
                selectedPeriod === period.value
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {period.label}
            </button>
          ))}
        </div>
      </div>

      <FilterBar
        onSearch={(query) => console.log('Search:', query)}
        onStatusFilter={(status) => console.log('Status:', status)}
        onDateRange={handleDateRangeChange}
      />

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Sales */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Sales</p>
              <p className="text-2xl font-bold mt-1 text-gray-800">{analyticsData.overview.totalSales}</p>
              <div className="flex items-center mt-1">
                <ArrowTrendingUpIcon className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-xs text-green-600">{analyticsData.trends.salesGrowth}</span>
              </div>
            </div>
            <div className="p-3 rounded-full bg-blue-100 text-blue-800">
              <CurrencyDollarIcon className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Total Orders */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Orders</p>
              <p className="text-2xl font-bold mt-1 text-gray-800">{analyticsData.overview.totalOrders}</p>
              <div className="flex items-center mt-1">
                <ArrowTrendingUpIcon className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-xs text-green-600">{analyticsData.trends.orderGrowth}</span>
              </div>
            </div>
            <div className="p-3 rounded-full bg-green-100 text-green-800">
              <ShoppingBagIcon className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Average Order Value */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Avg. Order Value</p>
              <p className="text-2xl font-bold mt-1 text-gray-800">{analyticsData.overview.averageOrderValue}</p>
              <div className="flex items-center mt-1">
                <ArrowTrendingUpIcon className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-xs text-green-600">+3.2%</span>
              </div>
            </div>
            <div className="p-3 rounded-full bg-purple-100 text-purple-800">
              <CurrencyDollarIcon className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Refund Rate */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Refund Rate</p>
              <p className="text-2xl font-bold mt-1 text-gray-800">{analyticsData.overview.refundRate}</p>
              <div className="flex items-center mt-1">
                <ArrowTrendingDownIcon className="h-4 w-4 text-red-500 mr-1" />
                <span className="text-xs text-red-600">-2.1%</span>
              </div>
            </div>
            <div className="p-3 rounded-full bg-red-100 text-red-800">
              <ArrowPathIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Sales Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <SalesChart period={selectedPeriod} dateRange={dateRange} />
      </div>

      {/* Top Products & Refunds Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Selling Products */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Top Selling Products</h3>
          <div className="space-y-4">
            {analyticsData.topProducts.map((product, index) => (
              <div key={product.name} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-500 w-6">{index + 1}.</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{product.name}</p>
                    <p className="text-xs text-gray-500">{product.units} units sold</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{product.sales}</p>
                  <div className="flex items-center justify-end">
                    <ArrowTrendingUpIcon className="h-3 w-3 text-green-500 mr-1" />
                    <span className="text-xs text-green-600">{product.growth}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Refunds */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Refunds</h3>
          <div className="space-y-4">
            {analyticsData.refunds.map((refund) => (
              <div key={refund.orderId} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{refund.product}</p>
                    <p className="text-xs text-gray-500">Order: {refund.orderId}</p>
                    <p className="text-xs text-gray-500">Reason: {refund.reason}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-red-600">-{refund.amount}</p>
                    <p className="text-xs text-gray-500">{refund.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Conversion Rate */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Conversion Rate</h4>
          <p className="text-2xl font-bold text-gray-800">3.8%</p>
          <div className="flex items-center mt-1">
            <ArrowTrendingUpIcon className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-xs text-green-600">+0.4% from last period</span>
          </div>
        </div>

        {/* Customer Acquisition */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h4 className="text-sm font-medium text-gray-900 mb-2">New Customers</h4>
          <p className="text-2xl font-bold text-gray-800">89</p>
          <div className="flex items-center mt-1">
            <ArrowTrendingUpIcon className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-xs text-green-600">{analyticsData.trends.customerGrowth}</span>
          </div>
        </div>

        {/* Repeat Customer Rate */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Repeat Customers</h4>
          <p className="text-2xl font-bold text-gray-800">42%</p>
          <div className="flex items-center mt-1">
            <ArrowTrendingUpIcon className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-xs text-green-600">+5% from last period</span>
          </div>
        </div>
      </div>
    </div>
  )
}