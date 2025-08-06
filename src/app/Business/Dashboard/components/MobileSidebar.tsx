'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { SidebarNav } from './SidebarNav'

export function MobileSidebar({
  sidebarOpen,
  setSidebarOpen
}: {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}) {
  const pathname = usePathname()

  // Close sidebar when route changes
  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname, setSidebarOpen])

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [sidebarOpen])

  return (
    <>
      {/* Mobile sidebar overlay and panel */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 ${sidebarOpen ? 'visible' : 'invisible'}`}
        aria-hidden={!sidebarOpen}
      >
        {/* Overlay with fade animation */}
        <div 
          className={`fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ${
            sidebarOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setSidebarOpen(false)}
        />
        
        {/* Sidebar panel with slide animation */}
        <div 
          className={`fixed inset-y-0 left-0 flex w-64 transform transition-all duration-300 ease-in-out ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="relative flex w-full max-w-xs flex-1">
            {/* Close button */}
            <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-white hover:text-gray-300"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close sidebar"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            
            {/* Sidebar content */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-4 pb-4">
              <SidebarNav mobile />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}