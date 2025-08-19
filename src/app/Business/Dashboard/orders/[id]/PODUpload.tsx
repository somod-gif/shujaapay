'use client'
import { useState } from 'react'
import { CameraIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface PODUploadProps {
  orderId: string
}

export function PODUpload({ orderId }: PODUploadProps) {
  const [image, setImage] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  const handleFileUpload = (file: File) => {
    setIsUploading(true)
    // Simulate upload
    setTimeout(() => {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImage(e.target?.result as string)
        setIsUploading(false)
      }
      reader.readAsDataURL(file)
    }, 1000)
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Proof of Delivery</h3>
      
      {image ? (
        <div className="space-y-4">
          <div className="relative border rounded-lg p-4">
            <img src={image} alt="Delivery proof" className="rounded-md max-h-64 mx-auto" />
            <button
              onClick={() => setImage(null)}
              className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
            >
              <XMarkIcon className="h-4 w-4 text-red-600" />
            </button>
          </div>
          <button
            onClick={() => console.log('Submit POD for order:', orderId)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Confirm Delivery
          </button>
        </div>
      ) : (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <CameraIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-sm text-gray-600 mb-2">
            Upload proof of delivery photo or receipt
          </p>
          <input
            type="file"
            id="pod-upload"
            className="hidden"
            accept="image/*"
            onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
          />
          <label
            htmlFor="pod-upload"
            className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 inline-block"
          >
            {isUploading ? 'Uploading...' : 'Upload Photo'}
          </label>
        </div>
      )}
    </div>
  )
}