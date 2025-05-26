import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDetail from '../components/ProductDetail'

export default function Detail() {
  const [product, setProduct] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:4000/products/${id}`)
      .then(res => res.json())
      .then(setProduct)
  }, [id])

  return <ProductDetail product={product} />
}