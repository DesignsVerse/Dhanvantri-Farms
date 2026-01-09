'use client';

import { useState, useEffect } from 'react';
import { Save, Plus, Trash2, Edit2, X, ArrowUp, ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContentEditorProps<T> {
  title: string;
  items: T[];
  onSave: (items: T[]) => Promise<void>;
  renderItem: (item: T, index: number) => React.ReactNode;
  FormComponent: React.ComponentType<{
    item: Partial<T> | null;
    onClose: () => void;
    onSave: (item: T) => void;
  }>;
  createNew: () => Partial<T>;
  getItemId: (item: T) => string;
}

export default function ContentEditor<T extends { id: string; order: number }>({
  title,
  items,
  onSave,
  renderItem,
  FormComponent,
  createNew,
  getItemId,
}: ContentEditorProps<T>) {
  const [localItems, setLocalItems] = useState<T[]>(items);
  const [editingItem, setEditingItem] = useState<Partial<T> | null>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    setLocalItems(items);
  }, [items]);

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);
    try {
      await onSave(localItems);
      setMessage({ type: 'success', text: 'Content saved successfully!' });
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to save content' });
    } finally {
      setSaving(false);
    }
  };

  const handleAdd = () => {
    const newItem = createNew();
    setEditingItem(newItem);
  };

  const handleEdit = (item: T) => {
    setEditingItem({ ...item });
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      setLocalItems(localItems.filter((item) => getItemId(item) !== id));
    }
  };

  const handleMove = (index: number, direction: 'up' | 'down') => {
    const newItems = [...localItems];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex >= 0 && newIndex < newItems.length) {
      [newItems[index], newItems[newIndex]] = [newItems[newIndex], newItems[index]];
      newItems[index].order = index + 1;
      newItems[newIndex].order = newIndex + 1;
      setLocalItems(newItems);
    }
  };

  const handleFormSave = (item: T) => {
    const existingIndex = localItems.findIndex((i) => getItemId(i) === getItemId(item));
    if (existingIndex >= 0) {
      const newItems = [...localItems];
      newItems[existingIndex] = item;
      setLocalItems(newItems);
    } else {
      setLocalItems([...localItems, { ...item, order: localItems.length + 1 }]);
    }
    setEditingItem(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <div className="flex gap-3">
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add New
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {saving ? 'Saving...' : 'Save All'}
          </button>
        </div>
      </div>

      {/* Message */}
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`p-4 rounded-lg ${
              message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
            }`}
          >
            {message.text}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Items List */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 divide-y">
        {localItems.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No items. Click "Add New" to create one.</div>
        ) : (
          localItems
            .sort((a, b) => a.order - b.order)
            .map((item, index) => (
              <div key={getItemId(item)} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">{renderItem(item, index)}</div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleMove(index, 'up')}
                      disabled={index === 0}
                      className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                      title="Move up"
                    >
                      <ArrowUp className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleMove(index, 'down')}
                      disabled={index === localItems.length - 1}
                      className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                      title="Move down"
                    >
                      <ArrowDown className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleEdit(item)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                      title="Edit"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(getItemId(item))}
                      className="p-2 text-red-600 hover:bg-red-50 rounded"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
        )}
      </div>

      {/* Edit Form Modal */}
      <AnimatePresence>
        {editingItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setEditingItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">
                    {localItems.find((i) => getItemId(i) === getItemId(editingItem as T))
                      ? 'Edit Item'
                      : 'Add New Item'}
                  </h3>
                  <button
                    onClick={() => setEditingItem(null)}
                    className="p-2 hover:bg-gray-100 rounded"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FormComponent
                  item={editingItem}
                  onClose={() => setEditingItem(null)}
                  onSave={handleFormSave}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

