import { FulfillmentTracker } from '../components/FulfillmentTracker'
import type { Order } from '@/types/orders'

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch this data
  const order: Order = {
    id: params.id,
    orderNumber: 'KA-5421',
    customer: {
      name: 'Adeola Johnson',
      email: 'adeola@example.com',
      phone: '+2348012345678'
    },
    date: '2023-06-15',
    status: 'processing',
    paymentStatus: 'paid',
    fulfillmentStatus: 'partially_fulfilled',
    total: 24850,
    currency: 'NGN',
    location: 'Lagos',
    items: [
      {
        id: 'item_1',
        productId: 'prod_123',
        name: 'African Print Dress',
        quantity: 2,
        price: 8500
      },
      {
        id: 'item_2',
        productId: 'prod_456',
        name: 'Handcrafted Beads',
        quantity: 1,
        price: 3200,
        variant: 'Red'
      }
    ]
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Order #{order.orderNumber}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Items</h2>
            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between border-b pb-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                    {item.variant && (
                      <p className="text-sm text-gray-500">Variant: {item.variant}</p>
                    )}
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {order.currency} {(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
              <div className="flex justify-between font-medium text-gray-900">
                <p>Total</p>
                <p>{order.currency} {order.total.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Customer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Name</h3>
                <p className="text-sm text-gray-900">{order.customer.name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Email</h3>
                <p className="text-sm text-gray-900">{order.customer.email}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                <p className="text-sm text-gray-900">{order.customer.phone}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Location</h3>
                <p className="text-sm text-gray-900">{order.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Status</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Order Status</h3>
                <p className="text-sm text-gray-900 capitalize">{order.status}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Payment Status</h3>
                <p className="text-sm text-gray-900 capitalize">{order.paymentStatus}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Date</h3>
                <p className="text-sm text-gray-900">
                  {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <FulfillmentTracker 
            status={order.fulfillmentStatus} 
            orderId={order.id}
          />
        </div>
      </div>
    </div>
  )
}