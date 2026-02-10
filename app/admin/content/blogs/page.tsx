'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import ProtectedRoute from '@/components/admin/ProtectedRoute';
import AdminLayout from '@/components/admin/AdminLayout';
import ContentEditor from '@/components/admin/ContentEditor';
import ImageUpload from '@/components/admin/ImageUpload';
import type { BlogPost } from '@/lib/data/types';
import { FileText, Calendar, User } from 'lucide-react';

export default function BlogsManagement() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/cms?section=blogs');
      const data = await response.json();
      if (data.success) {
        setBlogs(data.data || []);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (items: BlogPost[]) => {
    const response = await fetch('/api/cms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ section: 'blogs', data: items }),
    });
    const result = await response.json();
    if (!result.success) throw new Error('Failed to save');
  };

  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const renderItem = (item: BlogPost, index: number) => (
    <div className="flex items-start gap-3 sm:gap-4">
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0"
        />
      )}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base line-clamp-1">
          {item.title}
        </h4>
        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-2">{item.excerpt}</p>
        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
          {item.category && (
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded">
              {item.category}
            </span>
          )}
          <span className="flex items-center gap-1">
            <User className="w-3 h-3" />
            {item.author}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(item.publishedAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );

  const BlogForm: React.FC<{
    item: Partial<BlogPost> | null;
    onClose: () => void;
    onSave: (item: BlogPost) => void;
  }> = ({ item, onClose, onSave }) => {
    const [formData, setFormData] = useState<Partial<BlogPost>>(
      item || {
        id: '',
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        author: 'Dhanvantri Farms Team',
        publishedAt: new Date().toISOString().split('T')[0],
        image: '',
        category: '',
        tags: [],
        featured: false,
        order: 0,
      }
    );

    useEffect(() => {
      setFormData(
        item || {
          id: '',
          title: '',
          slug: '',
          excerpt: '',
          content: '',
          author: 'Dhanvantri Farms Team',
          publishedAt: new Date().toISOString().split('T')[0],
          image: '',
          category: '',
          tags: [],
          featured: false,
          order: 0,
        }
      );
    }, [item]);

    const handleTitleChange = (title: string) => {
      setFormData({
        ...formData,
        title,
        slug: generateSlug(title),
      });
    };

    const handleTagsChange = (value: string) => {
      const tags = value.split(',').map((tag) => tag.trim()).filter(Boolean);
      setFormData({ ...formData, tags });
    };

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (formData.id && formData.title && formData.content) {
            onSave(formData as BlogPost);
          }
        }}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
          <input
            type="text"
            value={formData.title || ''}
            onChange={(e) => handleTitleChange(e.target.value)}
            className="w-full px-3 py-2.5 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
          <input
            type="text"
            value={formData.slug || ''}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            className="w-full px-3 py-2.5 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            placeholder="auto-generated-from-title"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
          <textarea
            value={formData.excerpt || ''}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            className="w-full px-3 py-2.5 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            rows={3}
            placeholder="Short description for blog listing..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Content * (HTML)</label>
          <textarea
            value={formData.content || ''}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            className="w-full px-3 py-2.5 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 font-mono text-sm"
            rows={10}
            placeholder="<p>Your HTML content here...</p>"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
            <input
              type="text"
              value={formData.author || ''}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              className="w-full px-3 py-2.5 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Published Date</label>
            <input
              type="date"
              value={formData.publishedAt || ''}
              onChange={(e) => setFormData({ ...formData, publishedAt: e.target.value })}
              className="w-full px-3 py-2.5 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <input
              type="text"
              value={formData.category || ''}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3 py-2.5 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              placeholder="e.g., Technology, Farming"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma-separated)</label>
            <input
              type="text"
              value={formData.tags?.join(', ') || ''}
              onChange={(e) => handleTagsChange(e.target.value)}
              className="w-full px-3 py-2.5 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              placeholder="tag1, tag2, tag3"
            />
          </div>
        </div>
        <div>
          <ImageUpload
            value={formData.image || ''}
            onChange={(url) => setFormData({ ...formData, image: url })}
            folder="blog"
            label="Featured Image"
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.featured || false}
            onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
            className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
          />
          <label className="text-sm font-medium text-gray-700">Featured Post</label>
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

  const createNew = (): Partial<BlogPost> => ({
    id: `blog-${Date.now()}`,
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author: 'Dhanvantri Farms Team',
    publishedAt: new Date().toISOString().split('T')[0],
    image: '',
    category: '',
    tags: [],
    featured: false,
    order: blogs.length + 1,
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
              title="Blog Posts Management"
              items={blogs}
              onSave={handleSave}
              renderItem={renderItem}
              FormComponent={BlogForm}
              createNew={createNew}
              getItemId={(item) => item.id}
            />
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
