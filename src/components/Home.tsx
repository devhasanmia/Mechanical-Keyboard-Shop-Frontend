import { FaKeyboard, FaCheckCircle, FaCircle, FaThumbsUp, FaStar, FaRegKeyboard, FaMouse, FaHeadphones, FaGamepad } from 'react-icons/fa';
import Service from './ui/Service';
import ProductShowcase from './Product';
import TopFeaturedBrands from './ui/TopFeaturedBrands';
import CustomerReviews from './ui/CustomerReviews';

const Home = () => {
    return (
        <>
            <div className='container mx-auto flex'>
                {/* Menu Start */}
                <ul className="menu bg-white w-full sm:w-60 shadow-md font-semibold hidden md:block">
                    <li><a><FaKeyboard /> BOOP REDUX</a></li>
                    <li><a><FaCheckCircle /> PAVLOV</a></li>
                    <li><a><FaCircle /> 461E</a></li>
                    <li><a><FaThumbsUp /> Tofu60 Redux</a></li>
                    <li><a><FaStar /> EPIPHANY 70</a></li>
                    <li><a><FaRegKeyboard /> Odin 75</a></li>
                    <li><a><FaMouse /> KeyMou</a></li>
                    <li><a><FaHeadphones /> SounderLite</a></li>
                    <li><a><FaGamepad /> GameChanger</a></li>
                </ul>
                {/* Menu End */}
                {/* Product Section */}
                <div className="flex-1 ml-10 mt-2">
                    {/* Product Card Example */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img className='w-full min-h-full' height={"100px !importent"} src="https://mechanicalkeyboards.com/cdn/shop/files/mk-shopify-websitebanner-leopold-MX2A.png?v=1719953569&width=2200" alt="" />
                    </div>
                </div>
                {/* Product Section End */}
            </div>
            <Service />
            <ProductShowcase />
            <TopFeaturedBrands/>
            <CustomerReviews/>

        </>
    );
}

export default Home;
