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
  const [isCollapsed, setIsCollapsed] = useState(false)
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
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center"
      >
        {isCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
      </button>

      {/* Overlay for mobile */}
      {!isCollapsed && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsCollapsed(true)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-transform duration-300 ease-in-out ${
        isCollapsed && 'lg:transform lg:translate-x-0 -translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-800 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">DSFS</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{role} Portal</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors duration-200 ${
                    isActive
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => setIsCollapsed(true)}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <button className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 w-full">
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}