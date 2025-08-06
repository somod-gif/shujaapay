import { Plus, Trash2 } from 'lucide-react'

export interface ProductVariant {
  id: string
  name: string
  price: number
  stock: number
}

interface VariantEditorProps {
  variants: ProductVariant[]
  currency: string
}

export default function VariantEditor({ variants, currency }: VariantEditorProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Variant</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {variants.map((variant) => (
            <tr key={variant.id}>
              <td className="px-3 py-3 whitespace-nowrap">
                <input
                  type="text"
                  defaultValue={variant.name}
                  className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </td>
              <td className="px-3 py-3 whitespace-nowrap">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                    <span className="text-gray-500 text-sm">{currency}</span>
                  </div>
                  <input
                    type="number"
                    defaultValue={variant.price}
                    className="pl-10 w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </td>
              <td className="px-3 py-3 whitespace-nowrap">
                <input
                  type="number"
                  defaultValue={variant.stock}
                  className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </td>
              <td className="px-3 py-3 whitespace-nowrap text-right">
                <button className="text-red-600 hover:text-red-900">
                  <Trash2 className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="mt-3 inline-flex items-center text-sm text-blue-800 hover:text-blue-600">
        <Plus className="w-4 h-4 mr-1" /> Add Variant
      </button>
    </div>
  )
}