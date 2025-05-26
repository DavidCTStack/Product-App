import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/product/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Cargando...</p>;

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded mb-4" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="mt-2">{product.description}</p>
      <p className="text-sm mt-2 text-gray-500">Categoría: {product.category}</p>
    </div>
  );
};

export default ProductDetail;
