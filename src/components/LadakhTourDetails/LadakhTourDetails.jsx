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

  const { id, title, src, alt, tags, description, name, text } = ladakhTourDetails;

  // console.log("tour id ", tourId)
  // console.log("tour ", ladakhTourDetails)

  return (
    <div className="max-auto">
      <h1 clasName="mt-8">{title}</h1>
      <p>{text} </p>
      {/* <p>Tags: {props.tags.join(', ')}</p> */}
      <Link to="/tours" className="btn btn-primary btn-sm">Itinerary</Link>
    </div>
  );
}

export default LadakhTourDetails;


