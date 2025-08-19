'use client'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

export function FilterBar({
  onSearch,
  onStatusFilter,
  onDateRange
}: {
  onSearch: (query: string) => void
  onStatusFilter: (status: string) => void
  onDateRange: (start: Date, end: Date) => void
}) {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="border-b border-gray-200 pb-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search orders/products..."
            className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 sm:text-sm"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              onSearch(e.target.value)
            }}
          />
        </div>

        {/* Status Dropdown */}
        <select
          onChange={(e) => onStatusFilter(e.target.value)}
          className="rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-500 sm:text-sm"
        >
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="paid">Paid</option>
          <option value="shipped">Shipped</option>
        </select>

        {/* Date Picker (Simplified) */}
        <input
          type="date"
          onChange={(e) => onDateRange(new Date(e.target.value), new Date())}
          className="rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-500 sm:text-sm"
        />
      </div>
    </div>
  )
}