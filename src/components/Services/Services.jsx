import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeServiceCard from "../Home/HomeServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://assignment-server-drab.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-11">
      <h1 className="text-center md:text-6xl font-bold text-3xl text-rose-600">
        My Services{" "}
      </h1>
      <div className=" w-4/5 m-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
        {services?.map((service) => (
          <HomeServiceCard key={service?._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
