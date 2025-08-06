'use client'

import { useState } from 'react'
import VariantEditor from './VariantEditor'
import type { Product, ProductVariant } from '../../../../../types/products'
import { ArrowLeft, Plus, Trash2 } from 'lucide-react'

interface ProductFormProps {
  product: Product
  currencies: string[]
  locations: string[]
  onCancel?: () => void
}

export function ProductForm({ product, currencies, locations, onCancel }: ProductFormProps) {
  const [formData, setFormData] = useState<Product>(product)
  const [variants, setVariants] = useState<ProductVariant[]>(product.variants || [])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ 
      ...prev, 
      [name]: name === 'price' || name === 'stock' ? Number(value) : value 
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Product saved:', { ...formData, variants })
      // In a real app, you would redirect or show success message here
    } catch (error) {
      console.error('Error saving product:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleAddVariant = () => {
    const newVariant: ProductVariant = {
      id: `temp-${Date.now()}`,
      name: '',
      price: formData.price,
      stock: 0,
      sku: '',
    }
    setVariants([...variants, newVariant])
  }

  const handleRemoveVariant = (id: string) => {
    setVariants(variants.filter(v => v.id !== id))
  }

  return (
    <div className="space-y-6">
      <div>
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex items-center text-blue-800 hover:text-blue-600 mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to products
        </button>
        
        <h1 className="text-2xl font-bold text-gray-800">
          {product.id ? 'Edit Product' : 'Add New Product'}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Basic Information</h2>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Product Name *
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location *
              </label>
              <select
                name="location"
                id="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows={4}
              value={formData.description || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add a detailed description of your product..."
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Pricing & Inventory</h2>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                Base Price *
              </label>
              <div className="relative">
                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  required
                  className="absolute left-0 top-0 h-full pl-3 pr-8 border-r border-gray-300 bg-gray-50 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {currencies.map(currency => (
                    <option key={currency} value={currency}>{currency}</option>
                  ))}
                </select>
                <input
                  type="number"
                  name="price"
                  id="price"
                  value={formData.price}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  required
                  className="block w-full pl-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-1">
                Stock Quantity *
              </label>
              <input
                type="number"
                name="stock"
                id="stock"
                value={formData.stock}
                onChange={handleChange}
                min="0"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Variants</h2>
            <button
              type="button"
              onClick={handleAddVariant}
              className="inline-flex items-center text-sm text-blue-800 hover:text-blue-600"
            >
              <Plus className="w-4 h-4 mr-1" /> Add Variant
            </button>
          </div>

          {variants.length > 0 ? (
            <div className="space-y-4">
              {variants.map((variant) => (
                <div key={variant.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end p-4 bg-gray-50 rounded-lg">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Variant Name</label>
                    <input
                      type="text"
                      value={variant.name}
                      onChange={(e) => {
                        const updated = variants.map(v => 
                          v.id === variant.id ? {...v, name: e.target.value} : v
                        )
                        setVariants(updated)
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Size, Color"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                    <input
                      type="number"
                      value={variant.price}
                      onChange={(e) => {
                        const updated = variants.map(v => 
                          v.id === variant.id ? {...v, price: Number(e.target.value)} : v
                        )
                        setVariants(updated)
                      }}
                      min="0"
                      step="0.01"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex items-end space-x-2">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                      <input
                        type="number"
                        value={variant.stock}
                        onChange={(e) => {
                          const updated = variants.map(v => 
                            v.id === variant.id ? {...v, stock: Number(e.target.value)} : v
                          )
                          setVariants(updated)
                        }}
                        min="0"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveVariant(variant.id)}
                      className="p-2 text-red-600 hover:text-red-900 rounded-md hover:bg-red-50"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>No variants added yet</p>
            </div>
          )}
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Saving...' : 'Save Product'}
          </button>
        </div>
      </form>
    </div>
  )
}