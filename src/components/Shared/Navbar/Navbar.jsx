import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="bg-gray-800 ">
      <nav className="w-full  shadow">
        <div className="justify-between px-4 mx-auto  md:items-center md:flex md:px-14">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link>
                <h2 className="text-2xl font-bold text-white ">
                  Tourist <span className="text-rose-600"> Service</span>
                </h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white hover:text-indigo-200">
                  <Link to={"/home"}>Home</Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link to={"/services"}>Services</Link>
                </li>
                {user?.uid && (
                  <>
                    {" "}
                    <li className="text-white hover:text-indigo-200">
                      <Link to={"/addService"}>Add Service</Link>
                    </li>
                    <li className="text-white hover:text-indigo-200">
                      <Link to={"/myReview"}>My Review</Link>
                    </li>
                  </>
                )}
                <li className="text-white hover:text-indigo-200">
                  <Link to={"/blogs"}>Blogs</Link>
                </li>
              </ul>

              <div className="mt-3 space-y-2 md:hidden block text-center">
                {user?.uid ? (
                  <div className=" items-center">
                    <h2 className="text-gray-100 font-semibold my-4">
                      {user?.displayName}
                    </h2>
                    <button onClick={logOut} className="btn btn-sm w-full">
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link to={"/login"} className="btn btn-sm w-full">
                    Sign in
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-block">
            {user?.uid ? (
              <div className="flex items-center">
                <h2 className="text-gray-100 font-semibold mr-3">
                  {user?.displayName}
                </h2>

                <button onClick={logOut} className="btn btn-sm">
                  Logout
                </button>
              </div>
            ) : (
              <Link to={"/login"} className="btn btn-sm ">
                Sign in
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
