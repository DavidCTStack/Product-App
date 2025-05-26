import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.description}</p>
      <Link to={`/product/${product.id}`} className="text-blue-500 mt-2 inline-block hover:underline">
        Ver detalle
      </Link>
      <div className="mt-2 text-xs text-gray-600">
        <span>Categoría: </span>
        <Link to={`/results?category=${product.category}`} className="text-blue-600 hover:underline">
          {product.category}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
