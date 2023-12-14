// components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-4 mx-6">
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-4 rounded-md" />
      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-blue-500 font-bold">{product.price} EUR</p>
      {/* Add buttons, add to cart functionality, etc. */}
    </div>
  );
};

export default ProductCard;
