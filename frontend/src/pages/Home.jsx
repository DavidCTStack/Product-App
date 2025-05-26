import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/all-products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Todos los productos</h1>
      <SearchBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
};

export default Home;
