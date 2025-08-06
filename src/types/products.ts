export interface Product {
  id: string
  name: string
  sku: string
  stock: number
  price: number
  currency: string
  status: 'active' | 'out_of_stock' | 'draft'
  location: string
  description?: string
  variants?: ProductVariant[]
}

export interface ProductVariant {
  id: string
  name: string
  price: number
  stock: number
  sku: string
}