import { Order } from '../../types/order';
import { Filter } from 'lucide-react';

interface OrderTableProps {
  orders: Order[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const getStatusColor = (status: Order['status']) => {
  const colors = {
    'Delayed': 'text-orange-600',
    'Confirmed': 'text-blue-600',
    'Returned': 'text-gray-600',
    'Out for delivery': 'text-green-600'
  };
  return colors[status];
};

export const OrderTable = ({ orders, currentPage, totalPages, onPageChange }: OrderTableProps) => (
  <div className="bg-white rounded-lg p-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold">Orders</h2>
      <div className="flex gap-3">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add Product
        </button>
        <button className="px-4 py-2 border border-gray-200 rounded-lg flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Filters
        </button>
        <button className="px-4 py-2 border border-gray-200 rounded-lg">
          Order History
        </button>
      </div>
    </div>

    <table className="w-full">
      <thead>
        <tr className="border-b border-gray-200">
          <th className="text-left py-3 px-4">Products</th>
          <th className="text-left py-3 px-4">Order Value</th>
          <th className="text-left py-3 px-4">Quantity</th>
          <th className="text-left py-3 px-4">Order ID</th>
          <th className="text-left py-3 px-4">Expected Delivery</th>
          <th className="text-left py-3 px-4">Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={index} className="border-b border-gray-200">
            <td className="py-3 px-4">{order.product}</td>
            <td className="py-3 px-4">₹{order.orderValue}</td>
            <td className="py-3 px-4">{order.quantity}</td>
            <td className="py-3 px-4">{order.orderId}</td>
            <td className="py-3 px-4">{order.expectedDelivery}</td>
            <td className={`py-3 px-4 ${getStatusColor(order.status)}`}>
              {order.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <div className="flex justify-between items-center mt-4">
      <button 
        className="px-4 py-2 border border-gray-200 rounded-lg"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button 
        className="px-4 py-2 border border-gray-200 rounded-lg"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  </div>
);