import React, { useState } from 'react';

const FilterOptions = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-heading font-heading text-2xl mb-4">Select Category</h2>
      <div className="flex space-x-4">
        <button
          className="bg-primaryButton text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:shadow-lg hover:bg-green-600"
          onClick={() => handleFilterClick('electronics')}
          style={{ transition: 'background-color 0.3s' }}
        >
          Electronics
        </button>
        <button
          className="bg-primaryButton text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:shadow-lg hover:bg-green-600"
          onClick={() => handleFilterClick('clothing')}
          style={{ transition: 'background-color 0.3s' }}
        >
          Clothing
        </button>
        <button
          className="bg-primaryButton text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:shadow-lg hover:bg-green-600"
          onClick={() => handleFilterClick('home')}
          style={{ transition: 'background-color 0.3s' }}
        >
          Home
        </button>
      </div>
      {selectedFilter && <p className="mt-4 text-body">Selected Filter: {selectedFilter}</p>}
    </div>
  );
};

export default FilterOptions;