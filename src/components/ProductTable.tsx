import { useState } from 'react';
import { Filter, Download } from 'lucide-react';

interface Product {
  name: string;
  price: number;
  quantity: string;
  threshold: string;
  expiry: string;
  availability: 'In-stock' | 'Out of stock';
}

const products: Product[] = [
  {
    name: 'Maggi',
    price: 430,
    quantity: '43 Packets',
    threshold: '12 Packets',
    expiry: '11/12/22',
    availability: 'In-stock'
  },
  // Add more products...
];

export const ProductTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Products</h2>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Add Product
          </button>
          <button className="px-4 py-2 border border-gray-200 rounded-lg flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </button>
          <button className="px-4 py-2 border border-gray-200 rounded-lg flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download all
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4">Products</th>
              <th className="text-left py-3 px-4">Buying Price</th>
              <th className="text-left py-3 px-4">Quantity</th>
              <th className="text-left py-3 px-4">Threshold Value</th>
              <th className="text-left py-3 px-4">Expiry Date</th>
              <th className="text-left py-3 px-4">Availability</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-3 px-4">{product.name}</td>
                <td className="py-3 px-4">₹{product.price}</td>
                <td className="py-3 px-4">{product.quantity}</td>
                <td className="py-3 px-4">{product.threshold}</td>
                <td className="py-3 px-4">{product.expiry}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    product.availability === 'In-stock' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.availability}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button className="px-4 py-2 border border-gray-200 rounded-lg">
          Previous
        </button>
        <span>Page {currentPage} of 10</span>
        <button className="px-4 py-2 border border-gray-200 rounded-lg">
          Next
        </button>
      </div>
    </div>
  );
};