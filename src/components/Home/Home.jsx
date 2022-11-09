import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bannar from "./Bannar";
import HomeServiceCard from "./HomeServiceCard";
import Partner from "./Partners";
import { BsArrowRightCircle } from "react-icons/bs";
// import JoinUs from "./JoinUs";
import Team from "./Team";
import JoinUs from "./JoinUs";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <Bannar />

      <div className="my-11">
        <h1 className="text-center md:text-6xl font-bold text-3xl text-rose-600">
          My Services{" "}
        </h1>
        <div className=" w-4/5 m-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
          {services?.map((service) => (
            <HomeServiceCard key={service?._id} service={service} />
          ))}
        </div>
        <div className="text-center">
          <Link to={"/services"}>
            <button className=" inline-block  rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500">
              See All{" "}
              <BsArrowRightCircle className="ml-3 inline-block text-xl" />
            </button>
          </Link>
        </div>
      </div>

      <Team />
      <Partner />
      <JoinUs />
    </div>
  );
};

export default Home;
