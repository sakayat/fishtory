"use client";

import Link from "next/link";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <h2 className="text-3xl font-bold">Sign up to our newsletter</h2>
          <p className="text-gray-600">
            Enjoy exclusive news & offers including 10% off on your first order.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          >
            <div className="flex-grow relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-2.5 border border-gray-300 focus:border-black focus:outline-none"
              />
              {error && (
                <p className="text-red-500 text-xs mt-1 text-left absolute">
                  {error}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 font-bold uppercase text-sm 
                 bg-black text-white hover:bg-gray-800
              transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
