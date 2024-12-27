interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  color?: string;
}

export const StatCard = ({ icon, label, value, color = 'blue' }: StatCardProps) => (
  <div className="flex items-center gap-4 p-6 bg-white rounded-lg">
    <div className={`p-3 rounded-lg bg-${color}-50`}>
      {icon}
    </div>
    <div>
      <p className="text-2xl font-semibold">{value}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  </div>
);