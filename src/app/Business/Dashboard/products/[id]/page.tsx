import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import VariantEditor from '../components/VariantEditor'
// Define the Product type here or import from a types file
type Product = {
  id: string
  name: string
  price: number
  currency: string
  stock: number
  status: string
  variants?: {
    id: string
    name: string
    price: number
    stock: number
  }[]
  createdAt: string
}

// Mock function to fetch product - replace with API call in production
async function getProduct(id: string): Promise<Product | undefined> {
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
  ]
  return mockProducts.find((product) => product.id === id)
}

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: product.currency,
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/Business/Dashboard/products"
          className="inline-flex items-center text-blue-800 hover:text-blue-600 mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to products
        </Link>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
          <div className="space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
              Preview
            </button>
            <button className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Basic Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                <input
                  type="text"
                  defaultValue={product.name}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Add a detailed description of your product..."
                ></textarea>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Pricing & Inventory</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">{product.currency}</span>
                  </div>
                  <input
                    type="number"
                    defaultValue={product.price}
                    className="pl-12 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                <input
                  type="number"
                  defaultValue={product.stock}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {product.variants && (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Variants</h2>
              <VariantEditor variants={product.variants} currency={product.currency} />
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Status</h2>
            <select
              defaultValue={product.status}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Product Image</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
              <div className="flex justify-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-blue-800 hover:text-blue-600 focus-within:outline-none"
                >
                  <span>Upload an image</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                </label>
              </div>
              <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}