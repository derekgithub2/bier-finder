import React from "react";
import './Card.css'


const Card = ({name, street, city, country, website, phone}) => {

    // const [brew, setBrews] = useState([])

    return (
        <div className="card">
            <p>Brewery: {name}</p>
            <p>Street: {street}</p>
            <p>City: {city}, {country}</p>
            <p>Website: {website ? website : 'n/a'}</p>
            <p>Phone: {phone ? phone : 'n/a'}</p>
        </div>
    )
}

export default Card;