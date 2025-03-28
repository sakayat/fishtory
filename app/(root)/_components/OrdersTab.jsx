import Link from "next/link";
import React from "react";

const OrdersTab = ({ accountInfo }) => {
  return (
    <div>
      {accountInfo.orders.length > 0 ? (
        <div className="space-y-6">
          {accountInfo.orders.map((order) => (
            <div key={order.id} className="overflow-hidden">
              <div className="bg-black text-white px-6 py-4 flex justify-between items-center ">
                <div>
                  <p className="text-sm">Order placed</p>
                  <p className="font-medium">{order.date}</p>
                </div>
                <div>
                  <p className="text-sm">Order number</p>
                  <p className="font-medium">{order.id}</p>
                </div>
                <div>
                  <p className="text-sm">Total</p>
                  <p className="font-medium">${order.total.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm">Status</p>
                </div>
              </div>
              <div className="p-6 bg-white">
                <div className="flex flex-col space-y-4 ">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex items-start space-x-4">
                      <div className="flex-1">
                        <Link
                          href={`/products/${item.name}`}
                          className="text-lg font-medium hover:text-gray-700"
                        >
                          {item.name}
                        </Link>
                        <p className="text-gray-600">
                          Qty: {item.quantity} x ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="text-right font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                      <div className="">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-t pt-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                    Shipping Address
                  </h3>
                  <p className="text-gray-700">{order.deliveryAddress.line1}</p>
                  {order.deliveryAddress.line2 && (
                    <p className="text-gray-700">
                      {order.deliveryAddress.line2}
                    </p>
                  )}
                  <p className="text-gray-700">
                    {order.deliveryAddress.city}
                    {order.deliveryAddress.postcode}
                  </p>
                  <p className="text-gray-700">
                    {order.deliveryAddress.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">You haven't placed any orders yet.</p>
      )}
    </div>
  );
};

export default OrdersTab;
