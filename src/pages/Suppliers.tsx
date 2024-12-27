import { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { SupplierTable } from '../components/suppliers/SupplierTable';
import type { Supplier } from '../types/supplier';

const mockSuppliers: Supplier[] = [
  {
    name: 'Richard Martin',
    product: 'Engine',
    contactNumber: '7687764556',
    email: 'richard@gmail.com',
    type: 'Taking Return',
    onTheWay: 13
  },
  // Add more mock data...
];

export const Suppliers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
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
      
      <SupplierTable 
        suppliers={mockSuppliers}
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};