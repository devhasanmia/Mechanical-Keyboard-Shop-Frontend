import { Link } from 'react-router-dom';
import NotFoundImage from "../assets/404.jpg"
const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="text-center">
        <img
          src={NotFoundImage}
          width="400"
          height="300"
          alt="Not Found"
          className="mx-auto mb-2 -mt-20"
        />
        <Link to="/" className="bg-[#ececec] p-3 font-semibold px-4 py-2 rounded hover:bg-blue-500 hover:text-white duration-500	transition-duration: 500ms;">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
