import React, { useState } from 'react';

const quotes = [
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" }
];

function Qoutes() {
  const [quote, setQuote] = useState(quotes[0]);

  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-lg p-6 max-w-lg text-center">
        <p className="text-xl font-semibold mb-4">"{quote.text}"</p>
        <p className="text-sm text-gray-500 mb-6">- {quote.author}</p>
        <button
          onClick={getNewQuote}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default Qoutes;
