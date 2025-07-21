import React, { useState } from "react";
import Mines from "../components/arthOperators/Mines";
import MultiplicationGame from "../components/arthOperators/MultiplicationGame";
import Division from "../components/arthOperators/division";
import Sum from "../components/arthOperators/Sum";
import { Plus, Minus, Divide, X, ArrowLeft } from "lucide-react";

const operations = [
  {
    key: "add",
    label: "Addition",
    icon: Plus,
    bg: "bg-blue-100",
    hoverBg: "hover:bg-blue-200",
    Component: Sum,
  },
  {
    key: "subtract",
    label: "Subtraction",
    icon: Minus,
    bg: "bg-green-100",
    hoverBg: "hover:bg-green-200",
    Component: Mines,
  },
  {
    key: "multiply",
    label: "Multiplication",
    icon: X,
    bg: "bg-yellow-100",
    hoverBg: "hover:bg-yellow-200",
    Component: MultiplicationGame,
  },
  {
    key: "divide",
    label: "Division",
    icon: Divide,
    bg: "bg-pink-100",
    hoverBg: "hover:bg-pink-200",
    Component: Division,
  },
];

export default function MathPage() {
  const [selectedOperation, setSelectedOperation] = useState(null);

  const handleBack = () => {
    setSelectedOperation(null);
  };

  if (!selectedOperation) {
    return (
      <div className="min-h-screen bg-[#87CEEB] p-8 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-white mb-10">
          🧠 Choose an Operation
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full">
          {operations.map(({ key, label, icon: Icon, bg, hoverBg }) => (
            <button
              key={key}
              onClick={() => setSelectedOperation(key)}
              className={`${bg} ${hoverBg} rounded-xl shadow-lg p-8 flex flex-col items-center justify-center transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300`}
            >
              <Icon size={48} className="mb-4 text-gray-800" />
              <span className="text-lg font-semibold text-gray-900">
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const SelectedComponent = operations.find(
    (op) => op.key === selectedOperation
  ).Component;

  return (
    <div className="min-h-screen bg-[#87CEEB] p-8 flex flex-col items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl w-full">
        <button>
          <ArrowLeft
            size={40}
            onClick={handleBack}
            color="#87CEEB"
            className=""
          />
        </button>
        <SelectedComponent />
      </div>
    </div>
  );
}
