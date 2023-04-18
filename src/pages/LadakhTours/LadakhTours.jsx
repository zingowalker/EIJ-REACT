import React from "react";
import LADAKH from "../../../ladakh.js";
import LadakhBreadcrumb from "../../components/Breadcrumbs/LadakhBreadcrumb";
import LadakhBanner from "../../components/Banner/LadakhBanner";
import { Link } from "react-router-dom";

export const LadakhTours = () => {
  return (
    <>
      <LadakhBanner />
      <LadakhBreadcrumb />
      <div className="p-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {LADAKH.map((tour) => (
          <div
            key={tour.id}
            className="rounded overflow-hidden shadow-lg dark:shadow-gray-800"
          >
            <img
              className="w-full"
              src={tour.src}
              alt={tour.alt}
              loading="lazy"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{tour.title}</div>
              <p className="text-gray-700  text-base">
                {tour.desc.substring(0, 150)}
              </p>
              <Link
                className="inline-flex items-center -mx-1 text-sm text-[#3195ff] capitalize transition-colors duration-300 transform dark:text-[#3195ff] hover:underline hover:text-red-500 dark:hover:text-red-500"
                to={`/Ladakh/${tour.id}`}
              >
                <span className="mx-1">read more</span>
                <svg
                  className="w-4 h-4 mx-1 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>

            <div className="px-6 pt-4 pb-2">
              <div className="font-semibold text-sm py-2 underline">
                {tour.highlights}
              </div>
              {tour.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-gray-200 dark:bg-[#000] rounded-md px-3 py-1 text-sm font-semibold text-[#fff] mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
              {/* <Link className="inline-block rounded-md text-[#fff] hover:text-red-500 dark:bg-[#000] hover:bg-gray-700 px-3 py-1 text-sm font-semibold"
                                to={`/tours/${tour.id}`}>{tour.name}
                            </Link> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LadakhTours;
