"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#2f3a32] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <h2 className="text-xl font-bold">FISH Tory</h2>
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              From the ocean to your plate, we deliver the freshest seafood with
              sustainable fishing practices.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://x.com" target="_blank">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/delivery"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/new"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  New In
                </Link>
              </li>
              <li>
                <Link
                  href="/products/bestsellers"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link
                  href="/products/fish"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Fish
                </Link>
              </li>
              <li>
                <Link
                  href="/products/shellfish"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Shellfish
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <address className="not-italic">
              <p className="text-gray-300 mb-2">123 Fisherman's Wharf</p>
              <p className="text-gray-300 mb-2">Seaside, CA 93955</p>
              <p className="text-gray-300 mb-2">
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  (123) 456-7890
                </a>
              </p>
              <p className="text-gray-300">
                <a
                  href="mailto:info@fishmarket.com"
                  className="hover:text-white transition-colors"
                >
                  info@fistory.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Fish Tory. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie-policy"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
