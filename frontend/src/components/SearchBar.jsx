import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/results?q=${query}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Buscar producto..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded px-4 py-2 w-full"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
