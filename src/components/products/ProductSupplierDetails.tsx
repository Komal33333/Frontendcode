interface ProductSupplierDetailsProps {
  supplier: {
    name: string;
    contact: string;
  };
}

export const ProductSupplierDetails = ({ supplier }: ProductSupplierDetailsProps) => (
  <section>
    <h2 className="text-lg font-semibold mb-4">Supplier Details</h2>
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-1">
        <p className="text-sm text-gray-500">Supplier name</p>
        <p className="font-medium">{supplier.name}</p>
      </div>
      <div className="space-y-1">
        <p className="text-sm text-gray-500">Contact Number</p>
        <p className="font-medium">{supplier.contact}</p>
      </div>
    </div>
  </section>
);