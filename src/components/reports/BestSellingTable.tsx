interface BestSellingItem {
  category: string;
  turnOver: string;
  increaseBy: string;
}

interface BestSellingTableProps {
  title: string;
  items: BestSellingItem[];
}

export const BestSellingTable = ({ title, items }: BestSellingTableProps) => (
  <div className="bg-white rounded-lg p-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      <button className="text-blue-600 text-sm">See All</button>
    </div>
    <table className="w-full">
      <thead>
        <tr className="border-b border-gray-100">
          <th className="text-left py-3 text-gray-600">Category</th>
          <th className="text-left py-3 text-gray-600">Turn Over</th>
          <th className="text-left py-3 text-gray-600">Increase By</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index} className="border-b border-gray-50">
            <td className="py-3">{item.category}</td>
            <td className="py-3">{item.turnOver}</td>
            <td className="py-3 text-green-600">{item.increaseBy}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);