import React from 'react';
import { useParams } from 'react-router-dom';

function LadakhTourDetails(props) {
  // Your tour details page JSX goes here
  const { id } = useParams();
  const tour = Data.find((tour) => tour.link === id);
  return (
    <div>
      <h1>{tour.title}</h1>
      <p>{tour.description}</p>
      {/* <p>Tags: {props.tags.join(', ')}</p> */}
    </div>
  );
}

export default LadakhTourDetails;


