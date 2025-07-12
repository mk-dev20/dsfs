import React, { useState } from 'react';
import { Send, Download, CreditCard, Wallet } from 'lucide-react';

export function WalletActions() {
  const [balance] = useState('$2,450.00');
  const [walletAddress] = useState('0x742d35Cc6634C0532925a3b8D404d3aABF5F2681');

  const actions = [
    {
      icon: Send,
      label: 'Send',
      description: 'Transfer funds to another wallet',
      color: 'bg-blue-500 hover:bg-blue-600',
      action: () => console.log('Send clicked')
    },
    {
      icon: Download,
      label: 'Receive',
      description: 'Get funds from another wallet',
      color: 'bg-green-500 hover:bg-green-600',
      action: () => console.log('Receive clicked')
    },
    {
      icon: CreditCard,
      label: 'Withdraw',
      description: 'Transfer to bank account',
      color: 'bg-purple-500 hover:bg-purple-600',
      action: () => console.log('Withdraw clicked')
    }
  ];

  return (
    <div className="space-y-4">
      {/* Wallet Balance */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl text-white">
        <div className="flex items-center gap-3 mb-2">
          <Wallet className="w-6 h-6" />
          <h3 className="text-lg font-semibold">Wallet Balance</h3>
        </div>
        <p className="text-3xl font-bold mb-2">{balance}</p>
        <p className="text-blue-100 text-sm font-mono">{walletAddress}</p>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.action}
            className={`${action.color} text-white p-4 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg`}
          >
            <action.icon className="w-6 h-6 mx-auto mb-2" />
            <h4 className="font-semibold">{action.label}</h4>
            <p className="text-xs opacity-90 mt-1">{action.description}</p>
          </button>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="mt-6">
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Recent Transactions</h4>
        <div className="space-y-2">
          {[
            { type: 'Received', amount: '+$250.00', from: 'Anonymous Donor', time: '2 hours ago' },
            { type: 'Sent', amount: '-$50.00', from: 'Project Fund', time: '1 day ago' },
            { type: 'Received', amount: '+$100.00', from: 'Sarah Johnson', time: '3 days ago' }
          ].map((tx, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{tx.type}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{tx.from}</p>
              </div>
              <div className="text-right">
                <p className={`text-sm font-semibold ${
                  tx.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {tx.amount}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{tx.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}