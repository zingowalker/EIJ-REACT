import { useState } from "react";
import slugify from "slugify";

import SouthIndiaBreadcrumb from "../../components/Breadcrumbs/SouthIndiaBreadcrumb";
import SouthIndiaBanner from "../../components/Banner/SouthIndiaBanner";
import { Link } from "react-router-dom";
import SOUTHINDIA from "../../../southIndia.js";

export const SouthIndiaTours = () => {
  const [isTruncated, setIsTruncated] = useState(true);

  const southIndiaDesc = `If you're planning a trip to India, you cannot miss the vibrant and culturally   rich region of South India. 
  With its diverse landscapes, ancient history, and mouth-watering cuisine,  South India is a must-visit destination for every traveler.

  Comprising the states of Andhra Pradesh, Karnataka, Kerala, Tamil Nadu, and Telangana, as well as the union territories of the 
  Andaman and Nicobar Islands, Lakshadweep and Puducherry, South India covers an area of 635,780 km2 or 
  245,480 sq mi and is home to over 20% of India's population.

  From the majestic Western and Eastern Ghats mountain ranges to the stunning beaches of 
  Goa and the backwaters of Kerala, South India offers a wide range of landscapes for nature lovers to explore. 
  The region is also famous for its ancient temples, churches, and mosques, 
  which are a testament to its rich history and cultural diversity.
  
  South Indian cuisine is known for its bold flavors and use of local spices and herbs. From the crispy dosas and fluffy idlis of 
  Tamil Nadu to the spicy seafood curries of Kerala, South Indian cuisine is a treat for the taste buds.
  
  When it comes to accommodation, South India offers a range of options for every budget, from luxury resorts to budget guesthouses. 
  Transportation is also easily accessible, with well-connected airports, railways, and roads  making it easy to get around the region.
  
  South India has also been recognized for its socio-economic metrics, with a high literacy 
  rate and a low fertility rate compared to other regions in India. The region has also experienced sustained growth in per-capita income and 
  population, making it an attractive destination for investment and business.
  
  In conclusion, South India offers a unique blend of nature, history, culture, and cuisine that makes it an exciting destination for travelers. 
  With its diverse landscapes, rich cultural heritage, and delicious cuisine, South India is a must-visit destination for any traveler looking to 
  explore the beauty and diversity of India.
  `;

  const maxLength = 350;

  if (southIndiaDesc.length <= maxLength) {
    return <p style={{ whiteSpace: "pre-wrap" }}>{southIndiaDesc}</p>;
  }

  const truncatedText = isTruncated
    ? southIndiaDesc.slice(0, maxLength) + "..."
    : southIndiaDesc;

  function toggleIsTruncated() {
    setIsTruncated(!isTruncated);
  }

  return (
    <>
      <SouthIndiaBanner />
      <SouthIndiaBreadcrumb />
      <div className="flex justify-center items-center py-8 px-8">
        <div
          className="container rounded shadow-md shadow-gray-800 px-2 py-2 leading-relaxed
         first-letter:text-4xl first-letter:font-bold first-letter:text-blue-500 lg:text-lg 
         dark:first-letter:text-blue-500 first-letter:mr-2 text-center text-sm md:text-left"
        >
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
        {SOUTHINDIA.map((tour) => (
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
                to={`/South-India/${slugify(`${tour.title}`)}`}
                // to={`/Ladakh/${slugify(`${tour.title}`)}`}
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

export default SouthIndiaTours;
