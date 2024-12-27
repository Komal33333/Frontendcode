export interface Supplier {
  name: string;
  product: string;
  contactNumber: string;
  email: string;
  type: 'Taking Return' | 'Not Taking Return';
  onTheWay: number | '-';
}

export interface SupplierTableProps {
  suppliers: Supplier[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}