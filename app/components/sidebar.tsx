'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
import { clsx } from 'clsx'

interface SidebarProps {
  role: 'student' | 'donor'
}

export function Sidebar({ role }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const pathname = usePathname()

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
      {/* Hamburger menu on mobile, right side of topbar (handled in topbar, not here) */}

      {/* Overlay for mobile */}
      {!isCollapsed && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsCollapsed(true)}
        />
      )}

      {/* Sidebar */}
      <div className={clsx(
        'fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-transform duration-300 ease-in-out',
        isCollapsed && 'lg:transform lg:translate-x-0 -translate-x-full'
      )}>
        <div className="flex flex-col h-full overflow-y-auto">
          {/* User Info Only */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-800 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold text-gray-900 dark:text-white">John Doe</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">Student</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    'flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors duration-200',
                    isActive
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  )}
                  onClick={() => setIsCollapsed(true)}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>
          <div className="border-t border-gray-200 dark:border-gray-700 mx-4" />
          <div className="p-4">
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