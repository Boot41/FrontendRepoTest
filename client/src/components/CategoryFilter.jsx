import React, { useState } from 'react';

const categories = ['Electronics', 'Books', 'Clothing', 'Home & Garden', 'Sports'];

const CategoryFilter = ({ onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <div className="flex flex-col bg-primaryBackground shadow-md rounded-md p-large" style={{ height: '100vh', width: '200px' }}>
      <h2 className="text-heading font-heading text-xl mb-medium">Product Categories</h2>
      <ul className="space-y-medium">
        {categories.map((category) => (
          <li
            key={category}
            className={`cursor-pointer py-medium px-large rounded-md transition-all duration-300 ${selectedCategory === category ? 'bg-primaryColor text-white' : 'hover:bg-secondaryColor'}`}
            onClick={() => handleCategoryClick(category)}
            style={{ border: `1px solid ${borderColors}`, transition: 'background-color 0.3s ease-in-out' }}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;