import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../../components/Sidebar'
import { Topbar } from '../../../components/Topbar'

export default function DonorDashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      <Sidebar role="donor" />
      <div className="flex-1 lg:ml-64">
        <Topbar title="Donor Dashboard" role="donor" />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}