import { formatCurrency } from '../../utils/formatters';

interface Order {
  id: string;
  product: string;
  orderValue: number;
  quantity: string;
  orderId: string;
  expectedDelivery: string;
  status: 'Delayed' | 'Confirmed' | 'Returned' | 'Out for delivery';
}

interface OrderListProps {
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

export const OrderList = ({ orders, currentPage, totalPages, onPageChange }: OrderListProps) => (
  <div className="bg-white rounded-lg">
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
        {orders.map((order) => (
          <tr key={order.id} className="border-b border-gray-200">
            <td className="py-3 px-4">{order.product}</td>
            <td className="py-3 px-4">{formatCurrency(order.orderValue)}</td>
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

    <div className="flex justify-between items-center p-4 border-t border-gray-200">
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