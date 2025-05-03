import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const display = (value) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    setInput(eval(input));
  };

  const clear = () => {
    setInput("");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form className="flex h-auto w-80 flex-col items-center justify-center gap-4 rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-4 w-full rounded bg-gray-100 p-4 text-right text-2xl font-mono text-gray-800">
          {input || "0"}
        </div>

        <div className="grid w-full grid-cols-4 gap-2 text-center text-lg font-bold">
          <span
            onClick={() => clear()}
            className="cursor-pointer rounded bg-red-400 py-2 text-white hover:bg-red-500"
          >
            C
          </span>
          <span
            onClick={() => display("/")}
            className="cursor-pointer rounded bg-gray-300 py-2 hover:bg-gray-400"
          >
            /
          </span>
          <span
            onClick={() => display("*")}
            className="cursor-pointer rounded bg-gray-300 py-2 hover:bg-gray-400"
          >
            *
          </span>
          <span
            onClick={() => display("-")}
            className="cursor-pointer row-span-2 rounded bg-gray-300 py-2 hover:bg-gray-400"
          >
            -
          </span>

          <span
            onClick={() => display("7")}
            className="cursor-pointer rounded bg-gray-200 py-2 hover:bg-gray-300"
          >
            7
          </span>
          <span
            onClick={() => display("8")}
            className="cursor-pointer rounded bg-gray-200 py-2 hover:bg-gray-300"
          >
            8
          </span>
          <span
            onClick={() => display("9")}
            className="cursor-pointer rounded bg-gray-200 py-2 hover:bg-gray-300"
          >
            9
          </span>

          <span
            onClick={() => display("4")}
            className="cursor-pointer rounded bg-gray-200 py-2 hover:bg-gray-300"
          >
            4
          </span>
          <span
            onClick={() => display("5")}
            className="cursor-pointer rounded bg-gray-200 py-2 hover:bg-gray-300"
          >
            5
          </span>
          <span
            onClick={() => display("6")}
            className="cursor-pointer rounded bg-gray-200 py-2 hover:bg-gray-300"
          >
            6
          </span>
          <span
            onClick={() => display("+")}
            className="cursor-pointer row-span-2 rounded bg-gray-300 py-2 hover:bg-gray-400"
          >
            +
          </span>
          
          <span
            onClick={() => display("1")}
            className="cursor-pointer rounded bg-gray-200 py-2 hover:bg-gray-300"
          >
            1
          </span>
          <span
            onClick={() => display("2")}
            className="cursor-pointer rounded bg-gray-200 py-2 hover:bg-gray-300"
          >
            2
          </span>
          <span
            onClick={() => display("3")}
            className="cursor-pointer rounded bg-gray-200 py-2 hover:bg-gray-300"
          >
            3
          </span>
          <span
            onClick={() => display("0")}
            className="cursor-pointer col-span-2 rounded bg-gray-200 py-2 hover:bg-gray-300"
          >
            0
          </span>
          <span
            onClick={() => display(".")}
            className="cursor-pointer rounded bg-gray-200 py-2 hover:bg-gray-300"
          >
            .
          </span>
          <span
            onClick={() => calculate()}
            className="cursor-pointer rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
          >
            =
          </span>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
