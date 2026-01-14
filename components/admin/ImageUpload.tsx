'use client';

import { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

interface ImageUploadProps {
  value: string;
  onChange: (path: string) => void;
  folder?: string;
  label?: string;
}

export default function ImageUpload({ value, onChange, folder = 'uploads', label = 'Image' }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(value || null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
      return;
    }

    setError(null);
    setUploading(true);

    try {
      // Create form data
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', folder);

      // Upload file
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setPreview(result.path);
        onChange(result.path);
      } else {
        setError(result.error || 'Upload failed');
      }
    } catch (err) {
      setError('Failed to upload image');
      console.error('Upload error:', err);
    } finally {
      setUploading(false);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemove = () => {
    setPreview(null);
    onChange('');
    setError(null);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-2 sm:space-y-3">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      
      {/* Image Preview */}
      {preview && (
        <div className="relative w-full h-40 sm:h-48 bg-gray-100 rounded-lg overflow-hidden border border-gray-300">
          <Image
            src={preview}
            alt="Preview"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 p-1.5 sm:p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors touch-manipulation min-w-[32px] min-h-[32px] flex items-center justify-center"
            title="Remove image"
            aria-label="Remove image"
          >
            <X className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      )}

      {/* Upload Area */}
      {!preview && (
        <div
          onClick={handleClick}
          className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center cursor-pointer hover:border-green-500 hover:bg-green-50 transition-colors touch-manipulation"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
            disabled={uploading}
          />
          {uploading ? (
            <div className="flex flex-col items-center gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-green-600 rounded-full animate-spin"></div>
              <p className="text-xs sm:text-sm text-gray-600">Uploading...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
              <p className="text-xs sm:text-sm text-gray-600">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
            </div>
          )}
        </div>
      )}

      {/* Manual Path Input */}
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setPreview(e.target.value || null);
          }}
          className="flex-1 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          placeholder="/service/poly/1.jpg or upload above"
        />
        {!preview && (
          <button
            type="button"
            onClick={handleClick}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm flex items-center justify-center gap-2 touch-manipulation min-h-[44px] sm:min-h-0"
            disabled={uploading}
          >
            <ImageIcon className="w-4 h-4" />
            <span className="sm:inline">Upload</span>
          </button>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-xs sm:text-sm text-red-600">{error}</p>
      )}

      {/* Current Image Info */}
      {preview && (
        <p className="text-xs text-gray-500 break-all">Current: {preview}</p>
      )}
    </div>
  );
}


