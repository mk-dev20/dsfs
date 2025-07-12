import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Target, Calendar, User, Eye } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    student?: {
      name: string;
      school: string;
    };
    author?: string;
    category: string;
    fundingGoal?: number;
    currentFunding?: number;
    goal?: number;
    raised?: number;
    deadline?: string;
    createdAt?: string;
    likes: number;
    comments: number;
    views?: number;
  };
  onLike?: (id: string) => void;
  onComment?: (id: string) => void;
  onShare?: (id: string) => void;
  onDonate?: (id: string) => void;
  showActions?: boolean;
}

export function ProjectCard({ project, onLike, onComment, onShare, onDonate, showActions = true }: ProjectCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  
  // Handle different prop naming conventions
  const goal = project.fundingGoal || project.goal || 0;
  const raised = project.currentFunding || project.raised || 0;
  const authorName = project.student?.name || project.author || 'Unknown';
  const school = project.student?.school || '';
  const date = project.createdAt || project.deadline || '';
  
  const progressPercentage = goal > 0 ? (raised / goal) * 100 : 0;

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike?.(project.id);
  };

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
      {/* Project Image */}
      <div className="relative h-48 sm:h-56 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm">
            {project.category}
          </span>
        </div>
        {project.views && (
          <div className="absolute top-4 left-4">
            <div className="flex items-center space-x-1 bg-black/50 text-white px-2 py-1 rounded-lg text-xs backdrop-blur-sm">
              <Eye className="w-3 h-3" />
              <span>{project.views}</span>
            </div>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-4 sm:p-6">
        {/* Author Info */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-medium text-gray-900 dark:text-white text-sm sm:text-base truncate">{authorName}</p>
            {school && <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">{school}</p>}
          </div>
          {date && (
            <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 text-xs">
              <Calendar className="w-3 h-3" />
              <span className="hidden sm:inline">{new Date(date).toLocaleDateString()}</span>
            </div>
          )}
        </div>

        {/* Project Title & Description */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Progress Section */}
        {goal > 0 && (
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Funding Progress
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {progressPercentage.toFixed(1)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3">
              <div
                className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${Math.min(progressPercentage, 100)}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-300 font-medium">
                ${raised.toLocaleString()} raised
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                Goal: ${goal.toLocaleString()}
              </span>
            </div>
          </div>
        )}

        {/* Actions */}
        {showActions && (
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-1 sm:space-x-4">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 rounded-lg transition-all duration-200 ${
                  isLiked
                    ? 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                <span className="text-sm font-medium hidden sm:inline">{project.likes + (isLiked ? 1 : 0)}</span>
              </button>

              <button
                onClick={() => onComment?.(project.id)}
                className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium hidden sm:inline">{project.comments}</span>
              </button>

              <button
                onClick={() => onShare?.(project.id)}
                className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <Share2 className="w-4 h-4" />
                <span className="text-sm font-medium hidden sm:inline">Share</span>
              </button>
            </div>

            <button
              onClick={() => onDonate?.(project.id)}
              className="bg-primary-600 hover:bg-primary-700 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md"
            >
              Donate
            </button>
          </div>
        )}
      </div>
    </div>
  );
}