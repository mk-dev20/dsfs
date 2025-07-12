'use client'

import { useState } from 'react'
import { ProjectCard } from '@/app/components/project-card'
import { Search, Filter, SlidersHorizontal } from 'lucide-react'

// Mock data for projects
const allProjects = [
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
    views: 892
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
    views: 456
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
    views: 723
  },
  {
    id: '4',
    title: 'Renewable Energy Management System',
    description: 'Creating a smart grid solution for efficient distribution of solar and wind energy in urban environments.',
    student: {
      name: 'Grace Muthoni',
      school: 'Kenyatta University'
    },
    category: 'Engineering',
    fundingGoal: 6000,
    currentFunding: 4200,
    image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=500',
    createdAt: '2024-01-12',
    likes: 89,
    comments: 23,
    views: 1256
  },
  {
    id: '5',
    title: 'Blockchain Supply Chain Tracker',
    description: 'Developing a transparent supply chain management system using blockchain technology for food safety.',
    student: {
      name: 'Peter Otieno',
      school: 'Moi University'
    },
    category: 'Computer Science',
    fundingGoal: 4500,
    currentFunding: 800,
    image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=500',
    createdAt: '2024-01-25',
    likes: 28,
    comments: 6,
    views: 234
  },
  {
    id: '6',
    title: 'Mental Health Support Platform',
    description: 'Creating an AI-powered mental health platform that provides accessible support and resources for students.',
    student: {
      name: 'Sarah Wangari',
      school: 'University of Nairobi'
    },
    category: 'Psychology',
    fundingGoal: 3000,
    currentFunding: 2100,
    image: 'https://images.pexels.com/photos/8434791/pexels-photo-8434791.jpeg?auto=compress&cs=tinysrgb&w=500',
    createdAt: '2024-01-22',
    likes: 54,
    comments: 18,
    views: 678
  }
]

const categories = ['All', 'Computer Science', 'Engineering', 'Medicine', 'Psychology', 'Business']
const sortOptions = ['Latest', 'Most Funded', 'Most Popular', 'Ending Soon']

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('Latest')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case 'Most Funded':
        return b.currentFunding - a.currentFunding
      case 'Most Popular':
        return b.views - a.views
      case 'Ending Soon':
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      default: // Latest
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    }
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Explore Projects</h1>
          <p className="text-gray-600 dark:text-gray-300">Discover amazing student projects to support</p>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Showing {sortedProjects.length} of {allProjects.length} projects
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search Bar */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
        </div>

        {/* Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center space-x-2 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
        >
          <SlidersHorizontal className="w-5 h-5" />
          <span>Filters</span>
        </button>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="card p-6 animate-slide-up">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-primary-800 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Sort by
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Empty State */}
      {sortedProjects.length === 0 && (
        <div className="text-center py-12">
          <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No projects found</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Try adjusting your search terms or filters to find more projects.
          </p>
        </div>
      )}
    </div>
  )
}