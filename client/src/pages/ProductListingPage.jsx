import React from 'react';
import ProductCard from '../components/ProductCard';

const ProductListingPage = () => {
    const products = [
        // Example product data
        { id: 1, name: 'Product A', price: 29.99, image: '/images/product-a.jpg' },
        { id: 2, name: 'Product B', price: 39.99, image: '/images/product-b.jpg' },
        { id: 3, name: 'Product C', price: 49.99, image: '/images/product-c.jpg' },
        // Add more products as needed
    ];

    return (
        <div className="bg-secondaryBackground py-medium">
            <h1 className="text-heading text-24 font-heading text-heading text-center mb-large">Product Listing</h1>
            <div className="container mx-auto px-medium grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-large">
                {products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        name={product.name} 
                        price={product.price} 
                        image={product.image} 
                        className="shadow-md rounded border border-borderColors transition-shadow duration-300 hover:shadow-lg" 
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductListingPage;