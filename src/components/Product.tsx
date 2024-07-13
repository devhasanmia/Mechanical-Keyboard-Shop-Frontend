import { IoIosStarOutline } from "react-icons/io";

const ProductShowcase = () => {
  return (
    <div className="mt-20 mb-10">
      <div className="container mx-auto px-5">
        <h1 className="text-3xl font-bold mb-8">Explore our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="bg-white p-5 shadow-md rounded-lg relative group hover:border">
            <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png" alt="Product Image" className="w-full h-auto mb-5" />
            <button className="bg-[#ff497c] text-white px-2 py-1 rounded hover:bg-[#ff497c] transition duration-300 absolute inset-x-0 bottom-2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100">Add to Cart</button>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">Yantiti Leather & Canvas Bags</h2>
              <div className="flex justify-center items-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <IoIosStarOutline key={index} className="text-yellow-500" />
                ))}
                <span className="ml-2">(40)</span>
              </div>
              <div className="text-lg font-bold mb-1">$250 <del className="text-gray-500">$500</del></div>
            </div>
          </div>
          {/* Add New Product */}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
