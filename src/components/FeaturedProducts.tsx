import React from 'react';

const products = [
  {
    id: 1,
    name: 'Mechanical Keyboard 1',
    description: 'A high-quality mechanical keyboard',
    imageUrl: 'https://via.placeholder.com/150',
    price: '$99.99',
  },
  {
    id: 2,
    name: 'Mechanical Keyboard 2',
    description: 'A premium mechanical keyboard',
    imageUrl: 'https://via.placeholder.com/150',
    price: '$129.99',
  },
];

const FeaturedProducts = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-md p-4">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-blue-500 font-bold mt-2">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
