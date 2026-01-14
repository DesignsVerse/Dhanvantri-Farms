'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import ProtectedRoute from '@/components/admin/ProtectedRoute';
import AdminLayout from '@/components/admin/AdminLayout';
import ContentEditor from '@/components/admin/ContentEditor';
import type { Achievement } from '@/lib/data/types';
import { Award } from 'lucide-react';

export default function AchievementsManagement() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/cms?section=achievements');
      const data = await response.json();
      if (data.success) {
        setAchievements(data.data || []);
      }
    } catch (error) {
      console.error('Error fetching achievements:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (items: Achievement[]) => {
    const response = await fetch('/api/cms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ section: 'achievements', data: items }),
    });
    const result = await response.json();
    if (!result.success) throw new Error('Failed to save');
  };

  const renderItem = (item: Achievement, index: number) => (
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="p-1.5 sm:p-2 bg-yellow-100 rounded-lg flex-shrink-0">
        <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xl sm:text-2xl font-bold text-gray-900">
          {item.value.toLocaleString()}{item.suffix}
        </div>
        <div className="text-xs sm:text-sm text-gray-600">{item.label}</div>
      </div>
    </div>
  );

  const AchievementForm: React.FC<{
    item: Partial<Achievement> | null;
    onClose: () => void;
    onSave: (item: Achievement) => void;
  }> = ({ item, onClose, onSave }) => {
    const [formData, setFormData] = useState<Partial<Achievement>>(
      item || { id: '', label: '', value: 0, suffix: '', order: 0 }
    );

    useEffect(() => {
      setFormData(item || { id: '', label: '', value: 0, suffix: '', order: 0 });
    }, [item]);

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (formData.id && formData.label && formData.value !== undefined) {
            onSave(formData as Achievement);
          }
        }}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Label *</label>
          <input
            type="text"
            value={formData.label || ''}
            onChange={(e) => setFormData({ ...formData, label: e.target.value })}
            className="w-full px-3 py-2.5 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            placeholder="Projects"
            required
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Value *</label>
            <input
              type="number"
              value={formData.value || 0}
              onChange={(e) => setFormData({ ...formData, value: parseInt(e.target.value) || 0 })}
              className="w-full px-3 py-2.5 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Suffix</label>
            <input
              type="text"
              value={formData.suffix || ''}
              onChange={(e) => setFormData({ ...formData, suffix: e.target.value })}
              className="w-full px-3 py-2.5 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              placeholder="+ or K+"
            />
          </div>
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

  const createNew = (): Partial<Achievement> => ({
    id: `achievement-${Date.now()}`,
    label: '',
    value: 0,
    suffix: '+',
    order: achievements.length + 1,
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
      <AdminLayout>
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto">
            <ContentEditor
              title="Achievements Management"
              items={achievements}
              onSave={handleSave}
              renderItem={renderItem}
              FormComponent={AchievementForm}
              createNew={createNew}
              getItemId={(item) => item.id}
            />
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}

