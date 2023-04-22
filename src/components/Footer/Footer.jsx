import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="relative flex justify-start md:justify-center md:items-end ">
        <img
          className="absolute object-cover top-10 h-full w-full xl:mt-10 z-0"
          src="../images/background.jpg"
          alt="background"
        />
        <div className="flex pt-36 md:pt-30 lg:pt-40 xl:pt-96  px-4 md:px-6 xl:px-20 flex-col justify-start items-start md:justify-center md:items-center relative z-10">
          <div className="flex flex-col items-start justify-start xl:justify-center xl:space-x-8 xl:flex-row">
            <div className="flex justify-start items-center space-x-4">
              <div className="w-12">
                <a href="/" className="cursor-pointer6">
                  <img src="../images/logo.png" alt="logo" />
                </a>
              </div>
              <p className="w-60 text-lg xl:text-2xl font-semibold leading-normal bg-gradient-to-l from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Eco India Journeys
              </p>
            </div>
            <div className="mt-12 xl:mt-0 grid grid-cols-1 sm:grid-cols-3 gap-y-12 sm:gap-y-0 w-full md:w-auto sm:gap-x-20 md:gap-x-28 xl:gap-8">
              <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
                <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">
                  About
                </h2>
                <Link
                  to="/about"
                  className="text-base leading-none text-white hover:text-gray-300"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-base leading-none text-white hover:text-gray-300"
                >
                  Contact
                </Link>
              </div>
              <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
                <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">
                  Tour Links
                </h2>
                <Link
                  to="/Destination/Ladakh"
                  className="text-left text-base hover:text-gray-400 leading-none text-gray-100"
                >
                  Ladakh
                </Link>
                <Link
                  to="/Destination/Himachal"
                  className="text-left text-base hover:text-gray-400 leading-none text-gray-100"
                >
                  Himachal
                </Link>
                <Link
                  to="/Destination/South-India"
                  className="text-left text-base hover:text-gray-400 leading-none text-gray-100"
                >
                  South India
                </Link>
              </div>
              <div className=" xl:w-72 flex justify-start items-start flex-col space-y-6">
                <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">
                  Support
                </h2>
                <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                  Call +91 8800777421
                </button>
                <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                  What's App +91 8587044340
                </button>
                <button className="text-base text-left hover:text-gray-400 leading-none text-gray-100">
                  Email: ecoindiajourneys@gmail.com
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 flex  xl:justify-between xl:flex-row flex-col-reverse items-center xl:items-start w-full ">
            <p className="mt-10 md:mt-12 xl:mt-0 text-sm leading-none text-white">
              2023 Eco India Journeys. All Rights Reserved
            </p>
            <div className="mt-10 md:mt-12 xl:mt-0 md:flex-row flex-col flex md:justify-center w-full md:w-auto justify-start items-start space-y-4 md:space-y-0 md:items-center md:space-x-4 xl:space-x-6">
              <Link
                to="/Terms-Of-Service"
                className="text-base leading-none text-white hover:text-gray-300"
              >
                Terms of Service
              </Link>
              <Link
                to="/Cancellation-Policy"
                className="text-base leading-none text-white hover:text-gray-300"
              >
                Cancellation Policy
              </Link>
              <Link
                to="/Privacy-Policy"
                className="text-base leading-none text-white hover:text-gray-300"
              >
                Privacy Policy
              </Link>

              <button className="text-base leading-none text-white hover:text-gray-300">
                Sitemap
              </button>
            </div>
            <div className="flex justify-start md:justify-end items-start w-full md:w-auto md:items-center space-x-6 ">
              <a
                href="https://twitter.com/ecoindia2023"
                target="_blank"
                className="text-white hover:text-blue-500 w-6"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.25 5.13282C22.406 5.49955 21.513 5.74116 20.5992 5.85001C21.5595 5.28769 22.2817 4.39434 22.6303 3.33751C21.7224 3.86841 20.7307 4.24092 19.6978 4.43907C19.2629 3.98322 18.7397 3.62059 18.1603 3.3732C17.5808 3.12581 16.9571 2.99884 16.327 3.00001C13.7761 3.00001 11.7117 5.03438 11.7117 7.5422C11.7099 7.89102 11.7499 8.23881 11.8308 8.57813C10.0016 8.49238 8.2104 8.02575 6.57187 7.2081C4.93333 6.39044 3.48351 5.23977 2.31516 3.8297C1.90527 4.52069 1.6885 5.30909 1.6875 6.11251C1.6875 7.68751 2.50922 9.0797 3.75 9.89532C3.01487 9.87787 2.29481 9.68331 1.65094 9.32813V9.38438C1.65094 11.5875 3.24469 13.4203 5.35406 13.8375C4.9574 13.9433 4.54864 13.9968 4.13812 13.9969C3.84683 13.9974 3.5562 13.9691 3.27047 13.9125C3.85687 15.7172 5.56359 17.0297 7.58531 17.0672C5.94252 18.3333 3.9256 19.0175 1.85156 19.0125C1.48341 19.012 1.11561 18.99 0.75 18.9469C2.85993 20.2942 5.31255 21.0068 7.81594 21C16.3172 21 20.9616 14.0766 20.9616 8.07188C20.9616 7.87501 20.9564 7.67813 20.947 7.48595C21.8485 6.84472 22.6283 6.04787 23.25 5.13282V5.13282Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/voyageecoindia/"
                target="_blank"
                className="text-white hover:text-[#3195ff] w-6"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.5 12.0645C22.5 6.26602 17.7984 1.56445 12 1.56445C6.20156 1.56445 1.5 6.26602 1.5 12.0645C1.5 17.3051 5.33906 21.649 10.3594 22.4374V15.1005H7.69266V12.0645H10.3594V9.75117C10.3594 7.12008 11.9273 5.66555 14.3255 5.66555C15.4744 5.66555 16.6763 5.87086 16.6763 5.87086V8.45508H15.3516C14.048 8.45508 13.6402 9.26414 13.6402 10.0957V12.0645H16.552L16.087 15.1005H13.6406V22.4384C18.6609 21.6504 22.5 17.3065 22.5 12.0645Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/ecoindiajourneys/?hl=en"
                target="_blank"
                className="text-white hover:text-[#3195ff] w-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="evenodd"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
