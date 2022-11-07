import React from "react";
import { Link } from "react-router-dom";

const Bannar = () => {
  return (
    <div className="-z-20">
      <section class="relative bg-[url(https://dailyasianage.com/library/1582060099_9.jpg)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-white/50 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/70 sm:to-white/25"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold md:text-gray-200 md:text-6xl">
              <span className="text-rose-600"> Welcome</span> to our
              <strong class="block font-extrabold  py-3">
                Tourist <span className="text-rose-600">Service</span>
              </strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-lg md:text-gray-200 sm:leading-relaxed">
              Tourism, the act and process of spending time away from home in
              pursuit of recreation, relaxation, and pleasure, while making use
              of the commercial provision of services. As such, tourism is a
              product of modern social
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <Link class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                Our Services
              </Link>

              <Link class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bannar;
