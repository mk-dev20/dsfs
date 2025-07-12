'use client'

import { Send, Download, ArrowUpDown, Wallet, Copy, ExternalLink } from 'lucide-react'
import { useState } from 'react'

interface WalletActionsProps {
  role: 'student' | 'donor'
  balance?: number
  walletAddress?: string
}

export function WalletActions({ role, balance = 0, walletAddress = 'GDXYZ...ABCD' }: WalletActionsProps) {
  const [showAddress, setShowAddress] = useState(false)

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress)
    // In a real app, show a toast notification
  }

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Wallet Actions</h3>
        <div className="flex items-center space-x-2">
          <Wallet className="w-5 h-5 text-primary-600" />
          <span className="text-sm text-gray-500 dark:text-gray-400">Connected</span>
        </div>
      </div>

      {/* Balance Display */}
      <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-4 mb-6">
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Current Balance</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">${balance.toLocaleString()}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">≈ {(balance * 7.5).toFixed(2)} XLM</p>
        </div>
      </div>

      {/* Wallet Address */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Wallet Address</label>
          <button
            onClick={() => setShowAddress(!showAddress)}
            className="text-xs text-primary-600 hover:text-primary-700 dark:text-primary-400"
          >
            {showAddress ? 'Hide' : 'Show'}
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex-1 px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg font-mono text-sm">
            {showAddress ? walletAddress : '••••••••••••••••••••••••••••••'}
          </div>
          <button
            onClick={copyAddress}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            title="Copy address"
          >
            <Copy className="w-4 h-4" />
          </button>
          <button
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            title="View on Stellar Explorer"
          >
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {role === 'student' && (
          <button className="flex flex-col items-center justify-center p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors duration-200">
            <Download className="w-6 h-6 mb-2" />
            <span className="text-sm font-medium">Receive</span>
          </button>
        )}

        <button className="flex flex-col items-center justify-center p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200">
          <Send className="w-6 h-6 mb-2" />
          <span className="text-sm font-medium">Send</span>
        </button>

        {role === 'donor' && (
          <button className="flex flex-col items-center justify-center p-4 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-200">
            <ArrowUpDown className="w-6 h-6 mb-2" />
            <span className="text-sm font-medium">Deposit</span>
          </button>
        )}

        {role === 'student' && (
          <button className="flex flex-col items-center justify-center p-4 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 rounded-xl hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors duration-200">
            <ArrowUpDown className="w-6 h-6 mb-2" />
            <span className="text-sm font-medium">Withdraw</span>
          </button>
        )}
      </div>

      {/* Quick Stats */}
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {role === 'student' ? '12' : '8'}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {role === 'student' ? 'Donations Received' : 'Projects Funded'}
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              ${role === 'student' ? '2,450' : '5,280'}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {role === 'student' ? 'Total Raised' : 'Total Donated'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}