import React from 'react';
import { WalletActions } from '../../../components/WalletActions';
import { AnalyticsChart } from '../../../components/AnalyticsChart';
import { Heart, TrendingUp, Users, Target } from 'lucide-react';

export default function DonorHomePage() {
  const stats = [
    { label: 'Total Donated', value: '$5,200', icon: Heart, change: '+$450' },
    { label: 'Projects Supported', value: '12', icon: Target, change: '+2' },
    { label: 'Students Helped', value: '34', icon: Users, change: '+8' },
    { label: 'Impact Score', value: '92%', icon: TrendingUp, change: '+5%' },
  ];

  const recentActivity = [
    { action: 'Donated $250 to AI Study Assistant', time: '2 hours ago', type: 'donation' },
    { action: 'Followed new project: Mobile Health App', time: '1 day ago', type: 'follow' },
    { action: 'Donated $100 to Sustainable Campus', time: '3 days ago', type: 'donation' },
    { action: 'Left comment on Environmental Project', time: '5 days ago', type: 'comment' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Donor Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">Track your impact and discover new projects</p>
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

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100">Explore Projects</h3>
            <p className="text-sm text-blue-700 dark:text-blue-300">Discover new student projects to support</p>
          </button>
          <button className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
            <h3 className="font-semibold text-green-900 dark:text-green-100">Make a Donation</h3>
            <p className="text-sm text-green-700 dark:text-green-300">Support a student's educational journey</p>
          </button>
        </div>
      </div>

      {/* Wallet Actions */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Wallet Management</h2>
        <WalletActions />
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className={`w-2 h-2 rounded-full ${
                activity.type === 'donation' ? 'bg-green-500' :
                activity.type === 'follow' ? 'bg-blue-500' : 'bg-purple-500'
              }`} />
              <div className="flex-1">
                <p className="text-sm text-gray-900 dark:text-white">{activity.action}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Analytics */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Your Impact Over Time</h2>
        <AnalyticsChart />
      </div>
    </div>
  );
}