'use client'

import { WalletActions } from '@/app/components/wallet-actions'
import { AnalyticsChart } from '@/app/components/analytics-chart'
import { ProjectCard } from '@/app/components/project-card'
import { TrendingUp, DollarSign, Users, Heart, ArrowUpRight } from 'lucide-react'

// Mock data
const donationData = [
  { name: 'Jan', value: 500 },
  { name: 'Feb', value: 750 },
  { name: 'Mar', value: 1200 },
  { name: 'Apr', value: 900 },
  { name: 'May', value: 1600 },
  { name: 'Jun', value: 2100 },
]

const impactData = [
  { name: 'Computer Science', value: 8 },
  { name: 'Engineering', value: 5 },
  { name: 'Medicine', value: 3 },
  { name: 'Business', value: 2 },
]

const featuredProjects = [
  {
    id: '1',
    title: 'Smart Agriculture IoT System',
    description: 'Developing sensors and analytics to help small-scale farmers optimize crop yields using IoT technology.',
    student: {
      name: 'Mary Wanjiku',
      school: 'Jomo Kenyatta University'
    },
    category: 'Engineering',
    fundingGoal: 3500,
    currentFunding: 1200,
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=500',
    createdAt: '2024-01-20',
    likes: 32,
    comments: 8,
    views: 456
  },
  {
    id: '2',
    title: 'Mobile Health App for Rural Areas',
    description: 'Building a mobile application that connects rural patients with healthcare providers via telemedicine.',
    student: {
      name: 'David Kiprotich',
      school: 'University of Nairobi'
    },
    category: 'Medicine',
    fundingGoal: 4000,
    currentFunding: 2800,
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=500',
    createdAt: '2024-01-18',
    likes: 67,
    comments: 15,
    views: 723
  }
]

export default function DonorHomePage() {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-primary-800 to-blue-700 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Sarah!</h1>
            <p className="text-blue-100 text-lg mb-4">
              Your contributions have helped 18 students achieve their academic goals.
            </p>
            <button className="bg-white text-primary-800 px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2">
              <span>Discover New Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="hidden lg:block">
            <div className="w-32 h-32 bg-white/10 rounded-2xl flex items-center justify-center">
              <Heart className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Donated</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">$5,280</p>
              <p className="text-sm text-green-600 dark:text-green-400">+22% this month</p>
            </div>
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Students Helped</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">18</p>
              <p className="text-sm text-blue-600 dark:text-blue-400">Across 8 projects</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Projects Funded</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">8</p>
              <p className="text-sm text-purple-600 dark:text-purple-400">6 completed successfully</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Impact Score</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">94%</p>
              <p className="text-sm text-red-600 dark:text-red-400">Based on outcomes</p>
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
            data={donationData}
            title="Your Donation History"
            type="line"
            color="#1E3A8A"
          />
          
          <AnalyticsChart
            data={impactData}
            title="Impact by Category"
            type="bar"
            color="#DC2626"
          />
        </div>

        {/* Right Column - Wallet Actions */}
        <div className="space-y-6">
          <WalletActions role="donor" balance={1250} />
          
          {/* Quick Actions */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full btn-primary text-left">
                Explore New Projects
              </button>
              <button className="w-full btn-secondary text-left">
                View Donation History
              </button>
              <button className="w-full btn-secondary text-left">
                Manage Notifications
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Projects */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Recommended for You</h2>
          <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 font-medium">
            View All
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}