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
  Menu
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
            <div className="p-6 border-b">
              <h1 className="text-2xl font-bold text-green-600">CMS Admin</h1>
              <p className="text-sm text-gray-500 mt-1">Dhanvantri Farms</p>
            </div>
            
            <nav className="flex-1 p-4 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className="p-4 border-t">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={`transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'ml-0'}`}>
          {/* Header */}
          <header className="bg-white shadow-sm border-b sticky top-0 z-40">
            <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h2 className="text-xl font-semibold text-gray-900">Dashboard</h2>
              <div className="w-10"></div>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="p-4 sm:p-6 lg:p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to CMS Admin</h1>
              <p className="text-gray-600">Manage your website content easily</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <item.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.label}</h3>
                      <p className="text-sm text-gray-500">Manage content</p>
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


