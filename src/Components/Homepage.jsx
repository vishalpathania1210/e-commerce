import React from 'react';
export const Homepage = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-80px)] bg-gray-100 flex flex-col items-center justify-center p-6">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Please select your product category
          </h1>
        </div>
      </div>
    </>
  );
};
