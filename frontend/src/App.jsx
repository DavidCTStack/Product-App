import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
