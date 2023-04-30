import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import slugify from "slugify";

import HIMACHAL from "../../../himachal.js";

const HimachalTourDetails = () => {
  const { slug } = useParams();

  const himachalTour = HIMACHAL.find((tour) => slugify(tour.title) === slug);

  const { id, title, desc, src, itinerary } = himachalTour;

  return (
    <>
      <div className="mx-auto py-12">
        <div
          className="bg-cover bg-center h-64 md:h-96"
          style={{ backgroundImage: `url(${src})` }}
        >
          <div className="container mx-auto h-full flex flex-col items-center justify-center column">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
              {title}
            </h1>
            <p className="text-[#fff] text-sm md:text-xl text-center mt-4">
              {desc}
            </p>
          </div>
        </div>
      </div>
      {/* Breadcrumb */}
      <nav
        className="flex text-gray-900 relative top-0 dark:text-gray-900 justify-center items-center"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="text-gray-900 inline-flex ml-1 md:ml-2 text-sm font-medium hover:underline"
            >
              <svg
                className="w-4 h-4 mr-2.5 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Link
                to="/Destination/Himachal"
                className="text-gray-900 ml-1 md:ml-2 text-sm font-medium hover:underline"
              >
                Himachal
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-blue-500 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Link
                className="text-gray-900 ml-1 md:ml-2 text-sm font-medium hover:underline"
                to={id.title}
              >
                {" "}
                {title}
              </Link>
            </div>
          </li>
        </ol>
      </nav>
      <div className="w-full py-12 px-4 pt-8">
        <h1 className="text-center py-2 font-bold uppercase lg:text-2xl">
          Itinerary
        </h1>
        {itinerary.map((itinerary, id) => (
          <div
            className="mx-auto w-full max-w-xl rounded-2xl bg-white p-2"
            key={id}
          >
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left text-sm font-medium text-[#000] hover:bg-gray-800 hover:text-[#fff] focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                    <h2>{itinerary.heading}</h2>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-blue-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    {itinerary.description}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </>
  );
};

export default HimachalTourDetails;
