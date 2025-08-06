import { SettingsTabs } from './components/SettingsTabs'
import { BusinessProfile } from './components/BusinessProfile'
import { ThemeCustomizer } from './components/ThemeCustomizer'
import { DomainManager } from './components/DomainManager'

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Store Settings</h1>
        <p className="text-sm text-gray-600 mt-1">
          Manage your business profile, store appearance, and domain settings
        </p>
      </div>

      <SettingsTabs
        tabs={[
          { id: 'profile', label: 'Business Profile' },
          { id: 'theme', label: 'Store Appearance' },
          { id: 'domain', label: 'Domain Settings' },
        ]}
      >
        {(activeTab) => (
          <div className="mt-6">
            {activeTab === 'profile' && <BusinessProfile />}
            {activeTab === 'theme' && <ThemeCustomizer />}
            {activeTab === 'domain' && <DomainManager />}
          </div>
        )}
      </SettingsTabs>
    </div>
  )
}