import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-white ">
      <div className="w-full">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h2 className="text-2xl leading-6 text-center px-4 mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-l from-green-300 via-blue-500 to-purple-600 font-semibold">
                  Eco India Journeys
                </span>
              </h2>
              <h1 className="text-4xl font-bold text-transparent md:text-6xl leading-1 tracking-tight sm:text-2xl">
                <span className="bg-clip-text bg-gradient-to-l from-green-300 via-blue-500 to-purple-600">
                  Travel Agency, &nbsp;Ladakh, &nbsp;Kashmir, &nbsp;South India,
                  Himachal and More..
                </span>
              </h1>
              <p className="mt-6 text-md leading-loose text-gray-700">
                "Ready to explore India? Discover amazing destinations, indulge
                in new experiences, and make unforgettable memories. Book your
                holiday with us!"
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="Destination/Ladakh"
                  className="rounded-md bg-[#3195ff] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#276eba] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
