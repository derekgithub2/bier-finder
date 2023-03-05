import React from "react";
import { Link } from 'react-router-dom'
import './Card.css'


const Card = ({name, type, street, city, state, website, phone}) => {

    return (
        <Link to={`/${name.replaceAll(' ','-')}`} style={{textDecoration: 'inherit', color: 'inherit'}}>
            <div className="card">
                <h4>{name}</h4>
                <p>Type: {type}</p>
                <p>Street: {street ? street : 'n/a'}</p>
                <p>City: {city}, {state}</p>
                <p>Website: {website ? website : 'n/a'}</p>
                <p>Phone: {phone ? phone : 'n/a'}</p>
            </div>
        </Link>
    )
}

export default Card;