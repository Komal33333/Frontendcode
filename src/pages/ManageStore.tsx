import { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { StoreCard } from '../components/store/StoreCard';
import type { Store } from '../types/store';

const mockStores: Store[] = [
  {
    id: '1',
    name: 'Lisy Store',
    branch: 'Singanallur Branch',
    address: '1A/Krihnarajapuram, 3 rd street sulur',
    city: 'Coimbatore',
    pincode: '6313403',
    phone: '044- 653578'
  },
  {
    id: '2',
    name: 'Lisy Store',
    branch: 'Slur Branch',
    address: '54 Ramani colony, 3 rd street sulur',
    city: 'Coimbatore',
    pincode: '63133452',
    phone: '044- 653763'
  },
  {
    id: '3',
    name: 'Lisy Store',
    branch: 'Gaandipuram Branch',
    address: '32/ Venkatasamy layout, 3 rd street sulur',
    city: 'Coimbatore',
    pincode: '6313403',
    phone: '044- 653578'
  }
];

export const ManageStore = () => {
  const [stores] = useState<Store[]>(mockStores);

  const handleEditStore = (id: string) => {
    console.log('Edit store:', id);
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <SearchBar />
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full bg-gray-100">
            <span className="sr-only">Notifications</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-200" />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Manage Store</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add Store
        </button>
      </div>

      <div className="space-y-6">
        {stores.map(store => (
          <StoreCard
            key={store.id}
            store={store}
            onEdit={handleEditStore}
          />
        ))}
      </div>
    </div>
  );
};