import React from "react";

const AddressTab = ({ accountInfo }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {accountInfo.addresses.map((address) => (
        <div key={address.id} className="p-4 relative">
          {address.isDefault && (
            <span className="absolute top-2 right-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-black">
              Default
            </span>
          )}
          <p className="text-gray-800 font-medium">
            {address.firstName} {address.lastName}
          </p>
          <p className="text-gray-600">{address.line1}</p>
          {address.line2 && <p className="text-gray-600">{address.line2}</p>}
          <p className="text-gray-600">
            {address.city}, {address.postcode}
          </p>
          <p className="text-gray-600">{address.country}</p>
          <p className="text-gray-600 mt-1">{address.phone}</p>
          <div className="mt-4 flex space-x-3">
            <button className="text-blue-600 text-sm font-medium">Edit</button>
            {!address.isDefault && (
              <button className="text-blue-600 text-sm font-medium">
                Set as default
              </button>
            )}
          </div>
        </div>
      ))}
      <div className="">
        <button className="text-blue-600 text-sm font-medium">
          Add new address
        </button>
      </div>
    </div>
  );
};

export default AddressTab;
