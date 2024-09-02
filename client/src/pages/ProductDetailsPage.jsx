import React from 'react';
import ProductDetails from '../components/ProductDetails';

const ProductDetailsPage = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-primaryBackground p-medium" style={{ fontFamily: '"Roboto", sans-serif' }}>
            <h1 className="text-heading font-heading text-heading color-primary mb-large" style={{ color: '#212121', fontSize: '24px', lineHeight: '1.5' }}>
                Product Details
            </h1>
            <div className="bg-white shadow-md rounded border border-borderColors p-large mb-large" style={{ width: '80%', borderRadius: '4px' }}>
                <ProductDetails />
            </div>
            <button className="bg-primaryButton text-white py-medium px-large rounded transition-all duration-300 hover:bg-opacity-90" style={{ backgroundColor: '#4CAF50', borderRadius: '4px' }}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductDetailsPage;