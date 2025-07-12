import React from 'react';
import { WalletActions } from '../../../components/WalletActions';
import { AnalyticsChart } from '../../../components/AnalyticsChart';
import { ProjectCard } from '../../../components/ProjectCard';
import { PageTransition } from '../../../components/PageTransition';
import { TrendingUp, DollarSign, Users, Heart, ArrowUpRight } from 'lucide-react';

// Mock data
const donationData = [
  { name: 'Jan', value: 500 },
  { name: 'Feb', value: 750 },
  { name: 'Mar', value: 1200 },
  { name: 'Apr', value: 900 },
  { name: 'May', value: 1600 },
  { name: 'Jun', value: 2100 },
];

const impactData = [
  { name: 'Computer Science', value: 8 },
  { name: 'Engineering', value: 5 },
  { name: 'Medicine', value: 3 },
  { name: 'Business', value: 2 },
];

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
];

export default function DonorHomePage() {
  const stats = [
    {
      label: 'Total Donated',
      value: '$5,280',
      icon: DollarSign,
      change: '+22% this month',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/20'
    },
    {
      label: 'Students Helped',
      value: '18',
      icon: Users,
      change: 'Across 8 projects',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
      label: 'Projects Funded',
      value: '8',
      icon: TrendingUp,
      change: '6 completed successfully',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20'
    },
    {
      label: 'Impact Score',
      value: '94%',
      icon: Heart,
      change: 'Based on outcomes',
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-100 dark:bg-red-900/20'
    }
  ];

  return (
    <PageTransition>
      <div className="space-y-4 sm:space-y-6 px-2 sm:px-0">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-primary-800 to-blue-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between">
            <div className="mb-4 lg:mb-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Welcome back, Sarah!</h1>
              <p className="text-blue-100 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">
                Your contributions have helped 18 students achieve their academic goals.
              </p>
              <button className="bg-white text-primary-800 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2 text-sm sm:text-base">
                <span>Discover New Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <div className="hidden lg:block">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white/10 rounded-xl lg:rounded-2xl flex items-center justify-center">
                <Heart className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
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
              data={donationData}
              title="Your Donation History"
              type="bar"
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
          <div className="space-y-4 sm:space-y-6">
            <WalletActions role="donor" balance={1250} />
            
            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-sm sm:text-base">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100">Explore Projects</h4>
                  <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-300">Discover new student projects to support</p>
                </button>
                <button className="w-full text-left p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors text-sm sm:text-base">
                  <h4 className="font-semibold text-green-900 dark:text-green-100">Make a Donation</h4>
                  <p className="text-xs sm:text-sm text-green-700 dark:text-green-300">Support a student's educational journey</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Projects */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Recommended for You</h2>
            <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 font-medium text-sm sm:text-base">
              View All
            </button>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}