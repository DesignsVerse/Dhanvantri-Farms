'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import ProtectedRoute from '@/components/admin/ProtectedRoute';
import ContentEditor from '@/components/admin/ContentEditor';
import ImageUpload from '@/components/admin/ImageUpload';
import type { Service } from '@/lib/data/types';
import { Settings } from 'lucide-react';

export default function ServicesManagement() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/cms?section=services');
      const data = await response.json();
      if (data.success) {
        setServices(data.data || []);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (items: Service[]) => {
    const response = await fetch('/api/cms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ section: 'services', data: items }),
    });
    const result = await response.json();
    if (!result.success) throw new Error('Failed to save');
  };

  const renderItem = (item: Service, index: number) => (
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{item.title}</h4>
        <p className="text-xs sm:text-sm text-gray-500 line-clamp-1">{item.description}</p>
        <p className="text-xs text-gray-400 mt-1 truncate">Link: {item.href}</p>
      </div>
    </div>
  );

  const ServiceForm: React.FC<{
    item: Partial<Service> | null;
    onClose: () => void;
    onSave: (item: Service) => void;
  }> = ({ item, onClose, onSave }) => {
    const [formData, setFormData] = useState<Partial<Service>>(
      item || { id: '', title: '', description: '', image: '', href: '', order: 0 }
    );

    useEffect(() => {
      setFormData(item || { id: '', title: '', description: '', image: '', href: '', order: 0 });
    }, [item]);

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (formData.id && formData.title && formData.description && formData.href) {
            onSave(formData as Service);
          }
        }}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            value={formData.title || ''}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-3 py-2.5 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <input
            type="text"
            value={formData.description || ''}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-3 py-2.5 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <ImageUpload
          value={formData.image || ''}
          onChange={(path) => setFormData({ ...formData, image: path })}
          folder="services"
          label="Service Image"
        />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Link (href)</label>
          <input
            type="text"
            value={formData.href || ''}
            onChange={(e) => setFormData({ ...formData, href: e.target.value })}
            className="w-full px-3 py-2.5 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            placeholder="/polyhouse"
            required
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4">
          <button
            type="submit"
            className="flex-1 bg-green-600 text-white py-2.5 sm:py-2 rounded-lg hover:bg-green-700 transition-colors touch-manipulation min-h-[44px] text-sm sm:text-base"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-700 py-2.5 sm:py-2 rounded-lg hover:bg-gray-300 transition-colors touch-manipulation min-h-[44px] text-sm sm:text-base"
          >
            Cancel
          </button>
        </div>
      </form>
    );
  };

  const createNew = (): Partial<Service> => ({
    id: `service-${Date.now()}`,
    title: '',
    description: '',
    image: '',
    href: '',
    order: services.length + 1,
  });

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-12 h-12 border-t-4 border-green-600 rounded-full animate-spin"></div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">
          <ContentEditor
            title="Services Management"
            items={services}
            onSave={handleSave}
            renderItem={renderItem}
            FormComponent={ServiceForm}
            createNew={createNew}
            getItemId={(item) => item.id}
          />
        </div>
      </div>
    </ProtectedRoute>
  );
}

