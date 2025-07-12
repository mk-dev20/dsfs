import React, { useState } from 'react';
import { PageTransition } from '../../../components/PageTransition';
import { ProjectCard } from '../../../components/ProjectCard';
import { Heart, Search, Filter, TrendingUp, Target, Clock } from 'lucide-react';

export default function DonorDonatePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [donationAmount, setDonationAmount] = useState('');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const featuredProjects = [
    {
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
      views: 892,
      urgent: true
    },
    {
      id: '2',
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
      views: 456,
      urgent: false
    },
    {
      id: '3',
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
      views: 723,
      urgent: false
    }
  ];

  const quickDonationAmounts = [25, 50, 100, 250, 500];
  const categories = ['all', 'Computer Science', 'Engineering', 'Medicine', 'Business'];

  const filteredProjects = featuredProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDonate = (projectId: string) => {
    setSelectedProject(projectId);
    // Here you would typically open a donation modal or navigate to donation flow
  };

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
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">Make a Donation</h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Support innovative student projects and help shape the future of education and technology.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 text-center border border-gray-200 dark:border-gray-700">
            <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
            <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">$127K+</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Raised</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 text-center border border-gray-200 dark:border-gray-700">
            <Target className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
            <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">89</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Active Projects</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 text-center border border-gray-200 dark:border-gray-700">
            <Clock className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
            <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">12</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Ending Soon</p>
          </div>
        </div>

        {/* Quick Donation */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Donation</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Make a general donation to support the most urgent projects on the platform.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-6">
            {quickDonationAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => setDonationAmount(amount.toString())}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  donationAmount === amount.toString()
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:shadow-md'
                }`}
              >
                ${amount}
              </button>
            ))}
            <input
              type="number"
              placeholder="Custom"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 w-24"
            />
          </div>

          <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105">
            Donate ${donationAmount || '0'} Now
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects to support..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Featured Projects */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Featured Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="relative">
                {project.urgent && (
                  <div className="absolute top-4 left-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium animate-pulse">
                    Urgent
                  </div>
                )}
                <ProjectCard 
                  project={project} 
                  onDonate={handleDonate}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Donation Impact */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Your Donation Impact</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">$25</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Basic Support</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Covers basic project materials and resources for one week.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 dark:text-green-400 font-bold text-xl">$100</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Significant Impact</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Funds essential equipment or software licenses for the project.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 dark:text-purple-400 font-bold text-xl">$500</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Major Contribution</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Enables project completion and potential scaling to help more people.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-6 sm:p-8 text-white">
          <Heart className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-4">Every Donation Counts</h2>
          <p className="mb-6 text-blue-100">
            Your support helps students turn their innovative ideas into reality and creates lasting impact in their communities.
          </p>
          <button className="bg-white text-primary-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors duration-200">
            Browse All Projects
          </button>
        </div>
      </div>
    </PageTransition>
  );
}