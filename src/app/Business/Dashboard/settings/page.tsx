'use client'
import { useState } from 'react'
import { 
  Cog6ToothIcon,
  PaintBrushIcon,
  CreditCardIcon,
  BellIcon,
  ShieldCheckIcon,
  UserIcon
} from '@heroicons/react/24/outline'
import { ThemePicker } from './ThemePicker'
import { PayoutPreferences } from './PayoutPreferences'

const settingsSections = [
  {
    id: 'store',
    title: 'Store Settings',
    icon: PaintBrushIcon,
    description: 'Customize your store appearance and branding'
  },
  {
    id: 'payouts',
    title: 'Payout Preferences',
    icon: CreditCardIcon,
    description: 'Manage your bank accounts and payment methods'
  },
  {
    id: 'notifications',
    title: 'Notifications',
    icon: BellIcon,
    description: 'Configure your notification preferences'
  },
  {
    id: 'security',
    title: 'Security',
    icon: ShieldCheckIcon,
    description: 'Manage account security and access'
  },
  {
    id: 'profile',
    title: 'Business Profile',
    icon: UserIcon,
    description: 'Update your business information'
  }
]

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState('store')

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'store':
        return <ThemePicker />
      case 'payouts':
        return <PayoutPreferences />
      case 'notifications':
        return <NotificationSettings />
      case 'security':
        return <SecuritySettings />
      case 'profile':
        return <ProfileSettings />
      default:
        return <ThemePicker />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Cog6ToothIcon className="h-8 w-8 text-gray-600" />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
          <p className="text-gray-600">Manage your store preferences and account settings</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:w-64">
          <nav className="space-y-1">
            {settingsSections.map((section) => {
              const Icon = section.icon
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors ${
                    activeSection === section.id
                      ? 'bg-blue-50 text-blue-800 border border-blue-200'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <div>
                    <p className="font-medium">{section.title}</p>
                    <p className="text-sm opacity-75">{section.description}</p>
                  </div>
                </button>
              )
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {renderSectionContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

// Notification Settings Component
function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    orderUpdates: true,
    paymentAlerts: true,
    lowStock: true,
    newReviews: false
  })

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium text-gray-900">Notification Preferences</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Notification Channels</h3>
          <div className="space-y-2">
            {[
              { key: 'email', label: 'Email Notifications', description: 'Receive updates via email' },
              { key: 'sms', label: 'SMS Alerts', description: 'Get important alerts via SMS' },
              { key: 'push', label: 'Push Notifications', description: 'Browser and mobile push notifications' }
            ].map((channel) => (
              <div key={channel.key} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{channel.label}</p>
                  <p className="text-sm text-gray-500">{channel.description}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications[channel.key as keyof typeof notifications]}
                    onChange={() => toggleNotification(channel.key as keyof typeof notifications)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Notification Types</h3>
          <div className="space-y-2">
            {[
              { key: 'orderUpdates', label: 'Order Updates', description: 'New orders and status changes' },
              { key: 'paymentAlerts', label: 'Payment Alerts', description: 'Payment confirmations and issues' },
              { key: 'lowStock', label: 'Low Stock Warnings', description: 'Products running low on inventory' },
              { key: 'newReviews', label: 'New Reviews', description: 'Customer reviews and ratings' }
            ].map((type) => (
              <div key={type.key} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{type.label}</p>
                  <p className="text-sm text-gray-500">{type.description}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications[type.key as keyof typeof notifications]}
                    onChange={() => toggleNotification(type.key as keyof typeof notifications)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Security Settings Component
function SecuritySettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium text-gray-900">Security Settings</h2>
      
      <div className="space-y-4">
        <div className="p-4 border border-gray-200 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Two-Factor Authentication</h3>
          <p className="text-sm text-gray-600 mb-3">Add an extra layer of security to your account</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
            Enable 2FA
          </button>
        </div>

        <div className="p-4 border border-gray-200 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Password</h3>
          <p className="text-sm text-gray-600 mb-3">Last changed 2 weeks ago</p>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-200">
            Change Password
          </button>
        </div>

        <div className="p-4 border border-gray-200 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Active Sessions</h3>
          <p className="text-sm text-gray-600">You're logged in on this device</p>
          <p className="text-xs text-gray-500 mt-1">Chrome on Windows • Lagos, Nigeria</p>
        </div>
      </div>
    </div>
  )
}

// Profile Settings Component
function ProfileSettings() {
  const [profile, setProfile] = useState({
    businessName: 'KAIHMA Store',
    email: 'store@kaihma.com',
    phone: '+234 801 234 5678',
    address: '123 Victoria Island, Lagos, Nigeria',
    description: 'Premium electronics and accessories'
  })

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium text-gray-900">Business Profile</h2>
      
      <form className="space-y-4">
        {[
          { key: 'businessName', label: 'Business Name', type: 'text', required: true },
          { key: 'email', label: 'Email Address', type: 'email', required: true },
          { key: 'phone', label: 'Phone Number', type: 'tel', required: false },
          { key: 'address', label: 'Business Address', type: 'text', required: false },
          { key: 'description', label: 'Business Description', type: 'textarea', required: false }
        ].map((field) => (
          <div key={field.key}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {field.label} {field.required && '*'}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                value={profile[field.key as keyof typeof profile] as string}
                onChange={(e) => setProfile({ ...profile, [field.key]: e.target.value })}
                rows={3}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                required={field.required}
              />
            ) : (
              <input
                type={field.type}
                value={profile[field.key as keyof typeof profile] as string}
                onChange={(e) => setProfile({ ...profile, [field.key]: e.target.value })}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                required={field.required}
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Update Profile
        </button>
      </form>
    </div>
  )
}