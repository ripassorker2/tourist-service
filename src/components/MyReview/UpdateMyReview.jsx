import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UpdateMyReview = () => {
  const reviewData = useLoaderData();

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdateReview = (event) => {
    event.preventDefault();
    const form = event.target;

    const review = {
      description: form.description.value,
    };

    fetch(
      `https://assignment-server-drab.vercel.app/myreview/${reviewData?._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Succesfully updated your review !!");
          navigate("/myReview");
        } else {
          toast.error("Could not updated your review !!");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className=" my-7">
        <section className="bg-gray-100">
          <div className="mx-auto max-w-screen-xl px-4 md:w-4/6 py-16 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleUpdateReview} className="space-y-4">
                <h1 className="text-center text-4xl text-rose-500 font-bold">
                  Update your review !!
                </h1>

                <div>
                  <label className="sr-only">Write here</label>
                  <textarea
                    type="text"
                    name="description"
                    className="w-full rounded-lg border-gray-700 p-3 text-sm border-solid border"
                    placeholder="Review write here"
                    rows="6"
                    required
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500"
                  >
                    Update Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UpdateMyReview;
