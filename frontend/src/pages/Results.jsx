import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Results = () => {
  const [results, setResults] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    fetch(`http://localhost:4000/products${search}`)
      .then(res => res.json())
      .then(data => setResults(data));
  }, [search]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Resultados</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {results.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
};

export default Results;
