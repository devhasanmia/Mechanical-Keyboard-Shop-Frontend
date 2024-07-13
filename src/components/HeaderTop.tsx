import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const HeaderTop = () => {
  return (
    <div className="py-4 bg-white">
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center'>
          <div className="text-2xl font-bold text-yellow-400">
            <Link to='/'>MK Shop</Link>
          </div>
          <div className='relative flex w-1/2'>
            <input
              type="text"
              placeholder='What are you looking for...'
              className='w-full px-4 py-2 rounded-l border placeholder-gray-500 focus:outline-none'
            />
            <button className='bg-gray-50 px-4 py-2 rounded-r focus:outline-none'>
              <FaSearch />
            </button>
          </div>
          <div>
            <Link to="/dashboard" className='bg-gray-50 p-3 rounded-sm text-lg hover:text-blue-500 transition duration-300'>
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
