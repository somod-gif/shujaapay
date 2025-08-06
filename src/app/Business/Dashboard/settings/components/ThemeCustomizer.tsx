'use client'

import { useState } from 'react'
import { Paintbrush } from 'lucide-react'

const colorPalettes = [
  { name: 'Blue', value: 'blue', primary: 'bg-blue-800', secondary: 'bg-blue-600' },
  { name: 'Emerald', value: 'emerald', primary: 'bg-emerald-800', secondary: 'bg-emerald-600' },
  { name: 'Violet', value: 'violet', primary: 'bg-violet-800', secondary: 'bg-violet-600' },
  { name: 'Amber', value: 'amber', primary: 'bg-amber-800', secondary: 'bg-amber-600' },
  { name: 'Rose', value: 'rose', primary: 'bg-rose-800', secondary: 'bg-rose-600' },
]

export function ThemeCustomizer() {
  const [selectedTheme, setSelectedTheme] = useState('blue')
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSaving(false)
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">Store Appearance</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Color Theme</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {colorPalettes.map((palette) => (
                <button
                  key={palette.value}
                  type="button"
                  onClick={() => setSelectedTheme(palette.value)}
                  className={`flex flex-col items-center p-3 rounded-lg border ${
                    selectedTheme === palette.value
                      ? 'ring-2 ring-blue-500 border-transparent'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex w-full h-10 rounded overflow-hidden mb-2">
                    <div className={`w-1/2 ${palette.primary}`}></div>
                    <div className={`w-1/2 ${palette.secondary}`}></div>
                  </div>
                  <span className="text-sm text-gray-700">{palette.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Preview</h3>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 rounded-full ${colorPalettes.find(p => p.value === selectedTheme)?.primary}`}></div>
                <div>
                  <div className={`h-4 rounded-full ${colorPalettes.find(p => p.value === selectedTheme)?.primary} w-32 mb-2`}></div>
                  <div className="h-3 rounded-full bg-gray-200 w-24"></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border border-gray-200 rounded-lg p-2">
                    <div className="aspect-square bg-gray-100 mb-2"></div>
                    <div className="h-3 rounded-full bg-gray-200 w-3/4 mb-1"></div>
                    <div className="h-3 rounded-full bg-gray-200 w-1/2"></div>
                  </div>
                ))}
              </div>
              <div className={`h-10 rounded-lg ${colorPalettes.find(p => p.value === selectedTheme)?.primary} w-full`}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleSave}
          disabled={isSaving}
          className={`px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            isSaving ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          {isSaving ? 'Saving...' : (
            <span className="flex items-center">
              <Paintbrush className="w-4 h-4 mr-1" />
              Apply Theme
            </span>
          )}
        </button>
      </div>
    </div>
  )
}