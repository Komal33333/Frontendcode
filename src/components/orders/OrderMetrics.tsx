import { formatCurrency } from '../../utils/formatters';

interface OrderMetric {
  label: string;
  value: number;
  subtext: string;
  revenue?: number;
  cost?: number;
  color?: string;
}

interface OrderMetricsProps {
  metrics: OrderMetric[];
}

export const OrderMetrics = ({ metrics }: OrderMetricsProps) => (
  <div className="grid grid-cols-4 gap-4">
    {metrics.map((metric, index) => (
      <div key={index} className="bg-white p-4 rounded-lg">
        <h3 className={`text-sm font-medium ${metric.color || 'text-blue-600'}`}>
          {metric.label}
        </h3>
        <p className="text-2xl font-semibold mt-1">{metric.value}</p>
        <p className="text-sm text-gray-500">{metric.subtext}</p>
        {metric.revenue && (
          <p className="text-sm text-gray-500">
            Revenue: {formatCurrency(metric.revenue)}
          </p>
        )}
        {metric.cost && (
          <p className="text-sm text-gray-500">
            Cost: {formatCurrency(metric.cost)}
          </p>
        )}
      </div>
    ))}
  </div>
);