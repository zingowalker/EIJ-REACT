import React from "react";
import LadakhBreadcrumb from "../../components/Breadcrumbs/LadakhBreadcrumb";
import LadakhBanner from "../../components/Banner/LadakhBanner";
import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

const Data = [
    {
        id: 1,
        title: "Markha Trek 05 Days",
        src:
            "https://www.ecoindiajourneys.com/images/markhatrek.jpg",
        alt: "Hikers trekking to Markha Village, scenic view",
        tags: ["Trekking", "Moderate", "Homestay", "Village Life", "Camping"],
        description:
            "Markha Trek 05 Days, Trekking Through Ladakh's Stunning Landscape!",
        name: "Itinerary",
        link: "markha-trek",
    },
    {
        id: 2,
        title: "Rumtse To Tsomoriri Trek 09 Days",
        src:
            "https://www.ecoindiajourneys.com/images/rumtse-tsomoriri-trek2.jpg",
        alt: "Tent with view of Tsomoriri Lake",
        tags: ["Trekking", "Moderate", "Nomad Life", "Tsomoriri Lake", "Camping"],
        description:
            "Explore the Beauty of the Changthang Plateau!",
        link: "rumtse-tsomoriri-trek",
        name: "Itinerary"
    },
    {
        id: 3,
        title: "Likir To Timisgam Trek 03 Days",
        src:
            "https://www.ecoindiajourneys.com/images/sham-trek1.jpg",
        alt: "Hiking group picture at the pass",
        tags: ["Hikking", "Village Life", "Easy Hike", "Camping", "Homestay"],
        description:
            "Experience the culture of Ladakh on the Likir to Timisgam also know as baby trek",
        link: "likir-timisgam-trek",
        name: "Itinerary"
    },
    {
        id: 4,
        title: "Essence Of Ladakh, Royal Enfield Adventure",
        src:
            "https://hardevmotors.com/wp-content/uploads/2018/09/bgn-heading-san-francisco-1-1.jpg",
        alt: "Motor bike group",
        tags: ["Royal Enfield", "Adventure", "Motorbike", "Ladakh", "Touring"],
        description:
            "This complete motorcycle tour will give you an excellent glimpse of Ladakh main sites and its natural, cultural and spiritual riches.",
        link: "ladakh-motorbike-adventure",
        name: "Itinerary"
    },

];

export const LadakhTours = () => {
    return (
        <>
            <LadakhBanner />
            <LadakhBreadcrumb />
            <div className="p-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {Data.map((item) => (
                    <div
                        key={item.id}
                        className="rounded overflow-hidden shadow-lg dark:shadow-gray-800"
                    >
                        <img className="w-full" src={item.src} alt={item.alt} loading="lazy" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{item.title}</div>
                            <p className="text-gray-700  text-base">
                                {item.description.substring(0, 100)}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            {item.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-block bg-gray-200 dark:bg-[#000] rounded-md px-3 py-1 text-sm font-semibold text-[#fff] mr-2 mb-2"
                                >
                                    {tag}
                                </span>
                            ))}
                            <Link className="inline-block rounded-md text-[#fff] hover:text-red-500 dark:bg-[#000] hover:bg-gray-700 px-3 py-1 text-sm font-semibold"
                                to={`/Ladakh-Tours/${item.link}`}>{item.name}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default LadakhTours;