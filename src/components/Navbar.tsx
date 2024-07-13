import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    return (
        <div className='bg-[#f7f7f7]'>
            <div className="container m-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div>
                            <div className="flex gap-2">
                                {location.pathname === '/' ? (
                                    <h1 className="flex gap-2 font-semibold">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                                        </svg>
                                        Category
                                    </h1>
                                ) : (
                                    <div className="text-2xl font-bold text-yellow-400">
                                        <Link to='/'>MK Shop</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="navbar-center flex justify-center">
                        <Link to="/" className="p-3 text-slate-950 hover:text-blue-500 transition duration-300">Home</Link>
                        <Link to="/products" className="p-3 text-slate-950 hover:text-blue-500 transition duration-300">Products</Link>
                        <Link to="/about-us" className="p-3 text-slate-950 hover:text-blue-500 transition duration-300">About Us</Link>
                        <Link to="/contact-us" className="p-3 text-slate-950 hover:text-blue-500 transition duration-300">Contact Us</Link>
                    </div>
                    <div className="navbar-end">
                        <Link to="/cart">
                            <button className="btn btn-ghost btn-circle" aria-label="Cart">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                    <span className="badge badge-xs badge-primary indicator-item">5</span>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
