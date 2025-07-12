import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GraduationCap, Heart, ArrowRight, Sparkles, CheckCircle } from 'lucide-react'
import { PageTransition } from '../components/PageTransition'

export default function OnboardingPage() {
  const [selectedRole, setSelectedRole] = useState<'student' | 'donor' | null>(null)
  const navigate = useNavigate()

  const handleContinue = () => {
    if (selectedRole) {
      navigate(`/login/${selectedRole}`)
    }
  }

  const studentFeatures = [
    'Create project portfolios',
    'Receive Stellar XLM donations',
    'Track funding analytics',
    'Connect with supporters'
  ]

  const donorFeatures = [
    'Discover amazing projects',
    'Donate via M-Pesa or XLM',
    'Track donation impact',
    'Support student innovation'
  ]

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 flex items-center justify-center p-4">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-800 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to DSFS
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Choose your role to get started with decentralized student funding
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Student Card */}
            <div 
              className={`group cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                selectedRole === 'student' 
                  ? 'ring-4 ring-primary-500 bg-primary-50 dark:bg-primary-900/20' 
                  : 'hover:shadow-2xl'
              }`}
              onClick={() => setSelectedRole('student')}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 sm:p-8 h-full">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    I'm a Student
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                    Showcase your academic projects and receive funding from generous donors to support your educational journey.
                  </p>
                  <div className="space-y-3 text-left">
                    {studentFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Donor Card */}
            <div 
              className={`group cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                selectedRole === 'donor' 
                  ? 'ring-4 ring-primary-500 bg-primary-50 dark:bg-primary-900/20' 
                  : 'hover:shadow-2xl'
              }`}
              onClick={() => setSelectedRole('donor')}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 sm:p-8 h-full">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    I'm a Donor
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                    Support brilliant students by funding their projects and making a real impact on education and innovation.
                  </p>
                  <div className="space-y-3 text-left">
                    {donorFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {selectedRole && (
            <div className="text-center animate-slide-up">
              <button 
                onClick={handleContinue}
                className="btn-primary inline-flex items-center space-x-2 text-lg px-6 sm:px-8 py-3 sm:py-4 hover:scale-105 transition-transform duration-200"
              >
                <span>Continue as {selectedRole === 'student' ? 'Student' : 'Donor'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  )
}