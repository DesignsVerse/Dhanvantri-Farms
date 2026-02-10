'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import type { BlogPost } from '@/lib/data/types';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPost();
  }, [params.slug]);

  const fetchBlogPost = async () => {
    try {
      const response = await fetch('/api/cms?section=blogs');
      const result = await response.json();
      if (result.success && result.data) {
        const foundBlog = result.data.find((b: BlogPost) => b.slug === params.slug);
        setBlog(foundBlog || null);
      }
    } catch (error) {
      console.error('Error fetching blog post:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Link href="/blog" className="text-green-600 hover:text-green-700">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Blog Post Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {blog.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 rounded-xl overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-96 object-cover"
            />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {blog.category && (
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-4">
              {blog.category}
            </span>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {blog.title}
          </h1>

          <div className="flex items-center space-x-6 text-gray-600 mb-8 pb-6 border-b">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{formatDate(blog.publishedAt)}</span>
            </div>
          </div>

          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </article>
    </div>
  );
}
