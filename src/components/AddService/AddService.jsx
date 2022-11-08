import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddService = () => {
  const { user } = useContext(AuthContext);

  const handleCreateService = (event) => {
    event.preventDefault();
    const form = event.target;

    const services = {
      spot: form.service.value,
      email: form.email.value,
      photoUrl: form.photoUrl.value,
      price: form.price.value,
      description: form.description.value,
    };
    console.log(services);

    fetch("http://localhost:5000/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(services),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Succesfully created service !!");
        } else {
          toast.error("Could not created the service !!");
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
          <form onSubmit={handleCreateService} className="card-body w-96">
            <h1 className="text-center text-4xl text-rose-500 font-bold">
              Add Service Info
            </h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Name</span>
              </label>
              <input
                type="service"
                name="service"
                placeholder="Service Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                disabled
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="photo"
                name="photoUrl"
                placeholder="photoUrl"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>

              <textarea
                type="text"
                name="description"
                className="textarea textarea-accent"
                placeholder="Description"
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

export default AddService;
