import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState([]);


  function addToCart(el) {
    const newCartArray = [...cart, el];
    setCart(newCartArray);
  } 
  

  return (
    <li className={cart.length > 0 ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;


