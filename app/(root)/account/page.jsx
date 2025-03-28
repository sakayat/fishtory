"use client";
import React, { useState } from "react";
import Breadcrumbs from "../_components/Breadcrumbs";
import SectionTitle from "../_components/SectionTitle";
import { User, Package, MapPin, LogOut } from "lucide-react";
import OverviewTab from "../_components/OverviewTab";
import OrdersTab from "../_components/OrdersTab";
import AddressTab from "../_components/AddressTab";

const AccountPage = () => {
  const accountInfo = {
    firstName: "Verses",
    lastName: "Smith",
    email: "verses@example.com",
    phone: "+44 7700 900123",
    joinDate: "January 12, 2023",
    orders: [
      {
        id: "WB-10245",
        date: "March 15, 2024",
        total: 108.5,
        status: "Delivered",
        items: [
          {
            id: 1,
            name: "Sea Sisters Mussels with Chilli & Garlic",
            price: 10.0,
            quantity: 2,
            image: "/image/img4.webp",
          },
          {
            id: 2,
            name: "Fresh Scottish Salmon Fillet",
            price: 15.5,
            quantity: 3,
            image: "/image/img5.webp",
          },
          {
            id: 3,
            name: "Cornish Oysters Pack of 12",
            price: 22.0,
            quantity: 1,
            image: "/image/img6.webp",
          },
        ],
        deliveryAddress: {
          line1: "123 Ocean Street",
          line2: "Apartment 4B",
          city: "London",
          postcode: "SW1A 1AA",
          country: "United Kingdom",
        },
      },
      {
        id: "WB-10183",
        date: "February 28, 2024",
        total: 65.0,
        status: "Delivered",
        items: [
          {
            id: 1,
            name: "Scottish Langoustines",
            price: 32.5,
            quantity: 1,
            image: "/image/img7.webp",
          },
          {
            id: 2,
            name: "Seabass Fillets",
            price: 16.25,
            quantity: 2,
            image: "/image/img8.webp",
          },
        ],
        deliveryAddress: {
          line1: "123 Ocean Street",
          line2: "Apartment 4B",
          city: "London",
          postcode: "SW1A 1AA",
          country: "United Kingdom",
        },
      },
    ],
    addresses: [
      {
        id: 1,
        type: "Default",
        firstName: "Verses",
        lastName: "Smith",
        line1: "123 Ocean Street",
        line2: "Apartment 4B",
        city: "London",
        postcode: "SW1A 1AA",
        country: "United Kingdom",
        phone: "+44 7700 900123",
        isDefault: true,
      },
      {
        id: 2,
        type: "Work",
        firstName: "Verses",
        lastName: "Smith",
        line1: "456 Marina Boulevard",
        line2: "Floor 12",
        city: "London",
        postcode: "EC2A 1NT",
        country: "United Kingdom",
        phone: "+44 7700 900456",
        isDefault: false,
      },
    ],
  };

  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      icon: <User className="w-4 h-4 mr-2" />,
    },
    {
      id: "orders",
      label: "Orders",
      icon: <Package className="w-4 h-4 mr-2" />,
    },
    {
      id: "addresses",
      label: "Addresses",
      icon: <MapPin className="w-4 h-4 mr-2" />,
    },
    {
      id: "logout",
      label: "Log out",
      icon: <LogOut className="w-4 h-4 mr-2" />,
    },
  ];

  const handleTabChange = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="py-5 bg-[#F0EDEB]">
      <div className="container mx-auto px-4">
        <Breadcrumbs title="account" />
        <SectionTitle title={`Welcome ${accountInfo.firstName}`} />
      </div>
      <div className="bg-white overflow-hidden flex justify-center">
        <ul className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-12 w-full md:w-fit">
          {tabs.map((tab) => (
            <li key={tab.id} className="w-full md:w-fit">
              <button
                onClick={() => handleTabChange(tab.id)}
                className={`w-full text-left py-3 flex items-center hover:bg-gray-100 transition-colors ${
                  activeTab === tab.id
                    ? "border-b-2 border-black font-medium"
                    : ""
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="container mx-auto px-4 py-8">
        {activeTab === "overview" ? (
          <OverviewTab accountInfo={accountInfo} setActiveTab={setActiveTab} />
        ) : activeTab === "orders" ? (
          <OrdersTab accountInfo={accountInfo} setActiveTab={setActiveTab} />
        ) : (
          <AddressTab accountInfo={accountInfo} />
        )}
      </div>
    </div>
  );
};

export default AccountPage;
