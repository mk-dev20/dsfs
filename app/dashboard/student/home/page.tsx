'use client'

import { WalletActions } from '@/app/components/wallet-actions'
import { AnalyticsChart } from '@/app/components/analytics-chart'
import { ProjectCard } from '@/app/components/project-card'
import { TrendingUp, DollarSign, Eye, Heart } from 'lucide-react'

// Mock data
const monthlyData = [
  { name: 'Jan', value: 150 },
  { name: 'Feb', value: 280 },
  { name: 'Mar', value: 420 },
  { name: 'Apr', value: 350 },
  { name: 'May', value: 580 },
  { name: 'Jun', value: 750 },
]

const projectViewsData = [
  { name: 'Week 1', value: 120 },
  { name: 'Week 2', value: 180 },
  { name: 'Week 3', value: 250 },
  { name: 'Week 4', value: 200 },
]

const recentProject = {
  id: '1',
  title: 'AI-Powered Education Platform',
  description: 'Building an intelligent tutoring system that adapts to individual learning styles using machine learning algorithms.',
  student: {
    name: 'John Doe',
    school: 'University of Nairobi'
  },
  category: 'Computer Science',
  fundingGoal: 5000,
  currentFunding: 3200,
  image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=500',
  createdAt: '2024-01-15',
  likes: 45,
  comments: 12,
  views: 892
}

export default function StudentHomePage() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Raised</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">$2,450</p>
              <p className="text-sm text-green-600 dark:text-green-400">+12% from last month</p>
            </div>
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Projects</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">3</p>
              <p className="text-sm text-blue-600 dark:text-blue-400">2 funded, 1 ongoing</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Views</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">1,234</p>
              <p className="text-sm text-purple-600 dark:text-purple-400">+8% this week</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
              <Eye className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Likes</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">567</p>
              <p className="text-sm text-red-600 dark:text-red-400">+15 today</p>
            </div>
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Charts */}
        <div className="lg:col-span-2 space-y-6">
          <AnalyticsChart
            data={monthlyData}
            title="Monthly Donations"
            type="line"
            color="#1E3A8A"
          />
          
          <AnalyticsChart
            data={projectViewsData}
            title="Project Views (Last 4 Weeks)"
            type="bar"
            color="#059669"
          />
        </div>

        {/* Right Column - Wallet Actions */}
        <div className="space-y-6">
          <WalletActions role="student" balance={2450} />
          
          {/* Recent Activity */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Received $150 donation</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                  <Eye className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Project viewed 25 times</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">5 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Got 8 new likes</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">1 day ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Project */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Your Featured Project</h2>
        <div className="max-w-md">
          <ProjectCard project={recentProject} showActions={false} />
        </div>
      </div>
    </div>
  )
}