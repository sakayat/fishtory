"use client";
import {
  CarIcon,
  ChevronRight,
  Contact,
  MenuIcon,
  Phone,
  PhoneCall,
  Search,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("click", handleResize);
    return () => window.removeEventListener("click", handleResize);
  }, []);

  return (
    <header className="w-full py-4 px-6 flex items-center justify-between border-b mt-10 relative">
      <div className="flex-shrink-0">
        <Link href="/">
          <span className="text-2xl font-bold">Fish Tory</span>
        </Link>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2"
        >
          {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <form className="relative">
          <div
            className={`flex items-center border rounded-full overflow-hidden px-4 py-1.5 space-x-2 transition-colors duration-200  ${
              isSearchFocused ? "border-black" : ""
            }`}
          >
            <button type="submit" className="text-gray-500">
              <Search size={18} />
            </button>
            <input
              type="text"
              placeholder="Search"
              className="outline-none w-44"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>
        </form>
        <Link
          href="/account"
          className="flex items-center hover:text-gray-500 transition-colors"
        >
          <User size={22} />
        </Link>
        <Link
          href="/cart"
          className="flex items-center gap-2 hover:text-gray-500  transition-colors"
        >
          <div className="relative">
            <ShoppingCart size={22} />
            <span className="bg-black text-white rounded-full h-5 w-5 flex items-center justify-center text-xs absolute -top-2 -right-3">
              {cartCount}
            </span>
          </div>
        </Link>
      </div>

      <div
        className={`absolute top-full left-0 bg-white shadow-lg z-50 h-screen w-full mt-1 py-4 px-6 md:hidden flex flex-col gap-4 transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link
          href="/contact"
          className="flex items-center justify-between py-2 hover:text-gray-500 transition-colors border-b border-gray-200"
        >
          <div className="flex items-center gap-3">
            <Phone size={18} />
            <span>Contact</span>
          </div>
          <ChevronRight size={18} />
        </Link>
        <Link
          href="/cart"
          className="flex items-center justify-between py-2 hover:text-gray-500  transition-colors border-b border-gray-200"
        >
          <div className="flex items-center gap-3">
            <CarIcon size={18} />
            <span>delivery</span>
          </div>
          <ChevronRight size={18} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
