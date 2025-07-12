import React from 'react';
import { WalletActions } from '../../../components/WalletActions';
import { AnalyticsChart } from '../../../components/AnalyticsChart';
import { TrendingUp, DollarSign, Users, Target } from 'lucide-react';

export default function StudentHomePage() {
  const stats = [
    { label: 'Total Raised', value: '$2,450', icon: DollarSign, change: '+12%' },
    { label: 'Active Projects', value: '3', icon: Target, change: '+1' },
    { label: 'Supporters', value: '28', icon: Users, change: '+5' },
    { label: 'Success Rate', value: '85%', icon: TrendingUp, change: '+3%' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome back!</h1>
        <p className="text-gray-600 dark:text-gray-400">Here's your funding overview</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                <p className="text-sm text-green-600 dark:text-green-400">{stat.change}</p>
              </div>
              <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        ))}
      </div>

      {/* Wallet Actions */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Wallet Actions</h2>
        <WalletActions />
      </div>

      {/* Analytics Chart */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Donation Analytics</h2>
        <AnalyticsChart />
      </div>
    </div>
  );
}