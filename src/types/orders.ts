export interface Order {
  id: string
  orderNumber: string
  customer: {
    name: string
    email: string
    phone: string
  }
  date: string
  status: 'pending' | 'processing' | 'fulfilled' | 'cancelled'
  paymentStatus: 'paid' | 'pending' | 'failed' | 'refunded'
  fulfillmentStatus: 'unfulfilled' | 'partially_fulfilled' | 'fulfilled'
  total: number
  currency: string
  location: string
  items: OrderItem[]
}

export interface OrderItem {
  id: string
  productId: string
  name: string
  quantity: number
  price: number
  variant?: string
}