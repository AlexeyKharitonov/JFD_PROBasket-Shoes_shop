import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../API/ShoesData";
import { Loader as Spinner } from "../components/Common/Loader";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  console.log(id);
  useEffect(() => {
    if (!id) return;
    getById(Number(id)).then((data) => {
      setProduct(data);
    });
  }, [id]);

  if (!product) {
    return (
      <div
        className="text-2xl flex justify-center items-center h-screen mt-2"
        style={{ marginTop: "-12vh" }}
      >
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="/Dame8.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <div className="bg-red-500">{id}</div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="/Dame8.jpg"
          alt=""
        />
      </a>
    </div>
  );
};

export default Detail;
