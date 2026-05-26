// client/src/App.jsx

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container">
      <h1>Dental Stock Manager</h1>
      <ul className="list-group">
        {products.map(product => (
          <li key={product._id} className="list-group-item">
            {product.name} - {product.quantity} in stock - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
