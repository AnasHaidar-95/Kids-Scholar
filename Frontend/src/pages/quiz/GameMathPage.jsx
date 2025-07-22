import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const operations = [
  {
    name: "Addition",
    symbol: "+",
    color: "bg-green-400",
    to: "/addition",
  },
  {
    name: "Subtraction",
    symbol: "−",
    color: "bg-blue-400",
    to: "/subtraction",
  },
  {
    name: "Multiplication",
    symbol: "×",
    color: "bg-yellow-400",
    to: "/multiplication",
  },
  {
    name: "Division",
    symbol: "÷",
    color: "bg-red-400",
    to: "/division",
  },
];

function GameMathPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-900">
          Choose a Math Operation
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full">
          {operations.map((op) => (
            <Link
              key={op.name}
              to={op.to}
              className={`rounded-2xl shadow-lg ${op.color} text-white p-8 flex flex-col items-center justify-center transition-transform transform hover:scale-105`}
            >
              <span className="text-5xl font-extrabold">{op.symbol}</span>
              <span className="mt-4 text-xl font-semibold">{op.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default GameMathPage;
