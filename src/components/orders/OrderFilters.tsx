import { Filter } from 'lucide-react';

interface OrderFiltersProps {
  onAddProduct: () => void;
  onShowHistory: () => void;
}

export const OrderFilters = ({ onAddProduct, onShowHistory }: OrderFiltersProps) => (
  <div className="flex gap-3">
    <button 
      onClick={onAddProduct}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      Add Product
    </button>
    <button className="px-4 py-2 border border-gray-200 rounded-lg flex items-center gap-2">
      <Filter className="w-4 h-4" />
      Filters
    </button>
    <button 
      onClick={onShowHistory}
      className="px-4 py-2 border border-gray-200 rounded-lg"
    >
      Order History
    </button>
  </div>
);