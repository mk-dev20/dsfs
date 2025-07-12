import React, { useState } from 'react';
import { ProjectCard } from '../../../components/ProjectCard';
import { Search, Filter, TrendingUp, Clock, Target } from 'lucide-react';

export default function DonorExplorePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');

  const projects = [
    {
      id: '1',
      title: 'AI-Powered Study Assistant',
      description: 'Building an intelligent tutoring system using machine learning to help students learn more effectively.',
      category: 'Technology',
      targetAmount: 5000,
      raisedAmount: 3200,
      supporters: 45,
      daysLeft: 12,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'active',
      studentName: 'Alex Johnson',
      university: 'MIT'
    },
    {
      id: '2',
      title: 'Sustainable Campus Initiative',
      description: 'Creating a comprehensive recycling and sustainability program for our university campus.',
      category: 'Environment',
      targetAmount: 3000,
      raisedAmount: 2100,
      supporters: 67,
      daysLeft: 8,
      image: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'active',
      studentName: 'Maria Garcia',
      university: 'Stanford'
    },
    {
      id: '3',
      title: 'Mobile Health App',
      description: 'Developing a mobile application to help students track their mental health and wellness.',
      category: 'Health',
      targetAmount: 4500,
      raisedAmount: 1200,
      supporters: 23,
      daysLeft: 25,
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'active',
      studentName: 'David Kim',
      university: 'Harvard'
    },
    {
      id: '4',
      title: 'Educational VR Platform',
      description: 'Creating immersive virtual reality experiences for enhanced learning in STEM subjects.',
      category: 'Technology',
      targetAmount: 6000,
      raisedAmount: 4200,
      supporters: 78,
      daysLeft: 15,
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'active',
      studentName: 'Sarah Chen',
      university: 'Caltech'
    },
    {
      id: '5',
      title: 'Community Garden Project',
      description: 'Building a sustainable community garden to provide fresh produce and education.',
      category: 'Environment',
      targetAmount: 2500,
      raisedAmount: 1800,
      supporters: 34,
      daysLeft: 20,
      image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'active',
      studentName: 'Emma Wilson',
      university: 'UC Berkeley'
    },
    {
      id: '6',
      title: 'Mental Health Support Bot',
      description: 'AI-powered chatbot to provide 24/7 mental health support for students.',
      category: 'Health',
      targetAmount: 3500,
      raisedAmount: 2800,
      supporters: 56,
      daysLeft: 10,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'active',
      studentName: 'James Rodriguez',
      university: 'NYU'
    }
  ];

  const categories = ['all', 'Technology', 'Environment', 'Health', 'Education', 'Social'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.studentName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || project.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case 'trending':
        return b.supporters - a.supporters;
      case 'newest':
        return b.daysLeft - a.daysLeft;
      case 'ending':
        return a.daysLeft - b.daysLeft;
      case 'funded':
        return (b.raisedAmount / b.targetAmount) - (a.raisedAmount / a.targetAmount);
      default:
        return 0;
    }
  });

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Explore Projects</h1>
        <p className="text-gray-600 dark:text-gray-400">Discover amazing student projects to support</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search projects, students, or universities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="trending">🔥 Trending</option>
            <option value="newest">🆕 Newest</option>
            <option value="ending">⏰ Ending Soon</option>
            <option value="funded">💰 Most Funded</option>
          </select>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Active Projects</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{sortedProjects.length}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Total Goal</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            ${sortedProjects.reduce((sum, p) => sum + p.targetAmount, 0).toLocaleString()}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-orange-600" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Avg. Days Left</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {Math.round(sortedProjects.reduce((sum, p) => sum + p.daysLeft, 0) / sortedProjects.length)}
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} showDonateButton={true} />
        ))}
      </div>

      {sortedProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">No projects found matching your criteria.</p>
          <button 
            onClick={() => {
              setSearchTerm('');
              setFilterCategory('all');
            }}
            className="mt-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}