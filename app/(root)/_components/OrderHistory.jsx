import React from "react";

const OrderHistory = ({ total }) => {
  return (
    <div className="bg-[#F0EDEB] p-6 space-y-3">
      <div className="flex justify-between items-center">
        <span className="font-medium">Total:</span>
        <span className="text-xl font-bold">${total}</span>
      </div>
      <button className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors">
        Checkout
      </button>
    </div>
  );
};

export default OrderHistory;
