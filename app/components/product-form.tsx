"use client";

import React, { useState } from "react";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [isAvailable, setIsAvailable] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("category", category);
    formData.append("is_available", JSON.stringify(isAvailable)); 

    images.forEach((image) => {
      formData.append("imageUrl", image); 
    });

    try {
      const response = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Product created successfully!");
        setName("");
        setDescription("");
        setPrice("");
        setStock("");
        setCategory("");
        setImages([]);
        setIsAvailable(true);
      } else {
        alert("Failed to create product");
      }
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setImages((prevImages) => [...prevImages, ...selectedFiles]);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center text-black mb-6">Create a Product</h1>
      <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-black mb-2">Product Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm" required />
        </div>

        <div>
          <label htmlFor="description" className="block text-lg font-medium text-black mb-2">Description</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm" rows={5} required />
        </div>

        <div>
          <label htmlFor="price" className="block text-lg font-medium text-black mb-2">Price</label>
          <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm" required />
        </div>

        <div>
          <label htmlFor="stock" className="block text-lg font-medium text-black mb-2">Stock</label>
          <input type="number" id="stock" value={stock} onChange={(e) => setStock(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm" required />
        </div>

        <div>
          <label htmlFor="category" className="block text-lg font-medium text-black mb-2">Category</label>
          <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm" required />
        </div>

        <div>
          <label htmlFor="images" className="block text-lg font-medium text-black mb-2">Upload Images</label>
          <input type="file" id="images" accept="image/*" onChange={handleImageChange} className="w-full text-black py-2 border border-gray-300 rounded-lg shadow-sm" multiple />
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-medium text-black mb-2">Image Previews</h3>
          <div className="flex space-x-4">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <img src={URL.createObjectURL(image)} alt={`Preview ${index}`} className="w-24 h-24 object-cover rounded-lg" />
                <button type="button" onClick={() => setImages(images.filter((_, i) => i !== index))} className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1">&times;</button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="isAvailable" className="flex items-center space-x-2 text-lg font-medium text-black">
            <input type="checkbox" id="isAvailable" checked={isAvailable} onChange={(e) => setIsAvailable(e.target.checked)} className="w-5 h-5 text-indigo-600 border-gray-300 rounded" />
            <span>Is Available</span>
          </label>
        </div>

        <div className="flex justify-center">
          <button type="submit" className="w-full py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transition duration-200">
            Submit Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
