import { DollarSign, ShoppingCart, TrendingUp, Home } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { Chart } from '../components/Chart';

const salesData = [
  { name: 'Jan', purchase: 54000, sales: 48000 },
  { name: 'Feb', purchase: 57000, sales: 47000 },
  { name: 'Mar', purchase: 44000, sales: 52000 },
  // Add more data points...
];

export const Dashboard = () => (
  <div className="p-8 space-y-8">
    <div className="grid grid-cols-4 gap-6">
      <StatCard
        icon={<ShoppingCart className="w-6 h-6 text-blue-500" />}
        label="Sales"
        value="$ 832"
      />
      <StatCard
        icon={<DollarSign className="w-6 h-6 text-purple-500" />}
        label="Revenue"
        value="$ 18,300"
        color="purple"
      />
      <StatCard
        icon={<TrendingUp className="w-6 h-6 text-orange-500" />}
        label="Profit"
        value="$ 868"
        color="orange"
      />
      <StatCard
        icon={<Home className="w-6 h-6 text-green-500" />}
        label="Cost"
        value="$ 17,432"
        color="green"
      />
    </div>

    <div className="grid grid-cols-2 gap-6">
      <Chart
        data={salesData}
        title="Sales & Purchase"
        period="Weekly"
      />
      {/* Add more charts/components */}
    </div>
  </div>
);