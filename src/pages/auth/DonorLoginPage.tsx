import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, Heart, Shield, Globe, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function DonorLoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock login - in real app, this would authenticate
    navigate('/dashboard/donor/home')
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white dark:bg-gray-900">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome Back, Donor
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Continue making a difference in students' lives
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field pl-11"
                  placeholder="your.email@domain.com"
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
              <Link to="#" className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="btn-primary w-full">
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              New to DSFS?{' '}
              <Link to="/register/donor" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 font-medium">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Info Section */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-pink-600 to-red-700 p-12 items-center justify-center">
        <div className="max-w-lg text-white">
          <div className="mb-8">
            <Globe className="w-12 h-12 text-pink-200 mb-4" />
            <h3 className="text-3xl font-bold mb-4">Make Education Accessible</h3>
            <p className="text-pink-100 text-lg leading-relaxed">
              Your contributions directly impact students' academic success. Every donation is tracked transparently on the blockchain.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Secure & Transparent</h4>
                <p className="text-pink-100 text-sm">All transactions are recorded on Stellar blockchain for complete transparency and security.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Track Your Impact</h4>
                <p className="text-pink-100 text-sm">See exactly how your donations are helping students achieve their academic goals.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-pink-100 text-sm">Community Impact</span>
              <span className="text-white font-bold">$127,450</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2 mb-2">
              <div className="bg-white h-2 rounded-full" style={{ width: '73%' }}></div>
            </div>
            <p className="text-pink-100 text-xs">Total donated by our amazing donor community</p>
          </div>
        </div>
      </div>
    </div>
  )
}