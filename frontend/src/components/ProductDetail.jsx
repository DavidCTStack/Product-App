export default function ProductDetail({ product }) {
  if (!product) return <div className="p-4">Cargando...</div>

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow space-y-4 mt-8">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-700">ID: {product.id}</p>
      <div className="flex gap-2 flex-wrap">
        {product.categories.map((cat) => (
          <span key={cat} className="bg-blue-100 text-blue-800 px-2 py-1 text-sm rounded-full">{cat}</span>
        ))}
      </div>
    </div>
  )
}