import React, { useState } from "react";
import { Link } from 'react-router-dom'
import './Card.css'


const Card = ({name, street, city, state, website, phone}, {handleSelection}) => {

    return (
        <Link to={`/${name.replaceAll(' ','-')}`} style={{textDecoration: 'inherit', color: 'inherit'}}>
            <div onClick={handleSelection} className="card">
                <h4>Brewery: {name}</h4>
                <p>Street: {street ? street : 'n/a'}</p>
                <p>City: {city}, {state}</p>
                <p>Website: {website ? website : 'n/a'}</p>
                <p>Phone: {phone ? phone : 'n/a'}</p>
            </div>
        </Link>
    )
}

export default Card;