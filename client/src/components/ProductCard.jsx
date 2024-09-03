import React from 'react';

const ProductCard = ({ productName, productImage, price, onQuickView }) => {
  return (
    <div className="max-w-sm rounded border border-gray-300 shadow-lg bg-white p-6" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <img src={productImage} alt={productName} className="w-full h-32 object-cover rounded" />
      <h2 className="text-heading font-heading text-lg mt-4" style={{ fontSize: '24px', lineHeight: '1.5' }}>{productName}</h2>
      <p className="text-body mt-2" style={{ fontSize: '14px', color: '#757575' }}>{`Price: $${price}`}</p>
      <button
        onClick={onQuickView}
        className="mt-4 bg-primaryColor text-white py-2 px-4 rounded hover:bg-green-700 transition-all duration-300"
        style={{ backgroundColor: '#4CAF50', borderRadius: '4px' }}>
        Quick View
      </button>
    </div>
  );
};

export default ProductCard;