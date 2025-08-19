'use client'
import { useState } from 'react'
import { ArrowUpTrayIcon, DocumentIcon } from '@heroicons/react/24/outline'

interface BulkImporterProps {
  onFileUpload: (file: File) => void
}

export function BulkImporter({ onFileUpload }: BulkImporterProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files.length > 0 && isValidFile(files[0])) {
      setSelectedFile(files[0])
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0 && isValidFile(files[0])) {
      setSelectedFile(files[0])
    }
  }

  const isValidFile = (file: File) => {
    const validTypes = ['.csv', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']
    return validTypes.some(type => file.name.includes(type) || file.type.includes(type))
  }

  const handleUpload = () => {
    if (selectedFile) {
      onFileUpload(selectedFile)
    }
  }

  return (
    <div className="space-y-4">
      {!selectedFile ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-8 text-center ${
            isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
        >
          <ArrowUpTrayIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-sm text-gray-600 mb-2">
            Drag and drop your Excel or CSV file here
          </p>
          <p className="text-xs text-gray-500 mb-4">or</p>
          <input
            type="file"
            id="file-upload"
            accept=".csv,.xlsx,.xls"
            onChange={handleFileSelect}
            className="hidden"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
          >
            Choose File
          </label>
        </div>
      ) : (
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <DocumentIcon className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-sm font-medium">{selectedFile.name}</p>
                <p className="text-xs text-gray-500">
                  {(selectedFile.size / 1024).toFixed(1)} KB
                </p>
              </div>
            </div>
            <button
              onClick={() => setSelectedFile(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
          <button
            onClick={handleUpload}
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Process Import
          </button>
        </div>
      )}

      {/* Instructions */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="text-sm font-medium text-gray-900 mb-2">File Requirements:</h4>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>• CSV or Excel format (.csv, .xlsx, .xls)</li>
          <li>• Include columns: Name, Price, Stock, Category, SKU</li>
          <li>• Maximum file size: 5MB</li>
          <li>• <a href="/template.csv" download className="text-blue-600 hover:text-blue-800">
            Download template
          </a></li>
        </ul>
      </div>
    </div>
  )
}