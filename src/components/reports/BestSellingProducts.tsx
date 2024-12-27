import { formatCurrency, formatPercentage } from '../../utils/formatters';

interface Product {
  id: string;
  name: string;
  category: string;
  quantity: number;
  turnover: number;
  increaseBy: number;
}

interface BestSellingProductsProps {
  products: Product[];
}

export const BestSellingProducts = ({ products }: BestSellingProductsProps) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-semibold">Best Selling Products</h3>
      <button className="text-blue-600 text-sm">See All</button>
    </div>
    
    <table className="w-full">
      <thead>
        <tr className="border-b border-gray-100">
          <th className="text-left py-3 text-gray-600">Product</th>
          <th className="text-left py-3 text-gray-600">Category</th>
          <th className="text-left py-3 text-gray-600">Quantity</th>
          <th className="text-left py-3 text-gray-600">Turn Over</th>
          <th className="text-left py-3 text-gray-600">Increase By</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id} className="border-b border-gray-50">
            <td className="py-3">{product.name}</td>
            <td className="py-3">{product.category}</td>
            <td className="py-3">{product.quantity} Units</td>
            <td className="py-3">{formatCurrency(product.turnover)}</td>
            <td className="py-3 text-green-600">
              {formatPercentage(product.increaseBy)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);