export interface Store {
  id: string;
  name: string;
  branch: string;
  address: string;
  city: string;
  pincode: string;
  phone: string;
}

export interface StoreCardProps {
  store: Store;
  onEdit: (id: string) => void;
}