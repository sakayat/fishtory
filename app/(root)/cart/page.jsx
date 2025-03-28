"use client"

import React, { useState } from "react";
import SectionTitle from "../_components/SectionTitle";
import Breadcrumbs from "../_components/Breadcrumbs";
import CartItem from "../_components/CartItem";
import OrderHistory from "../_components/OrderHistory";

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "Sea Sisters Mussels with Chilli & Garlic",
      slug: "",
      price: 10,
      image: "/images/image1.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "Sea Sisters Mussels with Lemon & Herb",
      slug: "",
      price: 12,
      image: "/images/img5.webp",
      quantity: 2,
    },
  ];

  const [products, setProducts] = useState(cartItems);

  const decrementQuantity = (id) => {
    setProducts(
      products.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const incrementQuantity = (id) => {
    setProducts(
      products.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const total = products.reduce((acc, item) => acc + item.quantity * item.price, 0)

  return (
    <div className="container mx-auto px-4 py-5">
      <Breadcrumbs title="Your-Bag" />
      <SectionTitle title="your bag" />
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <CartItem products={products} decrementQuantity={decrementQuantity} incrementQuantity={incrementQuantity} />
        </div>
        <div className="lg:w-1/3">
          <OrderHistory total={total}/>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
