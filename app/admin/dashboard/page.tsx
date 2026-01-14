'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '@/components/admin/ProtectedRoute';
import { 
  LayoutDashboard, 
  Image, 
  HelpCircle, 
  MessageSquare, 
  Award, 
  FileText,
  LogOut,
  Settings,
  Menu,
  X
} from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
    { icon: Image, label: 'Hero Slides', href: '/admin/content/hero' },
    { icon: Settings, label: 'Services', href: '/admin/content/services' },
    { icon: HelpCircle, label: 'FAQs', href: '/admin/content/faqs' },
    { icon: MessageSquare, label: 'Testimonials', href: '/admin/content/testimonials' },
    { icon: Award, label: 'Achievements', href: '/admin/content/achievements' },
    { icon: FileText, label: 'About Content', href: '/admin/content/about' },
  ];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}>
          <div className="flex flex-col h-full">
            <div className="p-4 sm:p-6 border-b">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-green-600">CMS Admin</h1>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">Dhanvantri Farms</p>
                </div>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="lg:hidden p-2 hover:bg-gray-100 rounded"
                  aria-label="Close sidebar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <nav className="flex-1 p-3 sm:p-4 space-y-1 sm:space-y-2 overflow-y-auto">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors text-sm sm:text-base touch-manipulation"
                >
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className="p-3 sm:p-4 border-t">
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors text-sm sm:text-base touch-manipulation min-h-[44px]"
              >
                <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className={`transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'ml-0'}`}>
          {/* Header */}
          <header className="bg-white shadow-sm border-b sticky top-0 z-40">
            <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Dashboard</h2>
              <div className="w-10 sm:w-10"></div>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="p-4 sm:p-6 lg:p-8">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Welcome to CMS Admin</h1>
              <p className="text-sm sm:text-base text-gray-600">Manage your website content easily</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {menuItems.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 touch-manipulation"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-green-100 rounded-lg flex-shrink-0">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{item.label}</h3>
                      <p className="text-xs sm:text-sm text-gray-500">Manage content</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}


