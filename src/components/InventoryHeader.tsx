interface MetricProps {
  label: string;
  value: string | number;
  subtext: string;
  textColor?: string;
}

const Metric = ({ label, value, subtext, textColor = "text-gray-900" }: MetricProps) => (
  <div className="px-6 py-4 bg-white rounded-lg">
    <p className={`text-sm font-medium ${textColor}`}>{label}</p>
    <p className="text-2xl font-semibold mt-1">{value}</p>
    <p className="text-sm text-gray-500 mt-1">{subtext}</p>
  </div>
);

export const InventoryHeader = () => (
  <div className="grid grid-cols-4 gap-4">
    <Metric
      label="Categories"
      value="14"
      subtext="Last 7 days"
      textColor="text-blue-600"
    />
    <Metric
      label="Total Products"
      value="868"
      subtext="Last 7 days"
      textColor="text-orange-600"
    />
    <Metric
      label="Top Selling"
      value="5"
      subtext="Last 7 days"
      textColor="text-purple-600"
    />
    <Metric
      label="Low Stocks"
      value="12"
      subtext="Ordered"
      textColor="text-red-600"
    />
  </div>
);