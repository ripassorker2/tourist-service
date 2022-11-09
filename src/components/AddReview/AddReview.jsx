import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const reviewService = useLoaderData();

  const navigate = useNavigate();

  const handleCreateReview = (event) => {
    event.preventDefault();
    const form = event.target;

    const review = {
      serviceId: reviewService?._id,
      email: form.email.value,
      reviewer: form.name.value,
      rating: form.rating.value,
      photoUrl: user?.photoURL,
      description: form.description.value,
    };

    fetch("https://assignment-server-drab.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Succesfully created your review !!");
          navigate("/services");
        } else {
          toast.error("Could not created your review !!");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className=" my-7">
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 md:w-4/6 py-16 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleCreateReview} className="space-y-4">
              <h1 className="text-center text-4xl text-rose-500 font-bold">
                Create a review !!
              </h1>

              <div>
                <label className="sr-only">Reviewer Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  required
                  className="w-full rounded-lg border-gray-700 p-3 border-solid border"
                  placeholder="Reviewer name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only">Ratting</label>
                  <input
                    type="number"
                    name="rating"
                    className="w-full rounded-lg border-gray-700 p-3 border-solid border"
                    placeholder="Ratting"
                    required
                  />
                </div>

                <div>
                  <label className="sr-only">Email</label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    className="w-full rounded-lg border-gray-700 p-3 text-sm border-solid border"
                    placeholder="Email address"
                    required
                  />
                </div>
              </div>

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
                  Create Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddReview;
