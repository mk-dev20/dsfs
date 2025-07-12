import React from 'react';
import { PageTransition } from '../../../components/PageTransition';
import { Heart, Users, Shield, TrendingUp, Globe, Award, Target, Sparkles } from 'lucide-react';

export default function DonorAboutPage() {
  const impactStats = [
    { label: 'Students Supported', value: '2,500+', icon: Users },
    { label: 'Projects Funded', value: '1,200+', icon: Target },
    { label: 'Total Donated', value: '$850K+', icon: Heart },
    { label: 'Success Rate', value: '94%', icon: Award }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Make Real Impact',
      description: 'Your donations directly support students\' educational journeys and innovative projects.',
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-100 dark:bg-red-900/20'
    },
    {
      icon: Shield,
      title: 'Transparent Giving',
      description: 'Track exactly how your donations are used with blockchain-powered transparency.',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/20'
    },
    {
      icon: TrendingUp,
      title: 'See Progress',
      description: 'Watch projects grow and succeed with detailed progress updates and analytics.',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Connect with students worldwide and support diverse educational initiatives.',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20'
    }
  ];

  return (
    <PageTransition>
      <div className="space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">About DSFS for Donors</h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join a community of changemakers supporting the next generation of innovators and leaders 
            through transparent, secure educational funding.
          </p>
        </div>

        {/* Mission for Donors */}
        <div className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">Your Impact Matters</h2>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            Every donation you make creates ripple effects that extend far beyond the classroom. 
            You're not just funding projects—you're investing in innovation, supporting dreams, 
            and building the future through education.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {impactStats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 text-center border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
              <stat.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
              <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Why Donate Through DSFS?</h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200 hover:scale-105">
                <div className={`w-12 h-12 ${benefit.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How Donations Work */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">How Your Donations Work</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Choose Projects</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Browse and select projects that align with your interests and values.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 dark:text-green-400 font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Secure Donation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Make donations using Stellar XLM or M-Pesa with complete security.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 dark:text-purple-400 font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Track Impact</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Follow project progress and see the real impact of your contribution.</p>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Success Stories</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300 text-sm italic mb-4">
                "Thanks to DSFS donors, I was able to complete my AI research project. The funding helped me purchase equipment and present at international conferences."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">MK</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">Mary Kiprotich</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Computer Science, University of Nairobi</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300 text-sm italic mb-4">
                "The support from the DSFS community enabled me to develop a mobile health app that's now being used in rural clinics across Kenya."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 font-bold">DM</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">David Mwangi</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Medicine, Kenyatta University</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-6 sm:p-8 text-white">
          <Sparkles className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="mb-6 text-blue-100">
            Join thousands of donors who are already changing lives through education.
          </p>
          <button className="bg-white text-primary-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors duration-200">
            Start Donating Today
          </button>
        </div>
      </div>
    </PageTransition>
  );
}