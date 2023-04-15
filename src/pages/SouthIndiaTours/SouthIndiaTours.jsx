import React from "react";

import SouthIndiaBreadcrumb from "../../components/Breadcrumbs/SouthIndiaBreadcrumb";
import SouthIndiaBanner from "../../components/Banner/SouthIndiaBanner";
import { Link } from 'react-router-dom'

const Data = [
    {
        id: 1,
        title: "Ayurveda In Kerala & A Backwater Cruise",
        src:
            "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2mages/markhatrek.jpg",
        alt: "Houseboat in Backwater of kerala",
        tags: ["Kochi", "Alleypey", "Houseboat Cruise", "Kovalam", "Ayurveda Therapy"],
        description:
            "Explore the healing powers of Ayurveda in Kerala, followed by a serene backwater cruise. Rejuvenate your mind and body amidst nature's bliss.",
        name: "Itinerary",
        link: "Kerala-Backwaters-Tour-from-Kochi-Including-Ayurvedic-Massage",
    },

];

export const SouthIndiaTours = (props) => {
    return (
        <>
            <SouthIndiaBanner />
            <SouthIndiaBreadcrumb />
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
                                {item.description.substring(0, 150)}
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
                                to={`/Tour/${item.link}`}>{item.name}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};


export default SouthIndiaTours;