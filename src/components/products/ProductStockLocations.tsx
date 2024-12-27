interface Location {
  name: string;
  stock: number;
}

interface ProductStockLocationsProps {
  locations: Location[];
}

export const ProductStockLocations = ({ locations }: ProductStockLocationsProps) => (
  <section>
    <h2 className="text-lg font-semibold mb-4">Stock Locations</h2>
    <table className="w-full">
      <thead>
        <tr className="bg-gray-50">
          <th className="text-left py-3 px-4 text-gray-600">Store Name</th>
          <th className="text-left py-3 px-4 text-gray-600">Stock in hand</th>
        </tr>
      </thead>
      <tbody>
        {locations.map((location, index) => (
          <tr key={index} className="border-b border-gray-100">
            <td className="py-3 px-4">{location.name}</td>
            <td className="py-3 px-4 text-blue-600">{location.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);