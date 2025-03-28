import React from "react";
import Link from "next/link";

const OverviewTab = ({ accountInfo, setActiveTab }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-1">
            Contact Information
          </h3>
          <p className="text-lg font-medium mb-1">
            {accountInfo.firstName} {accountInfo.lastName}
          </p>
          <p className="text-gray-600">{accountInfo.email}</p>
          <p className="text-gray-600">{accountInfo.phone}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-1">
            Account Details
          </h3>
          <p className="text-gray-600">Member since: {accountInfo.joinDate}</p>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-2">
          Recent Orders
        </h3>
        {accountInfo.orders.length > 0 ? (
          <div className="border overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Order
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {accountInfo.orders.slice(0, 2).map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link
                        href={`/account/orders/${order.id}`}
                        className="text-blue-600 hover:underline"
                      >
                        {order.id}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {order.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">
                      ${order.total.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-600">You haven't placed any orders yet.</p>
        )}

        <div className="mt-3">
          <button
            onClick={() => setActiveTab("orders")}
            className="text-blue-600 text-sm font-medium"
          >
            View all orders
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-2">
          Default Address
        </h3>
        {accountInfo.addresses
          .filter((addr) => addr.isDefault)
          .map((address) => (
            <div key={address.id} className="border rounded-lg p-4">
              <p className="text-gray-800 font-medium">
                {address.firstName} {address.lastName}
              </p>
              <p className="text-gray-600">{address.line1}</p>
              {address.line2 && (
                <p className="text-gray-600">{address.line2}</p>
              )}
              <p className="text-gray-600">
                {address.city}, {address.postcode}
              </p>
              <p className="text-gray-600">{address.country}</p>
              <p className="text-gray-600 mt-1">{address.phone}</p>
            </div>
          ))}

        <div className="mt-3">
          <button
            onClick={() => setActiveTab("addresses")}
            className="text-blue-600 text-sm font-medium"
          >
            Manage addresses
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
