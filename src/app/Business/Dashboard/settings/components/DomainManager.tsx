'use client'

import { useState } from 'react'
import { Globe, Link as LinkIcon, Check, X } from 'lucide-react'

export function DomainManager() {
  const [domain, setDomain] = useState('')
  const [customDomain, setCustomDomain] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationStatus, setVerificationStatus] = useState<'none' | 'success' | 'error'>('none')

  const currentDomain = 'my-store.kaihma.app'

  const handleVerify = async () => {
    if (!domain) return
    
    setIsVerifying(true)
    // Simulate verification
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const randomSuccess = Math.random() > 0.3
    setVerificationStatus(randomSuccess ? 'success' : 'error')
    if (randomSuccess) {
      setCustomDomain(domain)
      setDomain('')
    }
    setIsVerifying(false)
  }

  const handleRemove = () => {
    setCustomDomain('')
    setVerificationStatus('none')
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">Domain Settings</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Current Domain</h3>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <Globe className="w-5 h-5 text-gray-500 mr-2" />
              <span className="font-medium">
                {customDomain || currentDomain}
              </span>
              {customDomain && (
                <button
                  onClick={handleRemove}
                  className="ml-auto text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-50"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {!customDomain && (
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Add Custom Domain</h3>
              <p className="text-sm text-gray-500 mb-4">
                Connect your own domain (e.g., www.yourstore.com) to your KAIHMA store
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <input
                    type="text"
                    value={domain}
                    onChange={(e) => {
                      setDomain(e.target.value)
                      setVerificationStatus('none')
                    }}
                    placeholder="yourdomain.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {verificationStatus === 'error' && (
                    <p className="mt-1 text-sm text-red-600">
                      Verification failed. Please check your DNS settings and try again.
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleVerify}
                  disabled={!domain || isVerifying}
                  className={`px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    !domain || isVerifying ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isVerifying ? 'Verifying...' : 'Verify Domain'}
                </button>
              </div>
              
              {verificationStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-50 text-green-800 rounded-lg flex items-center">
                  <Check className="w-5 h-5 mr-2 text-green-600" />
                  <span>Domain verified successfully! Your store will now be available at this domain.</span>
                </div>
              )}
            </div>
          )}

          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">DNS Configuration</h3>
            <p className="text-sm text-gray-500 mb-3">
              To connect your domain, add these DNS records with your domain provider:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Value</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">TTL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap font-mono">CNAME</td>
                    <td className="px-3 py-2 whitespace-nowrap">@ or www</td>
                    <td className="px-3 py-2 whitespace-nowrap font-mono">stores.kaihma.app</td>
                    <td className="px-3 py-2 whitespace-nowrap">3600</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap font-mono">TXT</td>
                    <td className="px-3 py-2 whitespace-nowrap">@</td>
                    <td className="px-3 py-2 whitespace-nowrap font-mono">kaihma-verification=abc123</td>
                    <td className="px-3 py-2 whitespace-nowrap">3600</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <LinkIcon className="h-5 w-5 text-blue-800" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">Need help with domain setup?</h3>
            <div className="mt-2 text-sm text-blue-700">
              <p>
                Contact our support team or check our{' '}
                <a href="#" className="font-medium underline hover:text-blue-600">
                  domain setup guide
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}