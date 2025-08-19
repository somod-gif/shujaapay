'use client'
import { useState } from 'react'
import { PlusIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { StatusBadge, ProductStatus } from '../components/StatusBadge'
import { FilterBar } from '../components/FilterBar'
import { BulkImporter } from './components/BulkImporter'
import { InventoryAlert } from './components/InventoryAlert'
import Link from 'next/link'

// Mock data
const products = [
  {
    id: 'PROD-001',
    name: 'Wireless Headphones',
    price: '₦25,000',
    stock: 15,
    status: 'active' as ProductStatus,
    category: 'Electronics',
    sku: 'WH-2024-001'
  },
  {
    id: 'PROD-002',
    name: 'Premium Phone Case',
    price: '₦8,500',
    stock: 3,
    status: 'active' as ProductStatus,
    category: 'Accessories',
    sku: 'PC-2024-002'
  },
  {
    id: 'PROD-003',
    name: 'Smart Watch',
    price: '₦42,000',
    stock: 0,
    status: 'out_of_stock' as ProductStatus,
    category: 'Electronics',
    sku: 'SW-2024-003'
  }
]

export default function ProductsPage() {
  const [showBulkImport, setShowBulkImport] = useState(false)
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])

  const handleBulkImport = (file: File) => {
    console.log('Processing bulk import:', file.name)
    // Handle file processing here
    setShowBulkImport(false)
  }

  const toggleProductSelection = (productId: string) => {
    setSelectedProducts(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const bulkActions = [
    { label: 'Delete Selected', action: () => console.log('Delete:', selectedProducts) },
    { label: 'Update Prices', action: () => console.log('Update prices:', selectedProducts) },
    { label: 'Update Stock', action: () => console.log('Update stock:', selectedProducts) }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Products</h1>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setShowBulkImport(true)}
            className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
          >
            <ArrowDownTrayIcon className="h-4 w-4" />
            Bulk Import
          </button>
          <Link
            href="/Business/Dashboard/products/new"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            <PlusIcon className="h-4 w-4" />
            Add Product
          </Link>
        </div>
      </div>

      {/* Bulk Import Modal */}
      {showBulkImport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-medium mb-4">Bulk Import Products</h3>
            <BulkImporter onFileUpload={handleBulkImport} />
            <button
              onClick={() => setShowBulkImport(false)}
              className="mt-4 w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Bulk Actions */}
      {selectedProducts.length > 0 && (
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-blue-800">
              {selectedProducts.length} product(s) selected
            </span>
            <div className="flex gap-2">
              {bulkActions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.action}
                  className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <FilterBar
        onSearch={(query) => console.log('Search:', query)}
        onStatusFilter={(status) => console.log('Status:', status)}
        onDateRange={(start, end) => console.log('Date range:', start, end)}
      />

      {/* Products Table */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-8">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setSelectedProducts(e.target.checked ? products.map(p => p.id) : [])
                  }}
                  className="rounded border-gray-300"
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => toggleProductSelection(product.id)}
                    className="rounded border-gray-300"
                  />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-gray-200 rounded mr-3"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{product.name}</p>
                      <p className="text-xs text-gray-500">{product.sku}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{product.price}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-900">{product.stock}</span>
                    {product.stock <= 5 && product.stock > 0 && (
                      <InventoryAlert stock={product.stock} />
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={product.status} />
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{product.category}</td>
                <td className="px-6 py-4 text-sm font-medium">
                  <Link
                    href={`/Business/Dashboard/products/${product.id}`}
                    className="text-blue-600 hover:text-blue-900 mr-3"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => console.log('Delete', product.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}