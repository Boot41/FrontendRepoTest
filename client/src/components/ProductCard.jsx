import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '16px' }}>
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="py-4">
                <h2 className="font-bold text-gray-800" style={{ fontSize: '24px', lineHeight: '1.5' }}>{product.name}</h2>
                <p className="text-gray-600" style={{ fontSize: '14px', lineHeight: '1.6' }}>${product.price}</p>
                <button className="mt-4 bg-green-500 text-white rounded" style={{ padding: '12px 16px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)', transition: '0.3s ease-in-out'}} 
                    onMouseOver={e => e.currentTarget.style.backgroundColor = '#388E3C'} 
                    onMouseOut={e => e.currentTarget.style.backgroundColor = '#4CAF50'}>
                    Quick View
                </button>
            </div>
        </div>
    );
};

export default ProductCard;