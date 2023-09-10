import { useContext } from "react";
import { AgeContext } from "./App";

function Result() {
  const { age } = useContext(AgeContext);

  return (
    <>
      <div className="flex items-center">
        <div className="text-indigo-600 text-6xl font-bold">
          {age?.result?.years || "_ _"}
        </div>
        <div className="text-6xl md:text-7xl font-bold">years</div>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="text-indigo-600 text-6xl font-bold">
          {age?.result?.months || "_ _"}
        </div>
        <div className="text-6xl md:text-7xl font-bold">months</div>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="text-indigo-600 text-6xl font-bold">
          {age?.result?.day || "_ _"}
        </div>
        <div className="text-6xl md:text-7xl font-bold">days</div>
      </div>
    </>
  );
}

export default Result;
