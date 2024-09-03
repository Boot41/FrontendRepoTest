import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm mx-auto rounded border border-[#E0E0E0] shadow-[0_2px_4px_rgba(0,0,0,0.1)] bg-[#FFFFFF] transition-all duration-[0.3s] hover:shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t" />
      <div className="p-[16px]">
        <h2 className="text-[#212121] text-[24px] font-[700] leading-[1.5] mb-[8px]">{product.name}</h2>
        <p className="text-[#757575] text-[14px] mb-[12px]">${product.price}</p>
        <button className="w-full bg-[#4CAF50] text-white rounded-[4px] py-[10px] hover:bg-[#388E3C] transition-all duration-300">
          Quick View
        </button>
      </div>
    </div>
  );
};

export default ProductCard;