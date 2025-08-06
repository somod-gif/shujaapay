'use client'
import React from 'react'
import { Inter } from 'next/font/google'
import { MobileSidebar } from './components/MobileSidebar'
import { BusinessHeader } from './components/BusinessHeader'
import { SidebarNav } from './components/SidebarNav'
import { Bars3Icon } from '@heroicons/react/24/outline'

const inter = Inter({ subsets: ['latin'] })

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  return (
    <div className={`${inter.className} bg-gray-50`}>
      {/* Mobile sidebar toggle and header - positioned below main navbar */}
      <div className="sticky top-16 z-30 flex items-center gap-x-6 bg-white/95 px-4 py-4 shadow-sm sm:px-6 lg:hidden border-b border-gray-200 backdrop-blur-sm">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-700 hover:text-gray-900 lg:hidden"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
        <BusinessHeader />
      </div>

      {/* Mobile sidebar (shown on small screens) */}
      <MobileSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      {/* Desktop sidebar (shown on larger screens) */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-20 lg:flex lg:w-64 lg:flex-col">
        <SidebarNav />
      </div>

      {/* Main content area */}
      <div className="lg:pl-64 pt-16"> {/* Added pt-16 to account for main navbar */}
        <main className="py-6 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}