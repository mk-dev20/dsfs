import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Target, Users } from 'lucide-react';

interface AnalyticsChartProps {
  data?: Array<{
    name: string;
    value: number;
  }>;
  title?: string;
  type?: 'line' | 'bar';
  color?: string;
}

export function AnalyticsChart({ 
  data = [
    { name: 'Jan', value: 450 },
    { name: 'Feb', value: 680 },
    { name: 'Mar', value: 920 },
    { name: 'Apr', value: 1200 },
    { name: 'May', value: 1450 },
    { name: 'Jun', value: 1680 }
  ],
  title = "Analytics Overview",
  type = 'bar',
  color = '#1E40AF'
}: AnalyticsChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));
  const totalValue = data.reduce((sum, d) => sum + d.value, 0);
  const avgValue = totalValue / data.length;
  const growth = data.length > 1 ? ((data[data.length - 1].value - data[0].value) / data[0].value) * 100 : 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-4 sm:p-6">
        {/* Chart Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Monthly performance overview</p>
          </div>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            {growth >= 0 ? (
              <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-600 dark:text-red-400" />
            )}
            <span className={`text-sm font-medium ${
              growth >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            }`}>
              {growth >= 0 ? '+' : ''}{growth.toFixed(1)}% growth
            </span>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl mb-6">
          <div className="flex items-end justify-between h-32 sm:h-40 gap-2">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col items-center flex-1 group">
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-t-lg relative overflow-hidden">
                  <div
                    className="bg-gradient-to-t from-primary-600 to-primary-400 rounded-t-lg transition-all duration-700 ease-out group-hover:from-primary-500 group-hover:to-primary-300"
                    style={{
                      height: `${(item.value / maxValue) * 100}%`,
                      minHeight: '8px'
                    }}
                  />
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    ${item.value.toLocaleString()}
                  </div>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400 mt-2 font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-900 dark:text-blue-100">Total</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-blue-900 dark:text-blue-100">
              ${totalValue.toLocaleString()}
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-sm font-medium text-green-900 dark:text-green-100">Average</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-green-900 dark:text-green-100">
              ${Math.round(avgValue).toLocaleString()}
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-purple-900 dark:text-purple-100">Peak</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-purple-900 dark:text-purple-100">
              ${maxValue.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Monthly Breakdown</h4>
          <div className="space-y-2">
            {data.slice(-3).map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{item.name} 2024</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Monthly performance</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    ${item.value.toLocaleString()}
                  </p>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-green-500" />
                    <span className="text-xs text-green-600 dark:text-green-400">+12%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}