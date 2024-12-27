import { OrderSummary } from '../../types/order';

interface OrderSummaryCardProps {
  summary: OrderSummary;
}

export const OrderSummaryCard = ({ summary }: OrderSummaryCardProps) => (
  <div className="grid grid-cols-4 gap-4 mb-6">
    <div className="bg-white p-4 rounded-lg">
      <h3 className="text-blue-600 font-medium">Total Orders</h3>
      <p className="text-2xl font-semibold mt-1">{summary.totalOrders}</p>
      <p className="text-sm text-gray-500">Last 7 days</p>
    </div>
    <div className="bg-white p-4 rounded-lg">
      <h3 className="text-orange-600 font-medium">Total Received</h3>
      <p className="text-2xl font-semibold mt-1">{summary.totalReceived.count}</p>
      <p className="text-sm text-gray-500">₹{summary.totalReceived.revenue}</p>
    </div>
    <div className="bg-white p-4 rounded-lg">
      <h3 className="text-purple-600 font-medium">Total Returned</h3>
      <p className="text-2xl font-semibold mt-1">{summary.totalReturned.count}</p>
      <p className="text-sm text-gray-500">₹{summary.totalReturned.cost}</p>
    </div>
    <div className="bg-white p-4 rounded-lg">
      <h3 className="text-red-600 font-medium">On the way</h3>
      <p className="text-2xl font-semibold mt-1">{summary.onTheWay.count}</p>
      <p className="text-sm text-gray-500">₹{summary.onTheWay.cost}</p>
    </div>
  </div>
);