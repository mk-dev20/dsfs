'use client'

import { useState } from 'react'
import { ProjectCard } from '@/app/components/project-card'
import { Plus, Search, Edit, Trash2, Eye } from 'lucide-react'

// Mock student projects
const studentProjects = [
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
    status: 'active'
  },
  {
    id: '2',
    title: 'Blockchain Voting System',
    description: 'Developing a secure and transparent voting system using blockchain technology for student elections.',
    student: {
      name: 'John Doe',
      school: 'University of Nairobi'
    },
    category: 'Computer Science',
    fundingGoal: 3000,
    currentFunding: 3000,
    image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=500',
    createdAt: '2024-01-10',
    likes: 67,
    comments: 23,
    views: 1234,
    status: 'completed'
  },
  {
    id: '3',
    title: 'Smart Campus Navigation App',
    description: 'Creating an AR-powered mobile app to help new students navigate the university campus efficiently.',
    student: {
      name: 'John Doe',
      school: 'University of Nairobi'
    },
    category: 'Mobile Development',
    fundingGoal: 2500,
    currentFunding: 800,
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=500',
    createdAt: '2024-01-25',
    likes: 23,
    comments: 8,
    views: 456,
    status: 'draft'
  }
]

const statusColors = {
  active: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
  completed: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
  draft: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
}

export default function StudentProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')

  const filteredProjects = studentProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Projects</h1>
          <p className="text-gray-600 dark:text-gray-300">Manage and track your academic projects</p>
        </div>
        <button className="btn-primary inline-flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Create New Project</span>
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Projects</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">3</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
              <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Projects</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">1</p>
            </div>
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
              <Edit className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Completed</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">1</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
              <Trash2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search your projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
        </div>

        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="card p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Project Image */}
              <div className="lg:w-48 h-32 lg:h-auto rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status as keyof typeof statusColors]}`}>
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Funding</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      ${project.currentFunding} / ${project.fundingGoal}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Views</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{project.views}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Likes</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{project.likes}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Comments</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{project.comments}</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 dark:text-gray-300">Progress</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {((project.currentFunding / project.fundingGoal) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((project.currentFunding / project.fundingGoal) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <button className="btn-primary text-sm px-4 py-2">
                    View Details
                  </button>
                  <button className="btn-secondary text-sm px-4 py-2">
                    Edit Project
                  </button>
                  {project.status === 'active' && (
                    <button className="btn-secondary text-sm px-4 py-2">
                      Share Project
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Plus className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No projects found</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            {searchTerm ? 'Try adjusting your search terms.' : 'Create your first project to get started with fundraising.'}
          </p>
          <button className="btn-primary inline-flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Create New Project</span>
          </button>
        </div>
      )}
    </div>
  )
}