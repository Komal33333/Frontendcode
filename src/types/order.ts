export interface Order {
  product: string;
  orderValue: number;
  quantity: string;
  orderId: string;
  expectedDelivery: string;
  status: 'Delayed' | 'Confirmed' | 'Returned' | 'Out for delivery';
}

export interface OrderSummary {
  totalOrders: number;
  totalReceived: { count: number; revenue: number };
  totalReturned: { count: number; cost: number };
  onTheWay: { count: number; cost: number };
}