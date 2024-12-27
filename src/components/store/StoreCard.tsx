import { Store } from '../../types/store';

interface StoreCardProps {
  store: Store;
  onEdit: (id: string) => void;
}

export const StoreCard = ({ store, onEdit }: StoreCardProps) => (
  <div className="flex items-start gap-6 bg-gray-50 p-6 rounded-lg mb-6">
    <div className="w-48 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
      <span className="text-xl font-semibold text-gray-600">{store.branch}</span>
    </div>
    
    <div className="flex-1">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{store.name}</h3>
          <p className="text-gray-600 mt-1">{store.address}</p>
          <p className="text-gray-600">{store.city} - {store.pincode}</p>
          <p className="text-gray-600 mt-2">{store.phone}</p>
        </div>
        <button
          onClick={() => onEdit(store.id)}
          className="text-blue-600 hover:text-blue-700"
        >
          Edit
        </button>
      </div>
    </div>
  </div>
);