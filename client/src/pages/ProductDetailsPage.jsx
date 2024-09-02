import React from 'react';
import ProductDetails from '../components/ProductDetails';

const ProductDetailsPage = () => {
    return (
        <div className="bg-primaryBackground p-medium flex flex-col items-center" style={{ fontFamily: '"Roboto", sans-serif' }}>
            <h1 className="text-heading font-heading mb-large" style={{ color: '#212121', fontSize: '24px', lineHeight: '1.5', letterSpacing: '0.5px' }}>
                Product Details
            </h1>
            <p className="text-body mb-large" style={{ color: '#757575', fontSize: '14px', lineHeight: '1.6' }}>
                This page will host the ProductDetails component, delivering an in-depth focus on the selected product to users, ensuring a seamless browsing experience that cultivates informed purchasing decisions.
            </p>
            <div className="bg-white shadow-cardStyles border border-borderColors rounded-borderRadius p-medium w-containerWidths[0]">
                <ProductDetails />
            </div>
        </div>
    );
};

export default ProductDetailsPage;