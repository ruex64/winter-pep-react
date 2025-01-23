import React, { useState } from "react";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }

    setTotalCount(totalCount + 1);
    setTotalPrice(totalPrice + item.price);
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (itemId) => {
    const existingItem = cart.find((cartItem) => cartItem.id === itemId);

    if (existingItem) {
      if (existingItem.quantity === 1) {
        setCart(cart.filter((cartItem) => cartItem.id !== itemId));
      } else {
        const updatedCart = cart.map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
        setCart(updatedCart);
      }

      setTotalCount(totalCount - 1);
      setTotalPrice(totalPrice - existingItem.price);
    }
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} x {item.quantity}{" "}
            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total Items: {totalCount}</h3>
      <h3>Total Price: {totalPrice.toFixed(2)}</h3>
      <div>
        <h3>Add Items:</h3>
        <button
          onClick={() =>
            addItemToCart({ id: 1, name: "Apple", price: 1.0 })
          }
        >
          Add Apple
        </button>
        <button
          onClick={() =>
            addItemToCart({ id: 2, name: "Banana", price: 0.5 })
          }
        >
          Add Banana
        </button>
        <button
          onClick={() =>
            addItemToCart({ id: 3, name: "Orange", price: 0.8 })
          }
        >
          Add Orange
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
