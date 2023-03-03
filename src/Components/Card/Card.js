import React from "react";
import './Card.css'


const Card = ({name, street, city, state, website, phone}) => {

    return (
        <div className="card">
            <p>Brewery: {name}</p>
            <p>Street: {street}</p>
            <p>City: {city}, {state}</p>
            <p>Website: {website ? website : 'n/a'}</p>
            <p>Phone: {phone ? phone : 'n/a'}</p>
        </div>
    )
}

export default Card;