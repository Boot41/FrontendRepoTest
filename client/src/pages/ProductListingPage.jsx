import React from 'react';
import ProductCard from '../components/ProductCard';

const ProductListingPage = () => {
    return (
        <div className="bg-[#F5F5F5] p-[16px]">
            <h1 className="text-[#212121] text-[24px] font-[700] mb-[24px]">Product Listing</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default ProductListingPage;