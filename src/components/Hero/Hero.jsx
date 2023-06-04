import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-hero bg-cover bg-center bg-no-repeat opacity-80">
      <div className="w-full">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="font-bold tex leading-1 tracking-tight text-2xl md:text-4xl">
                <span className="text-gray-100">
                  Travel Agency
                  <br />
                  &nbsp;We offer travel and tour services to Ladakh,
                  &nbsp;Kashmir, &nbsp;South India, Himachal and More..
                </span>
              </h1>
              <p className="mt-6 text-sm md:text-md leading-loose text-gray-200">
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
