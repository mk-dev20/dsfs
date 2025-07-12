import { Bell, Search } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

interface TopbarProps {
  title: string
  role: 'student' | 'donor'
}

export function Topbar({ title, role }: TopbarProps) {
  const userName = role === 'student' ? 'John Doe' : 'Sarah Johnson'
  const userInitials = userName.split(' ').map(n => n[0]).join('')

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-3 sm:px-6 py-3 sm:py-4 sticky top-0 z-20 backdrop-blur-sm bg-white/95 dark:bg-gray-900/95">
      <div className="flex items-center justify-between">
        {/* Mobile: DSFS Title + Tagline | Desktop: Page Title */}
        <div className="flex items-center space-x-4 min-w-0 flex-1">
          <div className="block lg:hidden">
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">DSFS</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">Decentralized Student Funding</p>
          </div>
          <h1 className="hidden lg:block text-xl sm:text-2xl font-bold text-gray-900 dark:text-white truncate">{title}</h1>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Search - Hidden on mobile */}
          <div className="hidden md:block relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-48 lg:w-64 pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 focus:w-72"
            />
          </div>

          {/* Notifications */}
          <button className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105">
            <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-300" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
          </button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* User Avatar - Mobile optimized */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-white font-medium text-sm">{userInitials}</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-gray-900 dark:text-white">{userName}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{role}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}