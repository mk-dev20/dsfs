import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, Lock, User, GraduationCap, Wallet, Eye, EyeOff, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function StudentRegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    school: '',
    graduationYear: '',
    walletAddress: ''
  })
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock registration - in real app, this would create account
    navigate('/dashboard/student/home')
  }

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Join DSFS as a Student
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Create your account and start showcasing your projects
          </p>
        </div>

        <div className="card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => updateFormData('firstName', e.target.value)}
                    className="input-field pl-11"
                    placeholder="John"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Last Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => updateFormData('lastName', e.target.value)}
                    className="input-field pl-11"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                School Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="input-field pl-11"
                  placeholder="john.doe@university.ac.ke"
                  required
                />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Must be a valid .ac.ke or institutional email address
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  School/University
                </label>
                <select
                  value={formData.school}
                  onChange={(e) => updateFormData('school', e.target.value)}
                  className="input-field"
                  required
                >
                  <option value="">Select your institution</option>
                  <option value="university-of-nairobi">University of Nairobi</option>
                  <option value="kenyatta-university">Kenyatta University</option>
                  <option value="moi-university">Moi University</option>
                  <option value="jkuat">JKUAT</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Expected Graduation Year
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    value={formData.graduationYear}
                    onChange={(e) => updateFormData('graduationYear', e.target.value)}
                    className="input-field pl-11"
                    required
                  >
                    <option value="">Select year</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Stellar Wallet Address <span className="text-gray-500">(Optional)</span>
              </label>
              <div className="relative">
                <Wallet className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.walletAddress}
                  onChange={(e) => updateFormData('walletAddress', e.target.value)}
                  className="input-field pl-11"
                  placeholder="GDXYZ...ABCD (or leave blank to create later)"
                />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                You can connect your Freighter wallet later from your dashboard
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => updateFormData('password', e.target.value)}
                    className="input-field pl-11 pr-11"
                    placeholder="Create a strong password"
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

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => updateFormData('confirmPassword', e.target.value)}
                    className="input-field pl-11"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 rounded border-gray-300 text-primary-600 focus:ring-primary-500" required />
              <p className="text-sm text-gray-600 dark:text-gray-300">
                I agree to the{' '}
                <Link to="#" className="text-primary-600 hover:text-primary-700 dark:text-primary-400">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="#" className="text-primary-600 hover:text-primary-700 dark:text-primary-400">
                  Privacy Policy
                </Link>
              </p>
            </div>

            <button type="submit" className="btn-primary w-full">
              Create Student Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              Already have an account?{' '}
              <Link to="/login/student" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 font-medium">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}