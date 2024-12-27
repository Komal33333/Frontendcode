interface ProductPrimaryDetailsProps {
  details: {
    name: string;
    id: string;
    category: string;
    makeYear: string;
    thresholdValue: number;
  };
}

export const ProductPrimaryDetails = ({ details }: ProductPrimaryDetailsProps) => (
  <section>
    <h2 className="text-lg font-semibold mb-4">Primary Details</h2>
    <div className="grid grid-cols-2 gap-6">
      {[
        { label: 'Product name', value: details.name },
        { label: 'Product ID', value: details.id },
        { label: 'Product category', value: details.category },
        { label: 'Make Year', value: details.makeYear },
        { label: 'Threshold Value', value: details.thresholdValue }
      ].map((detail, index) => (
        <div key={index} className="space-y-1">
          <p className="text-sm text-gray-500">{detail.label}</p>
          <p className="font-medium">{detail.value}</p>
        </div>
      ))}
    </div>
  </section>
);