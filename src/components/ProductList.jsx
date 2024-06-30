import React from 'react';
import addToCart from './redux/Action';
import { useDispatch } from 'react-redux';
const ProductList = () => {
     const dispatch =useDispatch();
  const products = [
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 30 },
    { id: 3, name: 'Product 3', price: 50 },
    { id: 4, name: 'Product 4', price: 100 },
  ];

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((e)=> (
          <li key={e.id}>
            {e.name} - ${e.price}
            <button onClick={() => dispatch(addToCart(e))}>Add to Cart..</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;