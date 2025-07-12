import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import HomePage from './pages/HomePage';
import OnboardingPage from './pages/OnboardingPage';
import StudentLoginPage from './pages/auth/StudentLoginPage';
import DonorLoginPage from './pages/auth/DonorLoginPage';
import StudentRegisterPage from './pages/auth/StudentRegisterPage';
import StudentDashboardLayout from './pages/dashboard/student/StudentDashboardLayout';
import StudentHomePage from './pages/dashboard/student/StudentHomePage';
import StudentProjectsPage from './pages/dashboard/student/StudentProjectsPage';
import StudentDonationsPage from './pages/dashboard/student/StudentDonationsPage';
import StudentAboutPage from './pages/dashboard/student/StudentAboutPage';
import StudentSupportPage from './pages/dashboard/student/StudentSupportPage';
import StudentProfilePage from './pages/dashboard/student/StudentProfilePage';
import DonorDashboardLayout from './pages/dashboard/donor/DonorDashboardLayout';
import DonorHomePage from './pages/dashboard/donor/DonorHomePage';
import DonorExplorePage from './pages/dashboard/donor/DonorExplorePage';
import DonorDonatePage from './pages/dashboard/donor/DonorDonatePage';
import DonorAboutPage from './pages/dashboard/donor/DonorAboutPage';
import DonorSupportPage from './pages/dashboard/donor/DonorSupportPage';
import DonorProfilePage from './pages/dashboard/donor/DonorProfilePage';

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      <Router>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<HomePage />} />
          
          {/* Auth Routes */}
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/login/student" element={<StudentLoginPage />} />
          <Route path="/login/donor" element={<DonorLoginPage />} />
          <Route path="/register/student" element={<StudentRegisterPage />} />
          
          {/* Student Dashboard */}
          <Route path="/dashboard/student" element={<StudentDashboardLayout />}>
            <Route index element={<Navigate to="/dashboard/student/home" replace />} />
            <Route path="home" element={<StudentHomePage />} />
            <Route path="projects" element={<StudentProjectsPage />} />
            <Route path="donations" element={<StudentDonationsPage />} />
            <Route path="about" element={<StudentAboutPage />} />
            <Route path="support" element={<StudentSupportPage />} />
            <Route path="profile" element={<StudentProfilePage />} />
          </Route>
          
          {/* Donor Dashboard */}
          <Route path="/dashboard/donor" element={<DonorDashboardLayout />}>
            <Route index element={<Navigate to="/dashboard/donor/home" replace />} />
            <Route path="home" element={<DonorHomePage />} />
            <Route path="explore" element={<DonorExplorePage />} />
            <Route path="donate" element={<DonorDonatePage />} />
            <Route path="about" element={<DonorAboutPage />} />
            <Route path="support" element={<DonorSupportPage />} />
            <Route path="profile" element={<DonorProfilePage />} />
          </Route>
          
          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;