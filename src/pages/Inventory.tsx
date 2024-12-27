import { SearchBar } from '../components/SearchBar';
import { InventoryHeader } from '../components/InventoryHeader';
import { ProductTable } from '../components/ProductTable';

export const Inventory = () => (
  <div className="p-8 space-y-6">
    <div className="flex justify-between items-center">
      <SearchBar />
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full bg-gray-100">
          <span className="sr-only">Notifications</span>
          {/* Add notification icon */}
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-200">
          {/* Add user avatar */}
        </div>
      </div>
    </div>
    
    <InventoryHeader />
    <ProductTable />
  </div>
);