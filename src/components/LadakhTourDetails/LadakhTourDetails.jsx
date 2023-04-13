import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import TOURS from '../../../ladakh.js'

import MarkhaTrek from '../Itineraries/MarkhaTrek.jsx';

const LadakhTourDetails = () => {
  // Your tour details page JSX goes here
  const navigate = useNavigate();
  const { tourId } = useParams();
  // const { pathname } = useLocation();

  // get product
  const ladakhTourDetails = TOURS.find(tour => tour.id === parseInt(tourId))
  // use == instead of === if useParams fails to get the id
  // or just check data type or use parseInt(id)

  // console.log(typeof(productId))

  const { id, name, src, alt, tags, desc, text, link } = ladakhTourDetails;

  // console.log("tour id ", tourId)
  // console.log("tour ", ladakhTourDetails)

  return (
    <>
      <div className="mx-auto py-12">
        <div className="bg-cover bg-center h-64 md:h-96"
          style={{ backgroundImage: `url(${src})` }}>
          <div className="container mx-auto h-full flex flex-col items-center justify-center column">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center">{name}</h1>
            <p className="text-[#fff] text-sm md:text-xl text-center mt-4">{desc}</p>
          </div>
        </div>
      </div>
      {/* Breadcrumb */}
      <nav
        className="flex text-gray-900 relative top-0 dark:text-gray-900 justify-center items-center"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="text-gray-900 dark:text-gray-900 inline-flex ml-1 md:ml-2 text-sm font-medium hover:underline"
            >
              <svg
                className="w-5 h-5 mr-2.5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-900 dark:text-gray-900"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Link
                to="/Destination/Ladakh"
                className="text-gray-900 dark:text-gray-900 ml-1 md:ml-2 text-sm font-medium hover:underline"
              >
                Destination/Ladakh
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-900 dark:text-gray-900"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Link className="text-gray-900 dark:text-gray-900 ml-1 md:ml-2 text-sm font-medium hover:underline"
                // to={name.id}>{title}
                to={name.id}> {name}
              </Link>
            </div>
          </li>
        </ol>
      </nav>
      <MarkhaTrek />
    </>
  );
}

export default LadakhTourDetails;


