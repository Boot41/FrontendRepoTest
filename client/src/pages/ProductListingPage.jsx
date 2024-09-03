import React from 'react';
import ProductCard from '../components/ProductCard';

const ProductListingPage = () => {
    const products = [/* array of product data */];

    return (
        <div className="bg-primaryBackground p-medium font-roboto flex flex-col items-center">
            <h1 className="text-heading font-heading mb-medium">Product Listing</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-medium">
                {products.map(product => (
                    <div key={product.id} className="shadow border border-borderColors rounded border-radius transition-transform transform hover:scale-105">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListingPage;