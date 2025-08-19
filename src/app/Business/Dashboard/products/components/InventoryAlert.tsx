'use client'
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'

interface InventoryAlertProps {
  stock: number
}

export function InventoryAlert({ stock }: InventoryAlertProps) {
  const getAlertConfig = (stock: number) => {
    if (stock === 0) {
      return {
        color: 'text-red-600',
        bgColor: 'bg-red-100',
        message: 'Out of stock'
      }
    } else if (stock <= 2) {
      return {
        color: 'text-red-600',
        bgColor: 'bg-red-100',
        message: 'Very low stock'
      }
    } else if (stock <= 5) {
      return {
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-100',
        message: 'Low stock'
      }
    }
    return null
  }

  const config = getAlertConfig(stock)

  if (!config) return null

  return (
    <span className={`ml-2 inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${config.bgColor} ${config.color}`}>
      <ExclamationTriangleIcon className="h-3 w-3" />
      {config.message}
    </span>
  )
}