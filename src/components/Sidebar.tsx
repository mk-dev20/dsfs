import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  FolderOpen, 
  Heart, 
  Info, 
  HelpCircle, 
  User, 
  Search, 
  PlusCircle, 
  Menu,
  X,
  Sparkles,
  LogOut
} from 'lucide-react'

interface SidebarProps {
  role: 'student' | 'donor'
}

export function Sidebar({ role }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const userName = role === 'student' ? 'John Doe' : 'Sarah Johnson'
  const userInitials = userName.split(' ').map(n => n[0]).join('')

  const studentNav = [
    { icon: Home, label: 'Home', href: '/dashboard/student/home' },
    { icon: FolderOpen, label: 'Projects', href: '/dashboard/student/projects' },
    { icon: Heart, label: 'Donations', href: '/dashboard/student/donations' },
    { icon: Info, label: 'About DSFS', href: '/dashboard/student/about' },
    { icon: HelpCircle, label: 'Support', href: '/dashboard/student/support' },
    { icon: User, label: 'Profile', href: '/dashboard/student/profile' },
  ]

  const donorNav = [
    { icon: Home, label: 'Home', href: '/dashboard/donor/home' },
    { icon: Search, label: 'Explore', href: '/dashboard/donor/explore' },
    { icon: PlusCircle, label: 'Donate', href: '/dashboard/donor/donate' },
    { icon: Info, label: 'About DSFS', href: '/dashboard/donor/about' },
    { icon: HelpCircle, label: 'Support', href: '/dashboard/donor/support' },
    { icon: User, label: 'Profile', href: '/dashboard/donor/profile' },
  ]

  const navigation = role === 'student' ? studentNav : donorNav

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 hover:shadow-xl"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 z-40 w-64 sm:w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="flex flex-col h-full">
          {/* User Profile Section */}
          <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-medium text-sm sm:text-base">{userInitials}</span>
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">{userName}</h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{role}</p>
                </div>
              </div>
              {/* Close button for mobile */}
              <button
                onClick={() => setIsOpen(false)}
                className="lg:hidden p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            {/* DSFS Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-800 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900 dark:text-white">DSFS</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">{role} Portal</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-3 sm:p-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`group flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 shadow-sm'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className={`w-5 h-5 transition-transform duration-200 ${
                    isActive ? 'scale-110' : 'group-hover:scale-105'
                  }`} />
                  <span className="font-medium text-sm sm:text-base">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Logout Section */}
          <div className="p-3 sm:p-4 border-t border-gray-200 dark:border-gray-700">
            <button className="group flex items-center space-x-3 px-3 py-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200 w-full">
              <LogOut className="w-5 h-5 group-hover:scale-105 transition-transform duration-200" />
              <span className="font-medium text-sm sm:text-base">Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}