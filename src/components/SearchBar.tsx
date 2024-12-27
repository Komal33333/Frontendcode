import { Search } from 'lucide-react';

export const SearchBar = () => (
  <div className="relative w-full max-w-xl">
    <input
      type="text"
      placeholder="Search product, supplier, order"
      className="w-full px-4 py-2 pl-10 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
  </div>
);