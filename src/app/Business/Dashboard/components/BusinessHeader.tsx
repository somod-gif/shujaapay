'use client'
import { BellIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export function BusinessHeader() {
  return (
    <div className="flex-1 flex items-center justify-between">
      <div className="text-sm font-semibold leading-6 text-gray-900">
        Dashboard
      </div>
      
      <div className="flex items-center gap-x-4">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500 relative"
        >
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="relative h-8 w-8 rounded-full bg-blue-100 overflow-hidden">
          <Image
            src="/placeholder-avatar.jpg"
            alt="User profile"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}