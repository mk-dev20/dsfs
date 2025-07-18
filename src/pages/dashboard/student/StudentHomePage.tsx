import React from 'react';
import { WalletActions } from '../../../components/WalletActions';
import { AnalyticsChart } from '../../../components/AnalyticsChart';
import { ProjectCard } from '../../../components/ProjectCard';
import { PageTransition } from '../../../components/PageTransition';
import { TrendingUp, DollarSign, Eye, Heart, Plus, ArrowUpRight } from 'lucide-react';

// Mock data
const monthlyData = [
  { name: 'Jan', value: 150 },
  { name: 'Feb', value: 280 },
  { name: 'Mar', value: 420 },
  { name: 'Apr', value: 350 },
  { name: 'May', value: 580 },
  { name: 'Jun', value: 750 },
];

const projectViewsData = [
  { name: 'Week 1', value: 120 },
  { name: 'Week 2', value: 180 },
  { name: 'Week 3', value: 250 },
  { name: 'Week 4', value: 200 },
];

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
};

export default function StudentHomePage() {
  const stats = [
    {
      label: 'Total Raised',
      value: '$2,450',
      icon: DollarSign,
      change: '+12% from last month',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/20'
    },
    {
      label: 'Active Projects',
      value: '3',
      icon: TrendingUp,
      change: '2 funded, 1 ongoing',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
      label: 'Total Views',
      value: '1,234',
      icon: Eye,
      change: '+8% this week',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20'
    },
    {
      label: 'Total Likes',
      value: '567',
      icon: Heart,
      change: '+15 today',
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-100 dark:bg-red-900/20'
    }
  ];

  const recentActivity = [
    { type: 'donation', message: 'Received $150 donation', time: '2 hours ago', icon: DollarSign },
    { type: 'view', message: 'Project viewed 25 times', time: '5 hours ago', icon: Eye },
    { type: 'like', message: 'Got 8 new likes', time: '1 day ago', icon: Heart },
  ];

  return (
    <PageTransition>
      <div className="space-y-4 sm:space-y-6 px-2 sm:px-0">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-primary-800 to-blue-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between">
            <div className="mb-4 lg:mb-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Welcome back, John!</h1>
              <p className="text-blue-100 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">
                Your projects have received amazing support from the community.
              </p>
              <button className="bg-white text-primary-800 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2 text-sm sm:text-base">
                <Plus className="w-4 h-4" />
                <span>Create New Project</span>
              </button>
            </div>
            <div className="hidden lg:block">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white/10 rounded-xl lg:rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-3 sm:p-4 lg:p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{stat.label}</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</p>
                  <p className={`text-xs ${stat.color}`}>{stat.change}</p>
                </div>
                <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${stat.bgColor} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <stat.icon className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <AnalyticsChart
              data={monthlyData}
              title="Monthly Donations"
              type="bar"
              color="#1E40AF"
            />
            
            <AnalyticsChart
              data={projectViewsData}
              title="Project Views (Last 4 Weeks)"
              type="bar"
              color="#059669"
            />
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-6">
            <WalletActions role="student" balance={2450} />
            
            {/* Recent Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
                <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 text-xs sm:text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 sm:p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
                      activity.type === 'donation' ? 'bg-green-100 dark:bg-green-900/20' :
                      activity.type === 'view' ? 'bg-blue-100 dark:bg-blue-900/20' :
                      'bg-purple-100 dark:bg-purple-900/20'
                    }`}>
                      <activity.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${
                        activity.type === 'donation' ? 'text-green-600 dark:text-green-400' :
                        activity.type === 'view' ? 'text-blue-600 dark:text-blue-400' :
                        'text-purple-600 dark:text-purple-400'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate">{activity.message}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Project */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Your Featured Project</h2>
            <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 font-medium inline-flex items-center space-x-1 text-sm sm:text-base">
              <span>Manage Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="max-w-sm sm:max-w-md">
            <ProjectCard project={recentProject} showActions={false} />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}