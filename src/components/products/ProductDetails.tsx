import { Edit, Download } from 'lucide-react';
import { ProductPrimaryDetails } from './ProductPrimaryDetails';
import { ProductSupplierDetails } from './ProductSupplierDetails';
import { ProductStockLocations } from './ProductStockLocations';

interface ProductDetailsProps {
  product: {
    name: string;
    id: string;
    category: string;
    makeYear: string;
    thresholdValue: number;
    supplier: {
      name: string;
      contact: string;
    };
    stock: {
      opening: number;
      remaining: number;
      onTheWay: number;
      threshold: number;
    };
    locations: Array<{
      name: string;
      stock: number;
    }>;
  };
}

export const ProductDetails = ({ product }: ProductDetailsProps) => (
  <div className="p-8">
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-semibold">Engine</h1>
      <div className="flex gap-3">
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg">
          <Edit className="w-4 h-4" />
          Edit
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg">
          <Download className="w-4 h-4" />
          Download
        </button>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-2 space-y-8">
        <ProductPrimaryDetails details={product} />
        <ProductSupplierDetails supplier={product.supplier} />
        <ProductStockLocations locations={product.locations} />
      </div>

      <div>
        <div className="bg-white rounded-lg p-6 space-y-6">
          <img 
            src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80&w=400&h=300" 
            alt={product.name}
            className="w-full rounded-lg border border-gray-200"
          />
          <div className="space-y-4">
            {[
              { label: 'Opening Stock', value: product.stock.opening },
              { label: 'Remaining Stock', value: product.stock.remaining },
              { label: 'On the way', value: product.stock.onTheWay },
              { label: 'Threshold value', value: product.stock.threshold }
            ].map((stat, index) => (
              <div key={index} className="flex justify-between items-center">
                <p className="text-gray-600">{stat.label}</p>
                <p className="font-medium">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);