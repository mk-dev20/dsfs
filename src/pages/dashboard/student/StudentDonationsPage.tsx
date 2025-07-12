import React from 'react';
import { AnalyticsChart } from '../../../components/AnalyticsChart';
import { DollarSign, TrendingUp, Users, Calendar } from 'lucide-react';

export default function StudentDonationsPage() {
  const recentDonations = [
    {
      id: '1',
      donorName: 'Anonymous',
      amount: 250,
      project: 'AI-Powered Study Assistant',
      date: '2024-01-15',
      message: 'Great project! Keep up the excellent work.'
    },
    {
      id: '2',
      donorName: 'Sarah Johnson',
      amount: 100,
      project: 'Mobile Health App',
      date: '2024-01-14',
      message: 'This will help so many students!'
    },
    {
      id: '3',
      donorName: 'Tech Corp Foundation',
      amount: 500,
      project: 'AI-Powered Study Assistant',
      date: '2024-01-12',
      message: 'Supporting innovation in education.'
    },
    {
      id: '4',
      donorName: 'Michael Chen',
      amount: 75,
      project: 'Sustainable Campus Initiative',
      date: '2024-01-10',
      message: 'Love the environmental focus!'
    }
  ];

  const stats = [
    { label: 'Total Received', value: '$4,650', icon: DollarSign, color: 'text-green-600' },
    { label: 'This Month', value: '$925', icon: TrendingUp, color: 'text-blue-600' },
    { label: 'Total Donors', value: '89', icon: Users, color: 'text-purple-600' },
    { label: 'Avg. Donation', value: '$52', icon: Calendar, color: 'text-orange-600' }
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Donations Received</h1>
        <p className="text-gray-600 dark:text-gray-400">Track your funding progress and donor support</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              </div>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Analytics Chart */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Donation Trends</h2>
        <AnalyticsChart />
      </div>

      {/* Recent Donations */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recent Donations</h2>
        <div className="space-y-4">
          {recentDonations.map((donation) => (
            <div key={donation.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{donation.donorName}</h3>
                  <span className="text-lg font-bold text-green-600 dark:text-green-400">${donation.amount}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{donation.project}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">{donation.date}</p>
                {donation.message && (
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 italic">"{donation.message}"</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}