import React, { useState } from "react";

const ReviewForm = ({ setShowReviewForm }) => {
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const resetForm = () => {
    setFeedback("");
    setName("");
    setEmail("");
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmitReview}>
      <div className="mb-4">
        <label className="block mb-2 font-medium" htmlFor="feedback">
          Tell us your feedback about the product (required)
        </label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
          className="w-full border border-gray-300 p-2 outline-none focus:border-black"
          rows={5}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium" htmlFor="name">
          Your name (required)
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-gray-300 p-2 outline-none focus:border-black"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium" htmlFor="email">
          Your email address (required)
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-gray-300 p-2 outline-none focus:border-black"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="px-4 py-2 border border-gray-300 text-sm font-medium"
          onClick={() => {
            setShowReviewForm(false);
            resetForm();
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white text-sm font-medium"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
