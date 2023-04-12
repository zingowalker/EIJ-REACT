import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import TOURS from '../../../ladakh.js'

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

  const { id, title, src, alt, tags, desc, text } = ladakhTourDetails;

  // console.log("tour id ", tourId)
  // console.log("tour ", ladakhTourDetails)

  return (
    <div className="mx-auto py-12">
      <div className="bg-cover bg-center h-64 md:h-96"
        style={{ backgroundImage: `url(${src})` }}>
        <div className="container mx-auto h-full flex flex-col items-center justify-center column">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">{title}</h1>
          <p className="text-[#fff] text-sm md:text-xl text-center mt-4">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default LadakhTourDetails;


