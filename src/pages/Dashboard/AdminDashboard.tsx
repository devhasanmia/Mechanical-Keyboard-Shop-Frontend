import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Jan', sales: 2565 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 2000 },
    { name: 'Apr', sales: 2780 },
    { name: 'May', sales: 1890 },
    { name: 'Jun', sales: 2390 },
    { name: 'Jul', sales: 3490 },
];

const AdminDashboard = () => {
    return (
        <div className="p-5">
            <h1 className="text-4xl font-bold mb-5">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-green-500 text-white rounded-md p-5 text-center font-semibold text-2xl">
                    <h1>Total Products</h1>
                    <p>50</p>
                </div>
                <div className="bg-purple-600 text-white rounded-md p-5 text-center font-semibold text-2xl">
                    <h1>Total Orders</h1>
                    <p>50</p>
                </div>
                <div className="bg-blue-500 text-white rounded-md p-5 text-center font-semibold text-2xl">
                    <h1>Total Users</h1>
                    <p>120</p>
                </div>
                <div className="bg-red-500 text-white rounded-md p-5 text-center font-semibold text-2xl">
                    <h1>Revenue</h1>
                    <p>$10,000</p>
                </div>
            </div>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-white shadow-md rounded-md p-5">
                    <h2 className="text-xl font-semibold mb-5">Sales Data</h2>
                    <div className="overflow-x-auto">
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="sales" fill="#22c55e" />
                        </BarChart>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-md p-5">
                    <h2 className="text-xl font-semibold mb-5">Top Products</h2>
                    <ul>
                        <li>Product A - 200 sales</li>
                        <li>Product B - 150 sales</li>
                        <li>Product C - 100 sales</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
