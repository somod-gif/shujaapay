'use client'
import { useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts'

// Mock sales data for different time periods
const salesData = {
  '7d': [
    { day: 'Mon', sales: 45000, orders: 12 },
    { day: 'Tue', sales: 52000, orders: 15 },
    { day: 'Wed', sales: 48000, orders: 14 },
    { day: 'Thu', sales: 61000, orders: 18 },
    { day: 'Fri', sales: 72000, orders: 22 },
    { day: 'Sat', sales: 68000, orders: 20 },
    { day: 'Sun', sales: 55000, orders: 16 }
  ],
  '30d': [
    { week: 'Week 1', sales: 285000, orders: 85 },
    { week: 'Week 2', sales: 312000, orders: 92 },
    { week: 'Week 3', sales: 298000, orders: 88 },
    { week: 'Week 4', sales: 350000, orders: 105 }
  ],
  '90d': [
    { month: 'Oct', sales: 890000, orders: 265 },
    { month: 'Nov', sales: 950000, orders: 285 },
    { month: 'Dec', sales: 1245000, orders: 375 }
  ],
  ytd: [
    { quarter: 'Q1', sales: 2450000, orders: 735 },
    { quarter: 'Q2', sales: 3120000, orders: 935 },
    { quarter: 'Q3', sales: 2850000, orders: 855 },
    { quarter: 'Q4', sales: 3680000, orders: 1105 }
  ]
}

interface SalesChartProps {
  period: string
  dateRange: { start: Date; end: Date }
}

export function SalesChart({ period, dateRange }: SalesChartProps) {
  const [chartType, setChartType] = useState<'sales' | 'orders'>('sales')

  const data = salesData[period as keyof typeof salesData] || salesData['30d']
  const xAxisKey = period === '7d' ? 'day' : period === '30d' ? 'week' : period === '90d' ? 'month' : 'quarter'

  const formatCurrency = (value: number) => {
    return `₦${value.toLocaleString()}`
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-sm">
          <p className="text-sm font-medium text-gray-900">{label}</p>
          <p className="text-sm text-blue-600">
            Sales: {formatCurrency(payload[0].value)}
          </p>
          <p className="text-sm text-green-600">
            Orders: {payload[0].payload.orders}
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Sales Performance</h3>
        
        <div className="flex gap-2">
          <button
            onClick={() => setChartType('sales')}
            className={`px-3 py-1 text-sm rounded-md ${
              chartType === 'sales'
                ? 'bg-blue-100 text-blue-800'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Sales
          </button>
          <button
            onClick={() => setChartType('orders')}
            className={`px-3 py-1 text-sm rounded-md ${
              chartType === 'orders'
                ? 'bg-green-100 text-green-800'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Orders
          </button>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey={xAxisKey} 
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={chartType === 'sales' ? formatCurrency : (value) => value}
            />
            <Tooltip content={<CustomTooltip />} />
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey={chartType === 'sales' ? 'sales' : 'orders'}
              stroke={chartType === 'sales' ? '#3b82f6' : '#10b981'}
              fill={`url(#color${chartType === 'sales' ? 'Sales' : 'Orders'})`}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Chart Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <p className="text-blue-800 font-medium">Total Sales</p>
          <p className="text-lg font-bold text-gray-900">
            {formatCurrency(data.reduce((sum, item) => sum + item.sales, 0))}
          </p>
        </div>
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <p className="text-green-800 font-medium">Total Orders</p>
          <p className="text-lg font-bold text-gray-900">
            {data.reduce((sum, item) => sum + item.orders, 0)}
          </p>
        </div>
        <div className="text-center p-3 bg-purple-50 rounded-lg">
          <p className="text-purple-800 font-medium">Avg. Order Value</p>
          <p className="text-lg font-bold text-gray-900">
            {formatCurrency(
              data.reduce((sum, item) => sum + item.sales, 0) / 
              data.reduce((sum, item) => sum + item.orders, 0)
            )}
          </p>
        </div>
      </div>
    </div>
  )
}