import { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { MetricCard } from '../components/reports/MetricCard';
import { ProfitChart } from '../components/reports/ProfitChart';
import { BestSellingProducts } from '../components/reports/BestSellingProducts';

const mockChartData = [
  { date: new Date('2024-01-01'), revenue: 54000, profit: 48000 },
  { date: new Date('2024-02-01'), revenue: 57000, profit: 47000 },
  { date: new Date('2024-03-01'), revenue: 44000, profit: 52000 },
];

const mockProducts = [
  {
    id: '1',
    name: 'Mercedes',
    category: 'Engine',
    quantity: 225,
    turnover: 17000,
    increaseBy: 2.3
  },
  {
    id: '2',
    name: 'Lights',
    category: 'Body Parts',
    quantity: 200,
    turnover: 12000,
    increaseBy: 1.3
  },
];

export const Reports = () => {
  const [period, setPeriod] = useState<'Weekly' | 'Monthly' | 'Yearly'>('Monthly');

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

      <div className="grid grid-cols-4 gap-6">
        <MetricCard
          label="Total Profit"
          value={21190}
          subtext="Last 30 days"
        />
        <MetricCard
          label="Revenue"
          value={18300}
          subtext="Last 30 days"
          color="text-orange-600"
        />
        <MetricCard
          label="Sales"
          value={17432}
          subtext="Last 30 days"
          color="text-purple-600"
        />
        <MetricCard
          label="Net Purchase"
          value={117432}
          subtext="Last 30 days"
          color="text-green-600"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <ProfitChart data={mockChartData} period={period} />
        <BestSellingProducts products={mockProducts} />
      </div>
    </div>
  );
};