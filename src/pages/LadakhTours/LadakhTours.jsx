import { Link } from "react-router-dom";
import { useState } from "react";
import slugify from "slugify";

import LADAKH from "../../../ladakh.js";
import LadakhBreadcrumb from "../../components/Breadcrumbs/LadakhBreadcrumb";
import LadakhBanner from "../../components/Banner/LadakhBanner";

export const LadakhTours = () => {
  const [isTruncated, setIsTruncated] = useState(true);

  const ladakhdesc = `Leh, situated in northern India, is a sought-after dream destination for travelers from all over the world. 
  With its high altitudes and numerous passes connecting various locations, this frozen paradise offers an unparalleled experience for adventure enthusiasts, 
  families, couples, and solo travelers alike.
  
  While the harsh weather and difficult terrains can be a challenge, Leh's stunning beauty and unique landscape make it a must-visit destination. 
  Despite its growing popularity, Leh remains sparsely crowded even during peak season, making it an ideal destination for those seeking a peaceful escape. 
  
  For photography enthusiasts, Leh is a paradise that offers a vast empty canvas to paint. 
  The landscape here is unlike anywhere in India and worldwide, offering unimaginable sights that change every few kilometers. 
  With turquoise blue lakes, beautifully constructed monasteries, and snow-covered mountains,
  Leh is a perfect destination for nature lovers and adventure seekers alike.

  Whether you're traveling solo, with friends, families, or that special someone, 
  Leh is a safe and economical destination. Explore the best tourist places in Leh with the best Leh tour packages to experience its breathtaking beauty 
  and unforgettable memories. So, make sure to visit Leh and experience its secrets firsthand.
  `;

  const maxLength = 350;

  if (ladakhdesc.length <= maxLength) {
    return <p style={{ whiteSpace: "pre-wrap" }}>{ladakhdesc}</p>;
  }

  const truncatedText = isTruncated
    ? ladakhdesc.slice(0, maxLength) + "..."
    : ladakhdesc;

  function toggleIsTruncated() {
    setIsTruncated(!isTruncated);
  }

  // const slug = slugify(id.toString(), { lower: true });

  return (
    <>
      <LadakhBanner />
      <LadakhBreadcrumb />
      <div className="flex justify-center items-center py-8 px-8">
        <div className="container rounded shadow-md shadow-gray-800 px-2 py-2 leading-relaxed  first-letter:text-4xl first-letter:font-bold first-letter:text-blue-500 lg:text-base dark:first-letter:text-blue-500 first-letter:mr-2 text-center text-sm md:text-left">
          <p style={{ whiteSpace: "pre-wrap" }}>{truncatedText}</p>
          <button
            className="text-blue-500 hover:text-blue-700 font-100 lg:text-sm"
            onClick={toggleIsTruncated}
          >
            {isTruncated ? "Read more + " : "Read less - "}
          </button>
        </div>
      </div>

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
                {tour.desc.substring(0, 100)}
              </p>
              <Link
                className="inline-flex items-center -mx-1 text-sm text-[#3195ff] capitalize transition-colors duration-300 transform dark:text-[#3195ff] hover:underline hover:text-red-500 dark:hover:text-red-500"
                // to={`/Ladakh/${tour.id}`}
                to={`/Ladakh/${slugify(`${tour.title}`)}`}
              >
                {/* {title} */}

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

export default LadakhTours;
