import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GraduationCap, Heart, ArrowRight, Sparkles } from 'lucide-react'

export default function OnboardingPage() {
  const [selectedRole, setSelectedRole] = useState<'student' | 'donor' | null>(null)
  const navigate = useNavigate()

  const handleContinue = () => {
    if (selectedRole) {
      navigate(`/login/${selectedRole}`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-primary-800 rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to DSFS
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose your role to get started with decentralized student funding
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Student Card */}
          <div 
            className={`card p-8 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
              selectedRole === 'student' 
                ? 'ring-4 ring-primary-500 bg-primary-50 dark:bg-primary-900/20' 
                : 'hover:shadow-2xl'
            }`}
            onClick={() => setSelectedRole('student')}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                I'm a Student
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Showcase your academic projects and receive funding from generous donors to support your educational journey.
              </p>
              <div className="space-y-3 text-sm text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Create project portfolios</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Receive Stellar XLM donations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Track funding analytics</span>
                </div>
              </div>
            </div>
          </div>

          {/* Donor Card */}
          <div 
            className={`card p-8 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
              selectedRole === 'donor' 
                ? 'ring-4 ring-primary-500 bg-primary-50 dark:bg-primary-900/20' 
                : 'hover:shadow-2xl'
            }`}
            onClick={() => setSelectedRole('donor')}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                I'm a Donor
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Support brilliant students by funding their projects and making a real impact on education and innovation.
              </p>
              <div className="space-y-3 text-sm text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Discover amazing projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Donate via M-Pesa or XLM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Track donation impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {selectedRole && (
          <div className="text-center animate-slide-up">
            <button 
              onClick={handleContinue}
              className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
            >
              <span>Continue as {selectedRole === 'student' ? 'Student' : 'Donor'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}