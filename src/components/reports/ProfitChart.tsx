import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { formatCurrency, formatDate } from '../../utils/formatters';

interface ChartData {
  date: Date;
  revenue: number;
  profit: number;
}

interface ProfitChartProps {
  data: ChartData[];
  period: 'Weekly' | 'Monthly' | 'Yearly';
}

export const ProfitChart = ({ data, period }: ProfitChartProps) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-semibold">Profit & Revenue</h3>
      <div className="flex items-center gap-2">
        <button className="px-3 py-1 bg-gray-100 rounded-md text-sm">{period}</button>
      </div>
    </div>
    
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="date" 
            tickFormatter={(date) => formatDate(new Date(date))}
          />
          <YAxis tickFormatter={(value) => formatCurrency(value)} />
          <Tooltip 
            formatter={(value: number) => formatCurrency(value)}
            labelFormatter={(date) => formatDate(new Date(date as string))}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#3B82F6" 
            name="Revenue"
          />
          <Line 
            type="monotone" 
            dataKey="profit" 
            stroke="#10B981" 
            name="Profit"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);