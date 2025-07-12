'use client'

import { Heart, MessageCircle, Share2, Eye, Calendar, User } from 'lucide-react'
import { useState } from 'react'

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    student: {
      name: string
      school: string
      avatar?: string
    }
    category: string
    fundingGoal: number
    currentFunding: number
    image: string
    createdAt: string
    likes: number
    comments: number
    views: number
  }
  showActions?: boolean
}

export function ProjectCard({ project, showActions = true }: ProjectCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(project.likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1)
  }

  const fundingPercentage = (project.currentFunding / project.fundingGoal) * 100

  return (
    <div className="card overflow-hidden group">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary-800 text-white text-xs font-medium rounded-full">
            {project.category}
          </span>
        </div>
        <div className="absolute top-4 right-4 flex space-x-2">
          <div className="flex items-center space-x-1 bg-black/50 text-white px-2 py-1 rounded-lg text-xs">
            <Eye className="w-3 h-3" />
            <span>{project.views}</span>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Student Info */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-medium text-gray-900 dark:text-white">{project.student.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{project.student.school}</p>
          </div>
          <div className="ml-auto flex items-center space-x-1 text-gray-500 dark:text-gray-400 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{new Date(project.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Project Title & Description */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Funding Progress */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Funding Progress
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {fundingPercentage.toFixed(1)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
            <div
              className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(fundingPercentage, 100)}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-300">
              ${project.currentFunding.toLocaleString()} raised
            </span>
            <span className="text-gray-500 dark:text-gray-400">
              Goal: ${project.fundingGoal.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Actions */}
        {showActions && (
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                  isLiked
                    ? 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                <span className="text-sm font-medium">{likeCount}</span>
              </button>

              <button className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">{project.comments}</span>
              </button>

              <button className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            <button className="btn-primary text-sm px-4 py-2">
              Donate Now
            </button>
          </div>
        )}
      </div>
    </div>
  )
}