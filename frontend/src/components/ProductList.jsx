export default function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border rounded p-4 shadow hover:shadow-md bg-white">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <div className="mt-2 flex gap-2 flex-wrap">
            {product.categories.map((cat) => (
              <span key={cat} className="text-xs bg-gray-200 rounded-full px-2 py-1">{cat}</span>
            ))}
          </div>
          <a href={`/detail/${product.id}`} className="text-blue-600 mt-2 inline-block hover:underline">
            Ver detalle
          </a>
        </div>
      ))}
    </div>
  )
}