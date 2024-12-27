import { formatCurrency } from '../../utils/formatters';

interface MetricCardProps {
  label: string;
  value: number;
  subtext: string;
  color?: string;
}

export const MetricCard = ({ label, value, subtext, color = 'text-gray-900' }: MetricCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <p className={`text-sm font-medium ${color}`}>{label}</p>
    <p className="text-2xl font-semibold mt-1">{formatCurrency(value)}</p>
    <p className="text-sm text-gray-500 mt-1">{subtext}</p>
  </div>
);