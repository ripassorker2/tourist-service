import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const HomeServiceCard = ({ service }) => {
  const { spot, price, description, photoUrl, _id } = service;

  return (
    <div className="flex justify-center shadow-xl">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <PhotoProvider>
          <PhotoView src={photoUrl}>
            <a href="#!">
              <img className="rounded-t-lg w-full h-52" src={photoUrl} alt="" />
            </a>
          </PhotoView>
        </PhotoProvider>

        <div className="p-6">
          <h5 className="text-gray-900 text-2xl font-bold mb-2">{spot}</h5>
          <h5 className="text-gray-900 text-xl font-semibold mb-2">
            Price : ${price}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {description.length > 100
              ? description.slice(0, 100) + "....."
              : description}
          </p>
          <Link to={`/serviceDetails/${_id}`}>
            <button
              type="button"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 "
            >
              Show Details{" "}
              <BsArrowRightCircle className="ml-3 inline-block text-xl" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceCard;
