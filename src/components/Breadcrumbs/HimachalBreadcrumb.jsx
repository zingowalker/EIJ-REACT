import React from "react";
import { Link } from "react-router-dom";

export const HimachalBreadcrumb = () => {
  return (
    <nav
      className="flex text-gray-900 relative top-0 justify-center items-center"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="text-gray-900  inline-flex ml-1 md:ml-2 text-sm font-medium hover:underline"
          >
            <svg
              className="w-5 h-5 text-blue-500 mr-2.5"
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
              className="w-6 h-6 text-blue-500"
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
              Destination
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-blue-500"
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
              className="text-gray-900 dark:text-gray-900 ml-1 md:ml-2 text-sm font-medium hover:underline"
            >
              Himachal
            </Link>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default HimachalBreadcrumb;
