import React from 'react'
import { Link } from "react-router-dom";
// import './Hero.css'

function Hero() {
    return (
        <section className="bg-[#000]">
            <div className="w-full">
                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="text-center">
                            <h2 className="text-2xl leading-6 text-center px-4 mb-8">
                                <span className="text-[#3195ff] font-bold">Eco India Journeys</span>
                            </h2>
                            <h1 className="bg-gradient-to-l from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-6xl leading-1 tracking-tight sm:text-6xl">
                                Travel Agency
                            </h1>
                            <p className="mt-6 text-lg leading-loose text-white">
                                "Ready to explore India? Discover amazing destinations, indulge in new experiences, and make unforgettable memories. Book your holiday with us!"
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link
                                    to="/ladakh"
                                    className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;