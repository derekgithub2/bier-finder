import React from "react";
import { Link } from 'react-router-dom'
import './Card.css'


const Card = ({name, street, city, state, website, phone}) => {

    return (
        <Link to={`/${name}`} style={{textDecoration: 'inherit', color: 'inherit'}}>
            <div className="card">
                <h4>Brewery: {name}</h4>
                <p>Street: {street}</p>
                <p>City: {city}, {state}</p>
                <p>Website: {website ? website : 'n/a'}</p>
                <p>Phone: {phone ? phone : 'n/a'}</p>
            </div>
        </Link>

    )
}

export default Card;