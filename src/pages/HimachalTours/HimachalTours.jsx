import { Link } from "react-router-dom";
import { useState } from "react";
import slugify from "slugify";

import HIMACHAL from "../../../himachal.js";
import HimachalBreadcrumb from "../../components/Breadcrumbs/HimachalBreadcrumb";
import HimachalBanner from "../../components/Banner/HimachalBanner";

export const HimachalTours = () => {
  const [isTruncated, setIsTruncated] = useState(true);

  const himachaldesc = `Explore the natural beauty of Dev Bhoomi by booking Himachal Pradesh tour packages from Destination with Eco India Journeys. With exciting offers and deals on bookings, you can experience the breathtaking landscapes of Himachal Pradesh. Booking through Eco India Journeys provides the best deals and a well-curated itinerary that caters to the varying tastes of travelers. Choose from various tour packages, or customize your own according to your preferences.

  Eco India Journeys offers Himachal Pradesh tour packages from Destination for solo travelers and couples alike. If you're fond of cold and cozy places that let you connect with nature, Himachal Pradesh won't disappoint you. You can explore and experience a wide range of activities and places, including river rafting, skiing, paragliding, and more.

  Don't miss this opportunity! Book your Himachal tour packages from Destination now and avail amazing discounts and offers, while receiving 24X7 assistance from our dedicated team at Eco India Journeys.
  `;

  const maxLength = 350;

  if (himachaldesc.length <= maxLength) {
    return <p style={{ whiteSpace: "pre-wrap" }}>{himachaldesc}</p>;
  }

  const truncatedText = isTruncated
    ? himachaldesc.slice(0, maxLength) + "..."
    : himachaldesc;

  function toggleIsTruncated() {
    setIsTruncated(!isTruncated);
  }

  return (
    <>
      <HimachalBanner />
      <HimachalBreadcrumb />
      <div className="flex justify-center items-center py-8 px-8">
        <div className="container rounded shadow-md shadow-gray-800 px-2 py-1 leading-relaxed first-letter:text-4xl first-letter:font-bold first-letter:text-blue-500 md:text-left lg:text-lg dark:first-letter:text-blue-500 first-letter:mr-1 text-center text-sm">
          <p style={{ whiteSpace: "pre-wrap" }}>{truncatedText}</p>
          <button
            className="text-blue-500 hover:text-blue-700 font-semibold mr-22"
            onClick={toggleIsTruncated}
          >
            {isTruncated ? "Read more + " : "Read less - "}
          </button>
        </div>
      </div>

      <div className="p-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {HIMACHAL.map((tour) => (
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
                to={`/Himachal/${slugify(`${tour.title}`)}`}
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
                  className="inline-block bg-[#000] rounded-md px-3 py-1 text-sm font-semibold text-[#fff] mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HimachalTours;
