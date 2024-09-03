import React from 'react';

const ProductDetails = ({ product }) => {
    return (
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <img src={product.image} alt={product.name} className="w-full h-72 object-cover rounded-lg mb-4" />
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
            <p className="text-lg font-semibold text-gray-800 mb-4">${product.price}</p>
            <div className="mb-4">
                <label htmlFor="quantity" className="block text-gray-700 mb-1">Quantity:</label>
                <input type="number" id="quantity" min="1" defaultValue="1" className="border border-gray-300 rounded-md p-2 w-16" />
            </div>
            <div className="mb-4">
                <label htmlFor="size" className="block text-gray-700 mb-1">Size:</label>
                <select id="size" className="border border-gray-300 rounded-md p-2 w-full">
                    {product.sizes.map(size => (
                        <option key={size} value={size}>{size}</option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="color" className="block text-gray-700 mb-1">Color:</label>
                <select id="color" className="border border-gray-300 rounded-md p-2 w-full">
                    {product.colors.map(color => (
                        <option key={color} value={color}>{color}</option>
                    ))}
                </select>
            </div>
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300 ease-in-out">Add to Cart</button>
        </div>
    );
};

export default ProductDetails;