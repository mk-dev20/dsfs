'use client'

import { AnalyticsChart } from '@/app/components/analytics-chart'
import { DollarSign, TrendingUp, Users, Calendar } from 'lucide-react'

// Mock donation data
const monthlyDonations = [
  { name: 'Jan', value: 150 },
  { name: 'Feb', value: 280 },
  { name: 'Mar', value: 420 },
  { name: 'Apr', value: 350 },
  { name: 'May', value: 580 },
  { name: 'Jun', value: 750 },
]

const donationsByProject = [
  { name: 'AI Education Platform', value: 3200 },
  { name: 'Blockchain Voting', value: 3000 },
  { name: 'Campus Navigation', value: 800 },
]

const recentDonations = [
  {
    id: '1',
    donor: 'Anonymous Donor',
    amount: 150,
    project: 'AI-Powered Education Platform',
    date: '2024-01-28T10:30:00Z',
    method: 'Stellar XLM'
  },
  {
    id: '2',
    donor: 'Sarah Johnson',
    amount: 200,
    project: 'AI-Powered Education Platform',
    date: '2024-01-27T15:45:00Z',
    method: 'M-Pesa'
  },
  {
    id: '3',
    donor: 'Tech Foundation',
    amount: 500,
    project: 'Blockchain Voting System',
    date: '2024-01-26T09:15:00Z',
    method: 'Stellar XLM'
  },
  {
    id: '4',
    donor: 'Anonymous Donor',
    amount: 75,
    project: 'Campus Navigation App',
    date: '2024-01-25T14:20:00Z',
    method: 'M-Pesa'
  },
  {
    id: '5',
    donor: 'Innovation Hub',
    amount: 300,
    project: 'AI-Powered Education Platform',
    date: '2024-01-24T11:10:00Z',
    method: 'Stellar XLM'
  }
]

export default function StudentDonationsPage() {
  const totalRaised = recentDonations.reduce((sum, donation) => sum + donation.amount, 0)
  const averageDonation = totalRaised / recentDonations.length
  const uniqueDonors = new Set(recentDonations.map(d => d.donor)).size

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Donations Received</h1>
        <p className="text-gray-600 dark:text-gray-300">Track your funding progress and donor contributions</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Raised</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">${totalRaised.toLocaleString()}</p>
              <p className="text-sm text-green-600 dark:text-green-400">+12% this month</p>
            </div>
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Donations</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{recentDonations.length}</p>
              <p className="text-sm text-blue-600 dark:text-blue-400">Across all projects</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Unique Donors</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{uniqueDonors}</p>
              <p className="text-sm text-purple-600 dark:text-purple-400">Supporting your work</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Average Donation</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">${averageDonation.toFixed(0)}</p>
              <p className="text-sm text-orange-600 dark:text-orange-400">Per contribution</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <AnalyticsChart
          data={monthlyDonations}
          title="Monthly Donation Trends"
          type="line"
          color="#059669"
        />
        
        <AnalyticsChart
          data={donationsByProject}
          title="Donations by Project"
          type="bar"
          color="#DC2626"
        />
      </div>

      {/* Recent Donations Table */}
      <div className="card">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Donations</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Donor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Project
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {recentDonations.map((donation) => (
                <tr key={donation.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                          {donation.donor.charAt(0)}
                        </span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {donation.donor}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-lg font-bold text-green-600 dark:text-green-400">
                      ${donation.amount}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-900 dark:text-white max-w-xs truncate">
                      {donation.project}
                    </p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      donation.method === 'Stellar XLM' 
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                        : 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                    }`}>
                      {donation.method}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {new Date(donation.date).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Thank You Section */}
      <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl p-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Thank You to Our Amazing Donors! 🎉
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Your generous contributions are making a real difference in advancing education and innovation. 
            Every donation helps bring these projects to life and creates lasting impact.
          </p>
          <button className="btn-primary">
            Share Your Success Story
          </button>
        </div>
      </div>
    </div>
  )
}