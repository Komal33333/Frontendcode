import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartProps {
  data: any[];
  title: string;
  period: string;
}

export const Chart = ({ data, title, period }: ChartProps) => (
  <div className="bg-white p-6 rounded-lg">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="flex items-center gap-2 text-sm">
        <span className="px-3 py-1 bg-gray-100 rounded-md">{period}</span>
      </div>
    </div>
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="purchase" stroke="#3B82F6" />
          <Line type="monotone" dataKey="sales" stroke="#10B981" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);