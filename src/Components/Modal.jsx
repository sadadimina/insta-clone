import React, { useState } from 'react';

export default function Modal({ isOpen, onClose, onSave }) {
  const [userId, setUserId] = useState('');
  const [caption, setCaption] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      userId,
      caption,
      imageUrl: photoUrl,
    };

    onSave(newPost);

    setUserId('');
    setCaption('');
    setPhotoUrl('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-purple-100 rounded-3xl p-6 w-[90%] max-w-md relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold hover:bg-red-200"
        >
          ×
        </button>

        <h2 className="text-lg font-bold mb-4 text-indigo-700">Add Post</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="User id"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            placeholder="Caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            placeholder="Photo Url"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            className="border rounded px-3 py-2"
            required
          />
          <button
            type="submit"
            className="bg-indigo-500 text-white rounded px-4 py-2 mt-2 hover:bg-indigo-600 transition"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
