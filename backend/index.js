import express from 'express';
import cors from 'cors';
import products from './data/products.js';

const app = express();
const PORT = 4000;

app.use(cors());

// Ruta para todos los productos
app.get('/all-products', (req, res) => {
  res.json(products);
});

// Búsqueda por nombre o categoría
app.get('/products', (req, res) => {
  const { q, category } = req.query;
  let filtered = products;

  if (q) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q.toLowerCase())
    );
  }

  if (category) {
    filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  res.json(filtered.slice(0, 4)); // Solo los primeros 4
});

// Detalle por ID
app.get('/product/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
