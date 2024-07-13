import { TiMinus, TiPlus } from "react-icons/ti";
const CartPage = () => {

  const cartItems = [
    {
      id: 1,
      name: 'Mechanical Keyboard',
      image: 'https://via.placeholder.com/150',
      price: '$99.99',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Mechanical Mouse',
      image: 'https://via.placeholder.com/150',
      price: '$49.99',
      quantity: 2,
    },
  ];

  const CartItem = ({ item }) => (

    <div className="flex items-center mb-6 border-b pb-3">
      <img src={item.image} alt={item.name} className="w-16 h-16 mr-4 rounded-md shadow-md" />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">{item.price}</p>
        <div className="flex items-center mt-2">
          <button
            className="text-white focus:outline-none py-1 px-7 bg-red-500 hover:bg-red-600 rounded-md"

          >
            <TiMinus />
          </button>
          <span className="mx-2">5</span>
          <button
            className="text-white focus:outline-none py-1 px-7 bg-blue-500 hover:bg-blue-600 rounded-md"
          >
            <TiPlus />
          </button>
        </div>
      </div>
    </div>
  );

  const CartSummary = () => (
    <div className="ml-auto w-1/3 p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
      <div className="flex justify-between mt-4">
        <span className="text-gray-600">Subtotal:</span>
        <span className="font-semibold">$100</span>
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-gray-600">Taxes:</span>
        <span className="font-semibold">$10</span>
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-gray-600">Total:</span>
        <span className="font-bold">$110</span>
      </div>
      <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md shadow-md w-full">
        Proceed to Checkout
      </button>
    </div>
  );

  return (
    <div className="container mx-auto py-12 px-4 flex">
      <div className="w-2/3 pr-8">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-lg text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </>
        )}
      </div>
      <CartSummary />
    </div>
  );
};

export default CartPage;
