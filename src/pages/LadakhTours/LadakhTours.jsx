import React from "react";
import TOURS from '../../../ladakh.js'

import LadakhBreadcrumb from "../../components/Breadcrumbs/LadakhBreadcrumb";
import LadakhBanner from "../../components/Banner/LadakhBanner";
import { Link } from 'react-router-dom'


export const LadakhTours = () => {
    return (
        <>
            <LadakhBanner />
            <LadakhBreadcrumb />
            <div className="p-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {TOURS.map((tour) => (
                    <div
                        // key={tour.id}
                        className="rounded overflow-hidden shadow-lg dark:shadow-gray-800"
                    >
                        <img className="w-full" src={tour.src} alt={tour.alt} loading="lazy" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{tour.title}</div>
                            <p className="text-gray-700  text-base">
                                {tour.description.substring(0, 100)}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            {tour.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-block bg-gray-200 dark:bg-[#000] rounded-md px-3 py-1 text-sm font-semibold text-[#fff] mr-2 mb-2"
                                >
                                    {tag}
                                </span>
                            ))}
                            <Link className="inline-block rounded-md text-[#fff] hover:text-red-500 dark:bg-[#000] hover:bg-gray-700 px-3 py-1 text-sm font-semibold"
                                to={`/tours/${tour.id}`}>{tour.name}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default LadakhTours;