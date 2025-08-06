'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Package, ShoppingCart, Truck, Wallet } from 'lucide-react'

export function SidebarNav({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname()

  const navItems = [
    { name: 'Overview', href: '/Business/Dashboard', icon: Home },
    { name: 'Products', href: '/Business/Dashboard/products', icon: Package },
    { name: 'Orders', href: '/Business/Dashboard/orders', icon: ShoppingCart },
    { name: 'Logistics', href: '/Business/Dashboard/logistics', icon: Truck },
    { name: 'Payments', href: '/Business/Dashboard/payments', icon: Wallet },
  ]

  return (
    <div className={`flex grow flex-col gap-y-5 overflow-y-auto bg-white px-4 pb-4 ${
      mobile ? 'pt-2' : 'border-r border-gray-200 mt-16'
    }`}>
      <div className="flex h-16 shrink-0 items-center px-2">
        <h1 className="text-xl font-bold text-blue-800">KAIHMA</h1>
        <span className="ml-2 text-xs text-gray-500">Commerce OS</span>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul className="flex flex-1 flex-col gap-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center px-3 py-2.5 rounded-md text-sm font-medium ${
                    isActive
                      ? 'bg-blue-50 text-blue-800'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon className={`w-5 h-5 mr-3 ${
                    isActive ? 'text-blue-800' : 'text-gray-400'
                  }`} />
                  {item.name}
                  {isActive && (
                    <span className="ml-auto h-2 w-2 rounded-full bg-blue-800" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}