import React from 'react'

const SouthIndiaTour = (props) => {
    const tourId = props.match.params.id;
    return (
        <div>
            South India Tour: {tourId}
            <h1>Kerala Tour Itinerary</h1>
        </div>
    )
}

export default SouthIndiaTour;
