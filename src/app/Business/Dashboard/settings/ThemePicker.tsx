'use client'
import { useState } from 'react'

const colorThemes = [
  { name: 'Blue', value: 'blue', primary: '#3b82f6', secondary: '#1d4ed8' },
  { name: 'Green', value: 'green', primary: '#10b981', secondary: '#059669' },
  { name: 'Purple', value: 'purple', primary: '#8b5cf6', secondary: '#7c3aed' },
  { name: 'Orange', value: 'orange', primary: '#f97316', secondary: '#ea580c' },
  { name: 'Pink', value: 'pink', primary: '#ec4899', secondary: '#db2777' }
]

const fontThemes = [
  { name: 'Inter', value: 'inter', class: 'font-sans' },
  { name: 'System UI', value: 'system', class: 'font-system' },
  { name: 'Geometric', value: 'geometric', class: 'font-geometric' },
  { name: 'Humanist', value: 'humanist', class: 'font-humanist' }
]

export function ThemePicker() {
  const [currentTheme, setCurrentTheme] = useState({
    color: 'blue',
    font: 'inter',
    darkMode: false
  })

  const [storePreview, setStorePreview] = useState({
    name: 'KAIHMA Store',
    slogan: 'Premium Electronics & Accessories',
    banner: '/placeholder-banner.jpg'
  })

  const handleThemeChange = (type: 'color' | 'font' | 'darkMode', value: string | boolean) => {
    setCurrentTheme(prev => ({ ...prev, [type]: value }))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium text-gray-900">Store Theme Customization</h2>

      {/* Color Theme Selection */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Color Theme</h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {colorThemes.map((theme) => (
            <button
              key={theme.value}
              onClick={() => handleThemeChange('color', theme.value)}
              className={`p-3 border-2 rounded-lg text-center ${
                currentTheme.color === theme.value
                  ? 'border-blue-500 ring-2 ring-blue-200'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div
                className="w-full h-12 rounded mb-2"
                style={{ backgroundColor: theme.primary }}
              />
              <span className="text-xs font-medium text-gray-900">{theme.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Font Selection */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Font Family</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {fontThemes.map((font) => (
            <button
              key={font.value}
              onClick={() => handleThemeChange('font', font.value)}
              className={`p-3 border-2 rounded-lg text-center ${
                currentTheme.font === font.value
                  ? 'border-blue-500 ring-2 ring-blue-200'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="w-full h-12 flex items-center justify-center mb-2">
                <span className="text-lg" style={{ fontFamily: font.name }}>
                  Aa
                </span>
              </div>
              <span className="text-xs font-medium text-gray-900">{font.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
        <div>
          <h3 className="font-medium text-gray-900">Dark Mode</h3>
          <p className="text-sm text-gray-600">Enable dark theme for your store</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={currentTheme.darkMode}
            onChange={(e) => handleThemeChange('darkMode', e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>

      {/* Store Preview */}
      <div className="border-t pt-6 mt-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Store Preview</h3>
        <div className="border border-gray-200 rounded-lg p-4 bg-white">
          <div className="text-center">
            <div 
              className="h-20 bg-gray-200 rounded-lg mb-4 flex items-center justify-center"
              style={{ backgroundColor: colorThemes.find(t => t.value === currentTheme.color)?.primary }}
            >
              <h2 
                className="text-white font-bold text-xl"
                style={{ fontFamily: fontThemes.find(f => f.value === currentTheme.font)?.name }}
              >
                {storePreview.name}
              </h2>
            </div>
            <p className="text-gray-600">{storePreview.slogan}</p>
            <div className="mt-4 p-3 bg-gray-50 rounded">
              <p className="text-sm text-gray-500">This is how your store will appear to customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-6 border-t">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
          Save Changes
        </button>
        <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-200">
          Reset to Default
        </button>
      </div>
    </div>
  )
}