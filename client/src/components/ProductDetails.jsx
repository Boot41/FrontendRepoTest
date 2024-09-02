import React, { useState } from 'react';

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = () => {
    // Logic to add product to cart
  };

  return (
    <div className="container mx-auto p-6" style={{ backgroundColor: '#F5F5F5', fontFamily: '"Roboto", sans-serif' }}>
      <div className="flex flex-col md:flex-row">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 rounded" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
        <div className="md:ml-6 mt-6 md:mt-0">
          <h2 className="text-2xl font-bold" style={{ color: '#212121', fontSize: '24px', lineHeight: '1.5' }}>{product.name}</h2>
          <p className="text-gray-600 mt-2" style={{ color: '#757575', fontSize: '14px', lineHeight: '1.6' }}>{product.description}</p>
          <div className="mt-4">
            <span className="text-xl" style={{ color: '#4CAF50' }}>${product.price.toFixed(2)}</span>
          </div>
          <div className="mt-4">
            <label className="block mb-2" style={{ color: '#212121', fontWeight: '700' }}>Quantity:</label>
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={e => setQuantity(e.target.value)}
              className="border border-gray-300 rounded p-2 focus:outline-none focus:border-green-500"
              style={{ borderColor: '#E0E0E0', transition: 'border-color 0.3s ease-in-out'}}
            />
          </div>
          <button
            onClick={handleAddToCart}
            className="mt-6 w-full bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out text-white font-semibold py-2 rounded"
            style={{ backgroundColor: '#4CAF50', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)' }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;