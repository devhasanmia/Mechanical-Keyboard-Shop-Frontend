import React, { useState } from 'react';

const OrdersManagement = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: 'John Doe',
      total: 199.98,
      status: 'Shipped',
      date: '2024-07-10',
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      total: 99.99,
      status: 'Processing',
      date: '2024-07-11',
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setOrders(orders.map(order => (order.id === id ? { ...order, status: newStatus } : order)));
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-5 shadow-lg">
      <h1 className="text-2xl font-bold mb-5">Orders Management</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.customerName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.total}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.status}</td>
              <td className="px-6 py-4 whitespace-nowrap">{new Date(order.date).toLocaleDateString()}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  className="form-select mt-1 block w-full"
                >
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersManagement;
