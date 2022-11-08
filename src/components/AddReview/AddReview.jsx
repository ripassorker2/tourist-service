import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const reviewService = useLoaderData();

  const handleCreateReview = (event) => {
    event.preventDefault();
    const form = event.target;

    const review = {
      serviceId: reviewService?._id,
      reviewer: form.name.value,
      photoUrl: form.photoUrl.value,
      description: form.description.value,
    };
    // console.log(review);

    fetch("http://localhost:5000/review", {
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
        } else {
          toast.error("Could not created your review !!");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero my-7">
      <div
        className="hero-content  flex-col lg:flex-row-reverse "
        style={{ width: "500px" }}
      >
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  ">
          <form onSubmit={handleCreateReview} className="card-body w-96">
            <h1 className="text-center text-4xl text-rose-500 font-bold">
              Create a review !!
            </h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Reviewer Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Reviewer Photo Url</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Reviewer Photo Url"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Write review</span>
              </label>

              <textarea
                type="text"
                name="description"
                className="textarea textarea-accent"
                placeholder="type here..."
                required
              />
            </div>

            <div className="form-control my-2">
              <button
                type="submit"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500"
              >
                Create Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
