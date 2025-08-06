import Link from 'next/link'
import { Edit, Trash2, Eye, ChevronDown } from 'lucide-react'
import { Product } from '../page'

interface ProductTableProps {
  products: Product[]
}

export default function ProductTable({ products }: ProductTableProps) {
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
    }).format(price)
  }

  const statusStyles = {
    published: 'bg-green-100 text-green-800',
    draft: 'bg-yellow-100 text-yellow-800',
    archived: 'bg-gray-100 text-gray-800',
  }

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {products.map((product) => (
          <tr key={product.id}>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-md"></div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">{product.name}</div>
                  {product.variants && (
                    <div className="text-xs text-gray-500 mt-1 flex items-center">
                      {product.variants.length} variants
                      <ChevronDown className="w-3 h-3 ml-1" />
                    </div>
                  )}
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {formatPrice(product.price, product.currency)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.stock}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles[product.status]}`}>
                {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
              <Link
                href={`/Business/Dashboard/products/${product.id}`}
                className="text-blue-800 hover:text-blue-600 inline-flex items-center"
              >
                <Edit className="w-4 h-4 mr-1" /> Edit
              </Link>
              <button className="text-red-600 hover:text-red-900 inline-flex items-center">
                <Trash2 className="w-4 h-4 mr-1" /> Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}