interface OverviewMetric {
  label: string;
  value: string;
  color?: string;
}

interface OverviewCardProps {
  metrics: {
    mainMetrics: OverviewMetric[];
    subMetrics: OverviewMetric[];
  };
}

export const OverviewCard = ({ metrics }: OverviewCardProps) => (
  <div className="bg-white rounded-lg p-6">
    <div className="grid grid-cols-3 gap-8 mb-8">
      {metrics.mainMetrics.map((metric, index) => (
        <div key={index}>
          <p className={`text-2xl font-semibold ${metric.color || 'text-gray-900'}`}>
            {metric.value}
          </p>
          <p className="text-gray-600 mt-1">{metric.label}</p>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-4 gap-6">
      {metrics.subMetrics.map((metric, index) => (
        <div key={index}>
          <p className="text-lg font-medium">{metric.value}</p>
          <p className="text-sm text-gray-500">{metric.label}</p>
        </div>
      ))}
    </div>
  </div>
);