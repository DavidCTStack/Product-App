
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'

export default function SearchResults() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const query = searchParams.get('q') || ''
  const category = searchParams.get('category') || ''

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:3001/products', {
        params: { q: query, category }
      })
      setProducts(res.data)
      const catRes = await axios.get('http://localhost:3001/categories')
      setCategories(catRes.data)
    }
    fetchData()
  }, [query, category])

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Resultados de búsqueda para: {query}</h2>
      <div>
        <strong>Categorías:</strong>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => navigate(`/search?category=${cat.id}`)}
            style={{ marginLeft: '1rem' }}
          >
            {cat.name}
          </button>
        ))}
      </div>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <a onClick={() => navigate(`/product/${p.id}`)} style={{ cursor: 'pointer' }}>
              {p.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
