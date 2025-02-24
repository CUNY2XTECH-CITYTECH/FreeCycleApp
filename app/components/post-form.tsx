"use client";

import React, { useState } from 'react';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState<File[]>([]); // Store multiple images

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("user_id", "your-test-user-id"); // Will replace with dynamic user ID

    images.forEach(image => {
      formData.append("images", image); // Append all images
    });

    try {
      const response = await fetch('http://localhost:3000/api/posts', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Post created successfully!');
        setTitle('');
        setContent('');
        setImages([]);
      } else {
        alert('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setImages(prevImages => [...prevImages, ...selectedFiles]); // Add selected images to state
    }
  };

  const handleImageRemove = (index: number) => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index)); // Remove image by index
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center text-black mb-6">Create a Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
        <div>
          <label htmlFor="title" className="block text-lg font-medium text-black mb-2">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-lg font-medium text-black mb-2">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={5}
            required
          />
        </div>

        <div>
          <label htmlFor="images" className="block text-lg font-medium text-black mb-2">Upload Images</label>
          <input
            type="file"
            id="images"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full text-black py-2 border border-gray-300 rounded-lg shadow-sm"
            multiple
          />
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-medium text-black mb-2">Image Previews</h3>
          <div className="flex space-x-4">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Preview ${index}`}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => handleImageRemove(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Submit Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
