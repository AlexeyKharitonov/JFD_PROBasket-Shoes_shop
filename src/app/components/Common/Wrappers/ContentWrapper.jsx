import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-0.5">
      {children}
    </div>
  );
};

export default ContentWrapper;
