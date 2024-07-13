import React from 'react';

const ProductsTable = () => {
  const products = [
    {
      id: 1,
      name: 'Mechanical Keyboard 1',
      description: 'High-quality mechanical keyboard',
      price: 99.99,
      category: 'Mechanical Keyboards',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Mechanical Keyboard 2',
      description: 'Durable and reliable mechanical keyboard',
      price: 119.99,
      category: 'Mechanical Keyboards',
      image: 'https://via.placeholder.com/150',
    },
    // Add more products as needed
  ];

  return (
    <div className="max-w-6xl mx-auto mt-10 p-5 shadow-lg">
      <h1 className="text-2xl font-bold mb-5">All Products</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.description}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.category}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
