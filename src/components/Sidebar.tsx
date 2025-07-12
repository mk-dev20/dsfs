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
        className="lg:hidden fixed top-4 left-4 z-50 w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 hover:shadow-xl"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 z-40 w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">DSFS</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{role} Portal</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 shadow-sm'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className={`w-5 h-5 transition-transform duration-200 ${
                    isActive ? 'scale-110' : 'group-hover:scale-105'
                  }`} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <button className="group flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200 w-full">
              <LogOut className="w-5 h-5 group-hover:scale-105 transition-transform duration-200" />
              <span className="font-medium">Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}