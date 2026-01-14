'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import ProtectedRoute from '@/components/admin/ProtectedRoute';
import ContentEditor from '@/components/admin/ContentEditor';
import type { FAQ } from '@/lib/data/types';
import { HelpCircle } from 'lucide-react';

export default function FAQsManagement() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/cms?section=faqs');
      const data = await response.json();
      if (data.success) {
        setFaqs(data.data || []);
      }
    } catch (error) {
      console.error('Error fetching FAQs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (items: FAQ[]) => {
    const response = await fetch('/api/cms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ section: 'faqs', data: items }),
    });
    const result = await response.json();
    if (!result.success) throw new Error('Failed to save');
  };

  const renderItem = (item: FAQ, index: number) => (
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="p-1.5 sm:p-2 bg-blue-100 rounded-lg flex-shrink-0">
        <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{item.question}</h4>
        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{item.answer}</p>
      </div>
    </div>
  );

  const FAQForm: React.FC<{
    item: Partial<FAQ> | null;
    onClose: () => void;
    onSave: (item: FAQ) => void;
  }> = ({ item, onClose, onSave }) => {
    const [formData, setFormData] = useState<Partial<FAQ>>(
      item || { id: '', question: '', answer: '', order: 0 }
    );

    useEffect(() => {
      setFormData(item || { id: '', question: '', answer: '', order: 0 });
    }, [item]);

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (formData.id && formData.question && formData.answer) {
            onSave(formData as FAQ);
          }
        }}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Question</label>
          <input
            type="text"
            value={formData.question || ''}
            onChange={(e) => setFormData({ ...formData, question: e.target.value })}
            className="w-full px-3 py-2.5 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Answer</label>
          <textarea
            value={formData.answer || ''}
            onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
            className="w-full px-3 py-2.5 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            rows={5}
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

  const createNew = (): Partial<FAQ> => ({
    id: `faq-${Date.now()}`,
    question: '',
    answer: '',
    order: faqs.length + 1,
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
            title="FAQs Management"
            items={faqs}
            onSave={handleSave}
            renderItem={renderItem}
            FormComponent={FAQForm}
            createNew={createNew}
            getItemId={(item) => item.id}
          />
        </div>
      </div>
    </ProtectedRoute>
  );
}

