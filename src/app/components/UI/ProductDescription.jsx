import React from "react";

const ProductDescription = ({ description, playingThem }) => {
  return (
    <div className="text-sm text-slate-700 leading-6 p-6">
      <div className="mb-3 font-bold text-2xl">Описание</div>
      {description}
      <div className="flex items-baseline my-4 flex-wrap">
        <span
          className="font-bold text-base mr-2 mb-1.5"
          style={{ whiteSpace: "nowrap" }}
        >
          Кто в них играет в НБА:
        </span>
        <span className="flex-grow">{playingThem.join(", ")}</span>
      </div>
    </div>
  );
};

export default ProductDescription;
