import React from "react";

const LoadingFallback: React.FC = () => {
  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
      <h1>Loading...</h1>
    </div>
  );
};

export default LoadingFallback;
