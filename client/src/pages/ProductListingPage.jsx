import React from 'react';
import FilterOptions from '../components/FilterOptions';

const ProductListingPage = () => {
    return (
        <div style={{ backgroundColor: '#FFFFFF', padding: '24px', fontFamily: '"Roboto", sans-serif' }}>
            <h1 style={{ color: '#212121', fontSize: '24px', fontWeight: '700', lineHeight: '1.5', marginBottom: '16px' }}>
                Product Listing
            </h1>
            <p style={{ color: '#757575', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
                A comprehensive page designed to showcase products filtered by selected categories. It effectively utilizes the CategoryFilter component, allowing users to easily browse through relevant products and enhancing overall navigation.
            </p>
            <div style={{ marginBottom: '24px' }}>
                <FilterOptions />
            </div>
            <div style={{ border: '1px solid #E0E0E0', borderRadius: '4px', padding: '16px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                {/* Products would be listed here */}
            </div>
        </div>
    );
};

export default ProductListingPage;