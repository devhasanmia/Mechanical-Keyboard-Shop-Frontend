import { MdOutlineSupportAgent } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { SiSpeedypage } from "react-icons/si";
// import { FaTruckFast } from "react-icons/fa";

const Service = () => {
    return (
        <div className="mt-10 p-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="border rounded-lg bg-blue-400 text-white p-6 shadow-md flex flex-col items-center justify-center">
                        <MdOutlineSupportAgent className="text-5xl mb-4" />
                        <h2 className="text-2xl font-bold mb-2">24/7 Support</h2>
                        <p className="text-center">We're here to help you every step of the way. Feel free to reach out anytime.</p>
                    </div>
                    <div className="border rounded-lg bg-purple-600 text-white p-6 shadow-md flex flex-col items-center justify-center">
                        <GiReturnArrow className="text-5xl mb-4" />
                        <h2 className="text-2xl font-bold mb-2">24 Hour Return Policy</h2>
                        <p className="text-center">We'll return your products within 24 hours of receiving them.</p>
                    </div>
                    <div className="border rounded-lg bg-yellow-400 text-white p-6 shadow-md flex flex-col items-center justify-center">
                        <SiSpeedypage className="text-5xl mb-4" />
                        <h2 className="text-2xl font-bold mb-2">Next Level Pro</h2>
                        <p className="text-center">Our products are made with the highest quality.</p>
                    </div>
                    <div className="border rounded-lg bg-green-500 text-white p-6 shadow-md flex flex-col items-center justify-center">
                        <SiSpeedypage className="text-5xl mb-4" />
                        <h2 className="text-2xl font-bold mb-2">Fast Delivery</h2>
                        <p className="text-center">We deliver our products quickly and safely.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
