'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import ProtectedRoute from '@/components/admin/ProtectedRoute';
import ContentEditor from '@/components/admin/ContentEditor';
import type { Testimonial } from '@/lib/data/types';
import { MessageSquare } from 'lucide-react';

export default function TestimonialsManagement() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/cms?section=testimonials');
      const data = await response.json();
      if (data.success) {
        setTestimonials(data.data || []);
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (items: Testimonial[]) => {
    const response = await fetch('/api/cms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ section: 'testimonials', data: items }),
    });
    const result = await response.json();
    if (!result.success) throw new Error('Failed to save');
  };

  const renderItem = (item: Testimonial, index: number) => (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-purple-100 rounded-lg">
        <MessageSquare className="w-5 h-5 text-purple-600" />
      </div>
      <div className="flex-1">
        <p className="text-gray-700 italic mb-2">"{item.quote}"</p>
        {(item.author || item.location) && (
          <p className="text-sm text-gray-500">
            {item.author && <span className="font-semibold">{item.author}</span>}
            {item.author && item.location && ' • '}
            {item.location && <span>{item.location}</span>}
          </p>
        )}
      </div>
    </div>
  );

  const TestimonialForm: React.FC<{
    item: Partial<Testimonial> | null;
    onClose: () => void;
    onSave: (item: Testimonial) => void;
  }> = ({ item, onClose, onSave }) => {
    const [formData, setFormData] = useState<Partial<Testimonial>>(
      item || { id: '', quote: '', author: '', location: '', order: 0 }
    );

    useEffect(() => {
      setFormData(item || { id: '', quote: '', author: '', location: '', order: 0 });
    }, [item]);

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (formData.id && formData.quote) {
            onSave(formData as Testimonial);
          }
        }}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Quote *</label>
          <textarea
            value={formData.quote || ''}
            onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            rows={4}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Author (optional)</label>
          <input
            type="text"
            value={formData.author || ''}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location (optional)</label>
          <input
            type="text"
            value={formData.location || ''}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    );
  };

  const createNew = (): Partial<Testimonial> => ({
    id: `testimonial-${Date.now()}`,
    quote: '',
    author: '',
    location: '',
    order: testimonials.length + 1,
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
            title="Testimonials Management"
            items={testimonials}
            onSave={handleSave}
            renderItem={renderItem}
            FormComponent={TestimonialForm}
            createNew={createNew}
            getItemId={(item) => item.id}
          />
        </div>
      </div>
    </ProtectedRoute>
  );
}

