
import Link from 'next/link'
import { Plus } from 'lucide-react'
import ProductTable from './components/ProductTable'

export interface Product {
  id: string
  name: string
  price: number
  currency: string
  stock: number
  status: 'published' | 'draft' | 'archived'
  variants?: ProductVariant[]
  createdAt: string
}

export interface ProductVariant {
  id: string
  name: string
  price: number
  stock: number
}

// Mock data - replace with API calls in production
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'African Print Dress',
    price: 12500,
    currency: 'NGN',
    stock: 15,
    status: 'published',
    variants: [
      { id: '1-1', name: 'Small', price: 12500, stock: 5 },
      { id: '1-2', name: 'Medium', price: 12500, stock: 7 },
      { id: '1-3', name: 'Large', price: 13500, stock: 3 },
    ],
    createdAt: '2023-10-15',
  },
  {
    id: '2',
    name: 'Handmade Leather Bag',
    price: 8000,
    currency: 'NGN',
    stock: 8,
    status: 'published',
    createdAt: '2023-10-10',
  },
  {
    id: '3',
    name: 'Beaded Necklace',
    price: 5000,
    currency: 'NGN',
    stock: 0,
    status: 'draft',
    createdAt: '2023-10-05',
  },
]

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Products</h1>
        <Link
          href="/Business/Dashboard/products/new"
          className="flex items-center bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <ProductTable products={mockProducts} />
      </div>
    </div>
  )
}