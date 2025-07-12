import React, { useState } from 'react';
import { Send, Download, ArrowUpDown, Wallet, Copy, ExternalLink, Eye, EyeOff } from 'lucide-react';

interface WalletActionsProps {
  role: 'student' | 'donor';
  balance?: number;
  walletAddress?: string;
}

export function WalletActions({ role, balance = 0, walletAddress = 'GDXYZ...ABCD' }: WalletActionsProps) {
  const [showAddress, setShowAddress] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy address');
    }
  };

  const recentTransactions = [
    { type: 'Received', amount: 250, from: 'Anonymous Donor', time: '2 hours ago', status: 'completed' },
    { type: 'Sent', amount: -50, from: 'Project Fund', time: '1 day ago', status: 'completed' },
    { type: 'Received', amount: 100, from: 'Sarah Johnson', time: '3 days ago', status: 'completed' }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Wallet Actions</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Connected</span>
          </div>
        </div>

        {/* Balance Display */}
        <div className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-4 sm:p-6 mb-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Current Balance</p>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">
              ${balance.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              ≈ {(balance * 7.5).toFixed(2)} XLM
            </p>
          </div>
        </div>

        {/* Wallet Address */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Wallet Address</label>
            <button
              onClick={() => setShowAddress(!showAddress)}
              className="flex items-center space-x-1 text-xs text-primary-600 hover:text-primary-700 dark:text-primary-400 transition-colors duration-200"
            >
              {showAddress ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
              <span>{showAddress ? 'Hide' : 'Show'}</span>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex-1 px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg font-mono text-sm overflow-hidden">
              <span className="block truncate">
                {showAddress ? walletAddress : '••••••••••••••••••••••••••••••'}
              </span>
            </div>
            <button
              onClick={copyAddress}
              className={`p-2 rounded-lg transition-all duration-200 ${
                copied 
                  ? 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400' 
                  : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              title={copied ? 'Copied!' : 'Copy address'}
            >
              <Copy className="w-4 h-4" />
            </button>
            <button
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
              title="View on Stellar Explorer"
            >
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {role === 'student' && (
            <button className="flex flex-col items-center justify-center p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-all duration-200 hover:scale-105">
              <Download className="w-5 h-5 sm:w-6 sm:h-6 mb-2" />
              <span className="text-xs sm:text-sm font-medium">Receive</span>
            </button>
          )}

          <button className="flex flex-col items-center justify-center p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-200 hover:scale-105">
            <Send className="w-5 h-5 sm:w-6 sm:h-6 mb-2" />
            <span className="text-xs sm:text-sm font-medium">Send</span>
          </button>

          <button className="flex flex-col items-center justify-center p-3 sm:p-4 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-200 hover:scale-105">
            <ArrowUpDown className="w-5 h-5 sm:w-6 sm:h-6 mb-2" />
            <span className="text-xs sm:text-sm font-medium">
              {role === 'student' ? 'Withdraw' : 'Deposit'}
            </span>
          </button>
        </div>

        {/* Recent Transactions */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Recent Transactions</h4>
          <div className="space-y-2">
            {recentTransactions.map((tx, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    tx.amount > 0 
                      ? 'bg-green-100 dark:bg-green-900/20' 
                      : 'bg-red-100 dark:bg-red-900/20'
                  }`}>
                    {tx.amount > 0 ? (
                      <Download className="w-4 h-4 text-green-600 dark:text-green-400" />
                    ) : (
                      <Send className="w-4 h-4 text-red-600 dark:text-red-400" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{tx.type}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{tx.from}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-semibold ${
                    tx.amount > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    {tx.amount > 0 ? '+' : ''}${Math.abs(tx.amount)}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{tx.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}