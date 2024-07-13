import React from 'react';
import { IoIosStarOutline, IoIosSearch } from 'react-icons/io';
const Products = () => {
  // Placeholder product data for demonstration
  const products = [
    {
      id: 1,
      name: 'Yantiti Leather & Canvas Bags',
      imageUrl: 'https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png',
      price: 250,
      originalPrice: 500,
      rating: 4,
      reviews: 30,
      onSale: true,
      brand: 'Yantiti',
    },
    {
      id: 1,
      name: 'Yantiti Leather & Canvas Bags',
      imageUrl: 'https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-06.png',
      price: 250,
      originalPrice: 500,
      rating: 4,
      reviews: 30,
      onSale: true,
      brand: 'Yantiti',
    },
    {
      id: 1,
      name: 'Yantiti Leather & Canvas Bags',
      imageUrl: 'https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-12.png',
      price: 250,
      originalPrice: 500,
      rating: 4,
      reviews: 30,
      onSale: true,
      brand: 'Yantiti',
    },
    {
      id: 1,
      name: 'Yantiti Leather & Canvas Bags',
      imageUrl: 'https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-9.png',
      price: 250,
      originalPrice: 500,
      rating: 4,
      reviews: 30,
      onSale: true,
      brand: 'Yantiti',
    },
    {
      id: 1,
      name: 'Yantiti Leather & Canvas Bags',
      imageUrl: 'https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-02.png',
      price: 250,
      originalPrice: 500,
      rating: 4,
      reviews: 30,
      onSale: true,
      brand: 'Yantiti',
    },
    {
      id: 1,
      name: 'Yantiti Leather & Canvas Bags',
      imageUrl: 'https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-04.png',
      price: 250,
      originalPrice: 500,
      rating: 4,
      reviews: 30,
      onSale: true,
      brand: 'Yantiti',
    },
    // Add more products as needed
  ];

  return (
    <div className="container mx-auto px-5 mt-10 mb-10">
      <h1 className="text-3xl font-bold mb-8">Explore our Products</h1>
      <div className="flex mb-6">
        {/* Added Search */}
        <input
          type="text"
          className="border-2 border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
          placeholder="Search for products..."
        />
        <button className="ml-4 bg-blue-500 text-white px-4 mr-5 rounded-md"><IoIosSearch /></button>
        <select className="border-2 border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500">
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
        <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md">Filter</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-5 shadow-md rounded-lg relative group hover:border">
            <img src={product.imageUrl} alt="Product Image" className="w-full h-auto mb-5" />
            <button className="bg-[#ff497c] text-white px-2 py-1 rounded hover:bg-[#ff497c] transition duration-300 absolute inset-x-0 bottom-2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100">
              Add to Cart
            </button>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <div className="flex justify-center items-center mb-2">
                {[...Array(product.rating)].map((_, index) => (
                  <IoIosStarOutline key={index} className="text-yellow-500" />
                ))}
                <span className="ml-2">({product.reviews})</span>
              </div>
              <div className="text-lg font-bold mb-1">
                ${product.price} <del className="text-gray-500">${product.originalPrice}</del>
              </div>
              {product.onSale && <div className="text-sm text-red-500">Sale</div>}
              <div className="text-sm text-gray-600">Brand: {product.brand}</div>
            </div>
          </div>
        ))}
        {/* Add New Product */}
      </div>
    </div>
  );
};

export default Products;
