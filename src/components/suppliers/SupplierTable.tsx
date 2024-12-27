import { SupplierTableProps } from '../../types/supplier';
import { Filter, Download } from 'lucide-react';

export const SupplierTable = ({ suppliers, currentPage, totalPages, onPageChange }: SupplierTableProps) => (
  <div className="bg-white rounded-lg p-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold">Suppliers</h2>
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

    <table className="w-full">
      <thead>
        <tr className="border-b border-gray-200">
          <th className="text-left py-3 px-4">Supplier Name</th>
          <th className="text-left py-3 px-4">Product</th>
          <th className="text-left py-3 px-4">Contact Number</th>
          <th className="text-left py-3 px-4">Email</th>
          <th className="text-left py-3 px-4">Type</th>
          <th className="text-left py-3 px-4">On the way</th>
        </tr>
      </thead>
      <tbody>
        {suppliers.map((supplier, index) => (
          <tr key={index} className="border-b border-gray-200">
            <td className="py-3 px-4">{supplier.name}</td>
            <td className="py-3 px-4">{supplier.product}</td>
            <td className="py-3 px-4">{supplier.contactNumber}</td>
            <td className="py-3 px-4">{supplier.email}</td>
            <td className="py-3 px-4">
              <span className={`px-2 py-1 rounded-full text-sm ${
                supplier.type === 'Taking Return' 
                  ? 'text-green-800 bg-green-100' 
                  : 'text-red-800 bg-red-100'
              }`}>
                {supplier.type}
              </span>
            </td>
            <td className="py-3 px-4">{supplier.onTheWay}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <div className="flex justify-between items-center mt-4">
      <button 
        className="px-4 py-2 border border-gray-200 rounded-lg"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button 
        className="px-4 py-2 border border-gray-200 rounded-lg"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  </div>
);