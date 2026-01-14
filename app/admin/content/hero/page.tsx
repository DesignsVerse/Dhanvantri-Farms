'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import ProtectedRoute from '@/components/admin/ProtectedRoute';
import ContentEditor from '@/components/admin/ContentEditor';
import ImageUpload from '@/components/admin/ImageUpload';
import type { HeroSlide } from '@/lib/data/types';
import { Image as ImageIcon } from 'lucide-react';

export default function HeroManagement() {
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/cms?section=hero');
      const data = await response.json();
      if (data.success) {
        setHeroSlides(data.data || []);
      }
    } catch (error) {
      console.error('Error fetching hero slides:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (items: HeroSlide[]) => {
    const response = await fetch('/api/cms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ section: 'hero', data: items }),
    });
    const result = await response.json();
    if (!result.success) throw new Error('Failed to save');
  };

  const renderItem = (item: HeroSlide, index: number) => (
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <ImageIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{item.title}</h4>
        <p className="text-xs sm:text-sm text-gray-500 line-clamp-2 mt-0.5">{item.subtitle}</p>
        <p className="text-xs text-gray-400 mt-1 truncate">Image: {item.image}</p>
      </div>
      <div className="text-xs sm:text-sm text-gray-500 flex-shrink-0">#{item.order}</div>
    </div>
  );

  // Form Component - must be a proper React component to use hooks
  const HeroForm: React.FC<{
    item: Partial<HeroSlide> | null;
    onClose: () => void;
    onSave: (item: HeroSlide) => void;
  }> = ({ item, onClose, onSave }) => {
    const [formData, setFormData] = useState<Partial<HeroSlide>>(
      item || { id: '', image: '', title: '', subtitle: '', order: 0 }
    );

    useEffect(() => {
      setFormData(item || { id: '', image: '', title: '', subtitle: '', order: 0 });
    }, [item]);

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (formData.id && formData.image && formData.title && formData.subtitle) {
            onSave(formData as HeroSlide);
          }
        }}
        className="space-y-4"
      >
        <ImageUpload
          value={formData.image || ''}
          onChange={(path) => setFormData({ ...formData, image: path })}
          folder="hero"
          label="Hero Image"
        />
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
          <textarea
            value={formData.subtitle || ''}
            onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
            className="w-full px-3 py-2.5 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            rows={3}
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

  const createNew = (): Partial<HeroSlide> => ({
    id: `hero-${Date.now()}`,
    image: '',
    title: '',
    subtitle: '',
    order: heroSlides.length + 1,
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
            title="Hero Slides Management"
            items={heroSlides}
            onSave={handleSave}
            renderItem={renderItem}
            FormComponent={HeroForm}
            createNew={createNew}
            getItemId={(item) => item.id}
          />
        </div>
      </div>
    </ProtectedRoute>
  );
}

