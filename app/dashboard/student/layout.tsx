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
      <div className="flex-1 lg:ml-64">
        <Topbar title="Student Dashboard" role="student" />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}