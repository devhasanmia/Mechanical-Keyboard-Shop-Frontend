const Footer = () => {
    return (
        <footer className="py-10 shadow-sm p-5">
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div>
                        <h2 className="text-lg font-semibold mb-4">About Us</h2>
                        <p>At Mechanical Keyboard Shop, we are passionate about providing enthusiasts and professionals with the best mechanical keyboards on the market. Established with a deep appreciation for the art and science of keyboard engineering, our mission is to bring the finest typing experience to everyone from casual users to hardcore gamers.</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Shop</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                        <ul>
                            <li className="mb-2">Chandrapur, Purulia - 6400, Gurudaspur, Natore</li>
                            <li className="mb-2">Email: hasanmiaweb@gmail.com</li>
                            <li className="mb-2">Phone: +8801740398196</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 text-center">
                    <p>&copy; 2024 Mechanical Keyboard Shop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
