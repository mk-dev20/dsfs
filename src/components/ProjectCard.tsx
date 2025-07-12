import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Target, Calendar, User } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    author: string;
    category: string;
    goal: number;
    raised: number;
    deadline: string;
    likes: number;
    comments: number;
  };
  onLike?: (id: string) => void;
  onComment?: (id: string) => void;
  onShare?: (id: string) => void;
  onDonate?: (id: string) => void;
}

export function ProjectCard({ project, onLike, onComment, onShare, onDonate }: ProjectCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const progressPercentage = (project.raised / project.goal) * 100;

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike?.(project.id);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 dark:bg-gray-800/90 px-2 py-1 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
            {project.title}
          </h3>
        </div>

        {/* Author */}
        <div className="flex items-center gap-2 mb-3">
          <User className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600 dark:text-gray-400">{project.author}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              ${project.raised.toLocaleString()} raised
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {progressPercentage.toFixed(0)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            />
          </div>
          <div className="flex items-center justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Target className="w-3 h-3" />
              <span>Goal: ${project.goal.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{project.deadline}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1 text-sm transition-colors ${
                isLiked
                  ? 'text-red-500 hover:text-red-600'
                  : 'text-gray-500 hover:text-red-500 dark:text-gray-400'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              <span>{project.likes + (isLiked ? 1 : 0)}</span>
            </button>

            <button
              onClick={() => onComment?.(project.id)}
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500 dark:text-gray-400 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{project.comments}</span>
            </button>

            <button
              onClick={() => onShare?.(project.id)}
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-green-500 dark:text-gray-400 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>

          <button
            onClick={() => onDonate?.(project.id)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}