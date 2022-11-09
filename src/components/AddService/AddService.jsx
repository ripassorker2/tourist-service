import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddService = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

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
          navigate("/services");
        } else {
          toast.error("Could not created the service !!");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className=" my-7">
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 md:w-4/6 py-16 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleCreateService} className="space-y-4">
              <h1 className="text-center text-4xl text-rose-500 font-bold pb-6">
                Add Service
              </h1>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only">Service Name</label>
                  <input
                    className="w-full rounded-lg border-gray-700 p-3 border-solid border"
                    placeholder="Service name"
                    type="text"
                    name="service"
                    required
                  />
                </div>

                <div>
                  <label className="sr-only">Photo Url</label>
                  <input
                    className="w-full rounded-lg border-gray-700 p-3 border-solid border"
                    placeholder="Photo Url"
                    type="photo"
                    name="photoUrl"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only">Email</label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    disabled
                    className="w-full rounded-lg border-gray-700 p-3 text-sm border-solid border"
                    placeholder="Email address"
                    required
                  />
                </div>

                <div>
                  <label className="sr-only">Price</label>
                  <input
                    type="number"
                    name="price"
                    className="w-full rounded-lg border-gray-700 p-3 text-sm border-solid border"
                    placeholder="Service price"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only">Service Details</label>
                <textarea
                  type="text"
                  name="description"
                  className="w-full rounded-lg border-gray-700 p-3 text-sm border-solid border"
                  placeholder="Service details"
                  rows="6"
                  required
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500"
                >
                  Add Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddService;
