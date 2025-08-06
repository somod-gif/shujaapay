'use client'

import { useState } from 'react'

interface SettingsTabsProps {
  tabs: { id: string; label: string }[]
  children: (activeTab: string) => React.ReactNode
}

export function SettingsTabs({ tabs, children }: SettingsTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-800 text-blue-800'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      {children(activeTab)}
    </div>
  )
}