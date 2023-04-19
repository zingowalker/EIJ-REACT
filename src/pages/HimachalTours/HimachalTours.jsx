import { Link } from "react-router-dom";
import { useState } from "react";
import slugify from "slugify";

import HIMACHAL from "../../../Himachal.js";
import HimachalBreadcrumb from "../../components/Breadcrumbs/HimachalBreadcrumb";
import HimachalBanner from "../../components/Banner/HimachalBanner";

export const HimachalTours = () => {
  const [isTruncated, setIsTruncated] = useState(true);

  const himachaldesc = `
  Spiti's topography is marked by high mountains and narrow river valleys with flat land being uncommon. The rugged climate and high altitude make the region unsuitable for human habitation. The magnificent range of Himalayas in the background is beautiful and refreshing. Wild life such as Ibex and Thar can be seen in the herds and snow wolves. You will explore the century’s old monasteries belonging to Tibetan Buddhism where monks practice meditation and other monastic rituals. They preserve old stucco images and Thangkas depicting different life stories of Guru Padmasambhava, the founder of the Gelug-Pa sect. People of Spiti live with their herds of Yak, Sheep and goat. They are hospitable and villages still maintain centuries old tradition. These villages are situated at the highest altitudes of the region, with stunning views of the Himalayas. The area is also home to some of the oldest monasteries in India. Visitors can explore these ancient sites, learn about the history and culture of the region, and experience the unique hospitality of the local people
  `;

  const maxLength = 350;

  if (himachaldesc.length <= maxLength) {
    return <p>{himachaldesc}</p>;
  }

  const truncatedText = isTruncated
    ? himachaldesc.slice(0, maxLength) + "..."
    : himachaldesc;

  function toggleIsTruncated() {
    setIsTruncated(!isTruncated);
  }

  // const slug = slugify(id.toString(), { lower: true });

  return (
    <>
      <HimachalBanner />
      <HimachalBreadcrumb />
      <div className="flex justify-center items-center py-8 px-8">
        <div className="container rounded shadow-md shadow-gray-800 px-2 py-2 leading-relaxed  first-letter:text-7xl first-letter:font-bold first-letter:text-blue-500 lg:text-md dark:first-letter:text-blue-500 first-letter:mr-3 first-letter:float-left">
          {truncatedText}
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
