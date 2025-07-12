import React from 'react';
import { PageTransition } from '../../../components/PageTransition';
import { Sparkles, Users, Shield, TrendingUp, Globe, Heart, Award, Target } from 'lucide-react';

export default function StudentAboutPage() {
  const features = [
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Connect with a global network of students and supporters who believe in the power of education.',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'All transactions are secured and transparent through Stellar blockchain technology.',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/20'
    },
    {
      icon: TrendingUp,
      title: 'Track Progress',
      description: 'Monitor your funding progress with detailed analytics and real-time updates.',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access funding opportunities from donors worldwide, breaking geographical barriers.',
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-100 dark:bg-orange-900/20'
    }
  ];

  const stats = [
    { label: 'Students Funded', value: '2,500+', icon: Users },
    { label: 'Projects Completed', value: '1,200+', icon: Target },
    { label: 'Total Raised', value: '$850K+', icon: Heart },
    { label: 'Success Rate', value: '94%', icon: Award }
  ];

  return (
    <PageTransition>
      <div className="space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">About DSFS</h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Decentralized Student Funding System empowers students to showcase their academic projects 
            and receive funding from a global community of supporters.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            To democratize access to educational funding by creating a transparent, secure, and efficient 
            platform where students can present their innovative projects and connect with donors who 
            share their vision for advancing education and technology.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 text-center border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
              <stat.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
              <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Why Choose DSFS?</h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200 hover:scale-105">
                <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">How It Works</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Create Project</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Showcase your academic project with detailed descriptions and goals.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 dark:text-green-400 font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Get Discovered</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Donors explore and find projects that align with their interests.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 dark:text-purple-400 font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Receive Funding</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Get secure donations through blockchain technology.</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Questions?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We're here to help you succeed. Reach out to our support team anytime.
          </p>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105">
            Contact Support
          </button>
        </div>
      </div>
    </PageTransition>
  );
}