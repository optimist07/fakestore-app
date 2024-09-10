import React from 'react'

const products = [
    { id: 1, name: 'Laptop', price: 700 },
    { id: 2, name: 'Phone', price: 300 },
    { id: 3, name: 'Headphones', price: 100 },
  ];
function Products({addToCart}) {
  return (
    <div>
        <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products