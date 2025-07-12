import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export function AnalyticsChart() {
  // Mock data for the chart
  const data = [
    { month: 'Jan', donations: 450, projects: 2 },
    { month: 'Feb', donations: 680, projects: 3 },
    { month: 'Mar', donations: 920, projects: 4 },
    { month: 'Apr', donations: 1200, projects: 5 },
    { month: 'May', donations: 1450, projects: 6 },
    { month: 'Jun', donations: 1680, projects: 7 }
  ];

  const maxDonations = Math.max(...data.map(d => d.donations));
  const totalDonations = data.reduce((sum, d) => sum + d.donations, 0);
  const avgDonations = totalDonations / data.length;

  return (
    <div className="space-y-6">
      {/* Chart Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Donation Trends</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Monthly donation activity</p>
        </div>
        <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">+23% this month</span>
        </div>
      </div>

      {/* Simple Bar Chart */}
      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
        <div className="flex items-end justify-between h-40 gap-2">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-t relative">
                <div
                  className="bg-blue-500 dark:bg-blue-400 rounded-t transition-all duration-500 ease-out"
                  style={{
                    height: `${(item.donations / maxDonations) * 120}px`,
                    minHeight: '8px'
                  }}
                />
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-400 mt-2">{item.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-900 dark:text-blue-100">Total Raised</span>
          </div>
          <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">${totalDonations.toLocaleString()}</p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-green-900 dark:text-green-100">Average/Month</span>
          </div>
          <p className="text-2xl font-bold text-green-900 dark:text-green-100">${Math.round(avgDonations).toLocaleString()}</p>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-900 dark:text-purple-100">Growth Rate</span>
          </div>
          <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">+23%</p>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Monthly Breakdown</h4>
        {data.slice(-3).map((item, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">{item.month} 2024</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{item.projects} projects funded</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">${item.donations.toLocaleString()}</p>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-green-500" />
                <span className="text-xs text-green-600 dark:text-green-400">+12%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}