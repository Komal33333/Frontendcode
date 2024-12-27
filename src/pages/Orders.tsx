import { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { OrderMetrics } from '../components/orders/OrderMetrics';
import { OrderFilters } from '../components/orders/OrderFilters';
import { OrderList } from '../components/orders/OrderList';
import { AddProductForm } from '../components/orders/AddProductForm';

const mockOrders = [
  {
    id: '1',
    product: 'Maggi',
    orderValue: 4306,
    quantity: '43 Packets',
    orderId: '7535',
    expectedDelivery: '11/12/22',
    status: 'Delayed' as const
  },
  // Add more mock orders...
];

const mockMetrics = [
  {
    label: 'Total Orders',
    value: 37,
    subtext: 'Last 7 days',
    color: 'text-blue-600'
  },
  {
    label: 'Total Received',
    value: 32,
    subtext: 'Last 7 days',
    revenue: 25000,
    color: 'text-orange-600'
  },
  {
    label: 'Total Returned',
    value: 5,
    subtext: 'Last 7 days',
    cost: 2500,
    color: 'text-purple-600'
  },
  {
    label: 'On the way',
    value: 12,
    subtext: 'Ordered',
    cost: 2356,
    color: 'text-red-600'
  }
];

export const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddProduct, setShowAddProduct] = useState(false);

  const handleAddProduct = (data: any) => {
    console.log('Adding product:', data);
    setShowAddProduct(false);
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <SearchBar />
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full bg-gray-100">
            <span className="sr-only">Notifications</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-200" />
        </div>
      </div>

      <OrderMetrics metrics={mockMetrics} />

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Orders</h2>
        <OrderFilters 
          onAddProduct={() => setShowAddProduct(true)}
          onShowHistory={() => console.log('Show history')}
        />
      </div>

      {showAddProduct ? (
        <AddProductForm 
          onSubmit={handleAddProduct}
          onCancel={() => setShowAddProduct(false)}
        />
      ) : (
        <OrderList
          orders={mockOrders}
          currentPage={currentPage}
          totalPages={10}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};