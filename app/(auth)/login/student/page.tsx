'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, Lock, Eye, EyeOff, GraduationCap, Sparkles, TrendingUp, Users } from 'lucide-react'
import Link from 'next/link'

export default function StudentLoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock login - in real app, this would authenticate
    router.push('/dashboard/student/home')
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white dark:bg-gray-900">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="mb-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm">
              <strong>Test Login:</strong> <br />
              email: <span className="font-mono">testuser@gmail.com</span><br />
              pass: <span className="font-mono">test254</span>
            </div>
            <div className="w-16 h-16 bg-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome Back, Student
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Sign in to your DSFS student account
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                School Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field pl-11"
                  placeholder="your.email@university.ac.ke"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pl-11 pr-11"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">Remember me</span>
              </label>
              <Link href="#" className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="btn-primary w-full">
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              Don't have an account?{' '}
              <Link href="/register/student" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 font-medium">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Info Section */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary-800 to-primary-900 p-12 items-center justify-center">
        <div className="max-w-lg text-white">
          <div className="mb-8">
            <Sparkles className="w-12 h-12 text-blue-200 mb-4" />
            <h3 className="text-3xl font-bold mb-4">Showcase Your Academic Excellence</h3>
            <p className="text-blue-100 text-lg leading-relaxed">
              Join thousands of students who are getting funded for their innovative projects through our transparent blockchain platform.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Track Your Growth</h4>
                <p className="text-blue-100 text-sm">Monitor donations, project views, and funding progress with detailed analytics.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Connect with Donors</h4>
                <p className="text-blue-100 text-sm">Build relationships with supporters who believe in your educational journey.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
            <p className="text-sm text-blue-100 italic">
              "DSFS helped me raise $2,500 for my final year project. The platform made it easy to showcase my work and connect with amazing donors!"
            </p>
            <p className="text-blue-200 text-sm mt-2 font-medium">- Sarah K., Computer Science Student</p>
          </div>
        </div>
      </div>
    </div>
  )
}