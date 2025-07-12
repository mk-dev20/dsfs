import React, { useState } from 'react';
import { PageTransition } from '../../../components/PageTransition';
import { HelpCircle, MessageCircle, Mail, Phone, Search, ChevronDown, ChevronRight } from 'lucide-react';

export default function StudentSupportPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I create my first project?',
      answer: 'Navigate to the Projects page and click "Create New Project". Fill in your project details, upload images, set your funding goal, and publish it for donors to discover.'
    },
    {
      question: 'How do donations work on DSFS?',
      answer: 'Donors can contribute to your projects using Stellar XLM cryptocurrency or M-Pesa. All transactions are recorded on the blockchain for transparency and security.'
    },
    {
      question: 'When will I receive my funding?',
      answer: 'Funds are transferred to your connected wallet immediately after a donation is made. You can withdraw funds at any time through the Wallet Actions section.'
    },
    {
      question: 'What makes a successful project?',
      answer: 'Successful projects have clear descriptions, realistic goals, compelling visuals, and regular updates. Engage with your supporters and show progress to build trust.'
    },
    {
      question: 'How do I connect my Stellar wallet?',
      answer: 'Go to your Profile settings and connect your Freighter wallet or enter your Stellar wallet address. This is where you\'ll receive donations.'
    },
    {
      question: 'Can I edit my project after publishing?',
      answer: 'Yes, you can edit project descriptions, add updates, and upload new images. However, funding goals cannot be changed once donations have been received.'
    }
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      action: 'Start Chat',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      action: 'Send Email',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/20'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      action: 'Call Now',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageTransition>
      <div className="space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">Support Center</h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get help with your DSFS account, projects, and funding. We're here to support your success.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200 hover:scale-105">
              <div className={`w-12 h-12 ${method.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                <method.icon className={`w-6 h-6 ${method.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{method.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{method.description}</p>
              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                {method.action}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
          
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* FAQ List */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-4 sm:px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <span className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-4 sm:px-6 pb-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400">No FAQs found matching your search.</p>
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Links</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <a href="#" className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow duration-200">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">📚</span>
              </div>
              <span className="text-gray-900 dark:text-white font-medium">Getting Started Guide</span>
            </a>
            <a href="#" className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow duration-200">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                <span className="text-green-600 dark:text-green-400 text-sm font-bold">💡</span>
              </div>
              <span className="text-gray-900 dark:text-white font-medium">Project Best Practices</span>
            </a>
            <a href="#" className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow duration-200">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">🔒</span>
              </div>
              <span className="text-gray-900 dark:text-white font-medium">Security & Privacy</span>
            </a>
            <a href="#" className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow duration-200">
              <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                <span className="text-orange-600 dark:text-orange-400 text-sm font-bold">📊</span>
              </div>
              <span className="text-gray-900 dark:text-white font-medium">Analytics Guide</span>
            </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}