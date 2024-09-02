import React from 'react';
import CategoryFilter from '../components/CategoryFilter';

const ProductListingPage = () => {
    return (
        <div className="bg-primaryBackground text-body" style={{ fontFamily: '"Roboto", sans-serif', padding: '24px' }}>
            <h1 className="text-heading font-heading" style={{ fontSize: '24px', color: '#212121', lineHeight: '1.5' }}>
                Product Listing
            </h1>
            <p style={{ color: '#757575', lineHeight: '1.6', fontSize: '14px' }}>
                A dynamic page showcasing products that are filtered according to user-selected categories. This page integrates the CategoryFilter component, offering a streamlined and intuitive interface for product discovery.
            </p>
            <div className="mt-6">
                <CategoryFilter />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {/* Dummy product cards for layout demonstration */}
                <div className="bg-white rounded shadow" style={{ padding: '16px', borderRadius: '4px' }}>
                    <h2 className="text-heading" style={{ fontSize: '20px', color: '#212121' }}>Product 1</h2>
                </div>
                <div className="bg-white rounded shadow" style={{ padding: '16px', borderRadius: '4px' }}>
                    <h2 className="text-heading" style={{ fontSize: '20px', color: '#212121' }}>Product 2</h2>
                </div>
                <div className="bg-white rounded shadow" style={{ padding: '16px', borderRadius: '4px' }}>
                    <h2 className="text-heading" style={{ fontSize: '20px', color: '#212121' }}>Product 3</h2>
                </div>
            </div>
        </div>
    );
};

export default ProductListingPage;