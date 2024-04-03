import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-68px)] ">
        <p className="text-7xl font-thin">L</p>
        <div className="w-10 h-10 border-blue-400 mt-5 border-8 border-dashed rounded-full animate-spin"></div>
        <p className="text-7xl font-thin">ading....</p>
    </div>
  );
};

export default LoadingSpinner;
