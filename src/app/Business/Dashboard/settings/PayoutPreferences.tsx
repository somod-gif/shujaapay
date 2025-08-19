'use client'
import { useState } from 'react'
import { 
  BanknotesIcon,
  PlusIcon,
  TrashIcon
} from '@heroicons/react/24/outline'

interface BankAccount {
  id: string
  bankName: string
  accountNumber: string
  accountName: string
  isDefault: boolean
}

interface Wallet {
  id: string
  type: string
  address: string
  isDefault: boolean
}

export function PayoutPreferences() {
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([
    {
      id: '1',
      bankName: 'Guaranty Trust Bank',
      accountNumber: '0123456789',
      accountName: 'KAIHMA STORE',
      isDefault: true
    }
  ])

  const [wallets, setWallets] = useState<Wallet[]>([
    {
      id: '1',
      type: 'Flutterwave',
      address: 'store@kaihma.com',
      isDefault: false
    }
  ])

  const [showAddBank, setShowAddBank] = useState(false)
  const [showAddWallet, setShowAddWallet] = useState(false)

  const addBankAccount = (account: Omit<BankAccount, 'id'>) => {
    const newAccount = { ...account, id: Date.now().toString() }
    setBankAccounts(prev => [...prev, newAccount])
    setShowAddBank(false)
  }

  const addWallet = (wallet: Omit<Wallet, 'id'>) => {
    const newWallet = { ...wallet, id: Date.now().toString() }
    setWallets(prev => [...prev, newWallet])
    setShowAddWallet(false)
  }

  const setDefaultAccount = (id: string, type: 'bank' | 'wallet') => {
    if (type === 'bank') {
      setBankAccounts(prev => prev.map(acc => ({
        ...acc,
        isDefault: acc.id === id
      })))
    } else {
      setWallets(prev => prev.map(wallet => ({
        ...wallet,
        isDefault: wallet.id === id
      })))
    }
  }

  const deleteAccount = (id: string, type: 'bank' | 'wallet') => {
    if (type === 'bank') {
      setBankAccounts(prev => prev.filter(acc => acc.id !== id))
    } else {
      setWallets(prev => prev.filter(wallet => wallet.id !== id))
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium text-gray-900">Payout Preferences</h2>

      {/* Bank Accounts */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-700">Bank Accounts</h3>
          <button
            onClick={() => setShowAddBank(true)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
          >
            <PlusIcon className="h-4 w-4" />
            Add Bank Account
          </button>
        </div>

        <div className="space-y-3">
          {bankAccounts.map((account) => (
            <div key={account.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{account.bankName}</p>
                  <p className="text-sm text-gray-600">{account.accountNumber}</p>
                  <p className="text-xs text-gray-500">{account.accountName}</p>
                </div>
                <div className="flex items-center gap-2">
                  {account.isDefault && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Default
                    </span>
                  )}
                  {!account.isDefault && (
                    <button
                      onClick={() => setDefaultAccount(account.id, 'bank')}
                      className="text-blue-600 hover:text-blue-700 text-sm"
                    >
                      Set Default
                    </button>
                  )}
                  <button
                    onClick={() => deleteAccount(account.id, 'bank')}
                    className="text-red-600 hover:text-red-700"
                  >
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wallets */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-700">Digital Wallets</h3>
          <button
            onClick={() => setShowAddWallet(true)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
          >
            <PlusIcon className="h-4 w-4" />
            Add Wallet
          </button>
        </div>

        <div className="space-y-3">
          {wallets.map((wallet) => (
            <div key={wallet.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{wallet.type}</p>
                  <p className="text-sm text-gray-600">{wallet.address}</p>
                </div>
                <div className="flex items-center gap-2">
                  {wallet.isDefault && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Default
                    </span>
                  )}
                  {!wallet.isDefault && (
                    <button
                      onClick={() => setDefaultAccount(wallet.id, 'wallet')}
                      className="text-blue-600 hover:text-blue-700 text-sm"
                    >
                      Set Default
                    </button>
                  )}
                  <button
                    onClick={() => deleteAccount(wallet.id, 'wallet')}
                    className="text-red-600 hover:text-red-700"
                  >
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payout Settings */}
      <div className="border-t pt-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Payout Settings</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Payout Frequency</p>
              <p className="text-sm text-gray-600">How often you receive payments</p>
            </div>
            <select className="border border-gray-300 rounded-md px-3 py-1">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>

          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Minimum Payout Amount</p>
              <p className="text-sm text-gray-600">Minimum balance for automatic payouts</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">₦</span>
              <input
                type="number"
                defaultValue="5000"
                className="w-20 border border-gray-300 rounded-md px-2 py-1"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add Bank Modal (simplified) */}
      {showAddBank && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-medium mb-4">Add Bank Account</h3>
            {/* Simplified form - would include actual form fields */}
            <div className="space-y-3">
              <input type="text" placeholder="Bank Name" className="w-full border rounded-md p-2" />
              <input type="text" placeholder="Account Number" className="w-full border rounded-md p-2" />
              <input type="text" placeholder="Account Name" className="w-full border rounded-md p-2" />
            </div>
            <div className="flex gap-3 mt-4">
              <button className="flex-1 bg-blue-600 text-white py-2 rounded-md">Add Account</button>
              <button 
                onClick={() => setShowAddBank(false)}
                className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Wallet Modal (simplified) */}
      {showAddWallet && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-medium mb-4">Add Digital Wallet</h3>
            {/* Simplified form */}
            <div className="space-y-3">
              <select className="w-full border rounded-md p-2">
                <option>Flutterwave</option>
                <option>Paystack</option>
                <option>Bank Transfer</option>
              </select>
              <input type="text" placeholder="Wallet Address/Email" className="w-full border rounded-md p-2" />
            </div>
            <div className="flex gap-3 mt-4">
              <button className="flex-1 bg-blue-600 text-white py-2 rounded-md">Add Wallet</button>
              <button 
                onClick={() => setShowAddWallet(false)}
                className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}