"use client";
import { Image, Minus, Plus } from "lucide-react";
import Link from "next/link";

const CartItem = ({ products, decrementQuantity, incrementQuantity }) => {
  const getTotalPrice = (quantity, price) => {
    return (quantity * price).toFixed(2);
  };

  return (
    <table className="w-full">
      <tbody>
        {products.map((product) => (
          <tr key={product.id} className="border-b">
            <td className="py-6">
              <div className="flex items-start space-x-4">
                <div className="relative w-24 h-24">
                  <img src={product.image} alt="" />
                </div>

                <div className="flex-1">
                  <Link
                    href={`/products/${product.slug}
                      `}
                    className="text-sm font-medium hover:text-gray-700"
                  >
                    {product.name}
                  </Link>
                  <p className="text-xs text-gray-600">{product.name}</p>
                  <p className="text-lg font-medium">4{product.price}</p>
                </div>
              </div>
            </td>
            <td className="py-6">
              <div className="flex flex-col items-center">
                <div className="flex items-center border border-gray-300 w-fit">
                  <button
                    onClick={() => decrementQuantity(product.id)}
                    className="px-3 py-2 text-gray-600 w-10 h-10"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 border-l border-r w-12 h-10 flex items-center justify-center">
                    {product.quantity}
                  </span>
                  <button
                    onClick={() => incrementQuantity(product.id)}
                    className="px-3 py-2 text-gray-600 w-10 h-10"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button className="text-sm text-gray-600 mt-2 hover:text-black">
                  Remove
                </button>
              </div>
            </td>
            <td className="py-6 text-right w-24">
              <span className="font-medium">
                ${getTotalPrice(product.quantity, product.price)}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartItem;
