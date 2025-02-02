import React from "react";

const ShimmerEffect = () => {
  return (
    <div className="p-4 space-y-4">
      {/* Full width box */}
      <div className="w-full h-20 bg-gray-300 animate-pulse rounded-lg"></div>

      {/* Two boxes in laptop view, one box in mobile */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-[70%] h-[100vh] bg-gray-300 animate-pulse rounded-lg"></div>
        <div className="w-full md:w-[30%] h-[100vh] bg-gray-300 animate-pulse rounded-lg"></div>
      </div>
    </div>
  );
};

export default ShimmerEffect;
