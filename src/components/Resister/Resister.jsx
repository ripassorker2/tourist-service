import React from "react";
import { Link } from "react-router-dom";

const Resister = () => {
  return (
    <div>
      <div className="hero my-7">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left md:w-1/2 md:pl-9">
            <img src="" alt="" className="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <form className="card-body">
              <h1 className="text-center text-4xl text-rose-500 font-bold">
                RESISTER
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
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
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control my-2">
                <button type="submit" className="btn btn-secondary">
                  Login
                </button>
              </div>
              <div className="text-sm ">
                If you have alreadey an account ?{" "}
                <Link to={"/login"} className="text-blue-700">
                  LOGIN
                </Link>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resister;
