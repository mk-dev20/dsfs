import React from 'react'
import { Sidebar } from '@/app/components/sidebar'
import { Topbar } from '@/app/components/topbar'

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      <Sidebar role="student" />
      <div className="flex-1 flex flex-col min-h-screen">
        <Topbar title="Student Dashboard" role="student" />
        <main className="flex-1 p-2 sm:p-4 md:p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}