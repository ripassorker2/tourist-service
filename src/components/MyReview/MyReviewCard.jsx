import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyReviewCard = ({ review, handleRemoveItem }) => {
  const { user } = useContext(AuthContext);
  const { serviceId, _id, reviewer, description } = review;
  const [serviceDetails, setServicesDetails] = useState({});

  useEffect(() => {
    fetch(`https://assignment-server-drab.vercel.app/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setServicesDetails(data));
  }, [serviceId]);

  return (
    <>
      <div className="">
        <div className="bg-white border rounded-md border-gray-200 relative sm:p-10 p-6">
          <div>
            <img
              src={serviceDetails?.photoUrl}
              className="w-full h-48"
              alt=""
            />
            <h3 className="text-3xl text-center font-bold my-3">
              Service name : {serviceDetails?.spot}
            </h3>
          </div>
          <div className="text-center">
            <img
              className="inline-block text-yellow-500"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg"
              alt="commas"
            />
          </div>

          <p className="text-base text-center leading-6 text-gray-600 mt-4">
            {description.length > 500
              ? description.slice(0, 500) + "..."
              : description}
          </p>
          <div className="absolute bottom-0 -mb-4 ml-10">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg2.svg"
              alt="sharp"
            />
          </div>
        </div>
        <div className="flex items-center justify-between border-b-2  mt-7 px-8">
          <div className="flex items-center">
            <div className="w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center">
              <img
                src={user?.photoURL}
                className="w-10 h-10 rounded-full"
                alt="profile"
              />
            </div>
            <div className="flex flex-col items-start ml-4">
              <p className="text-base font-semibold leading-4 text-gray-800">
                {reviewer}
              </p>
            </div>
          </div>
          <div className="flex items-start ml-4">
            <Link to={`/updateReview/${_id}`}>
              <button className="btn btn-sm btn-secondary inline-block mr-3">
                Edit Review
              </button>
            </Link>
            <button
              onClick={() => handleRemoveItem(_id)}
              className="btn btn-sm inline-block"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyReviewCard;
