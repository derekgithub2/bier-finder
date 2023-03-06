import React from "react";
import './Card.css'


const Card = ({name, type, street, city, state, website, phone}) => {


    let formattedPhoneNumber = phone


    return (
        <a href={`https://www.google.com/search?q=${name}`} style={{textDecoration: 'inherit', color: 'inherit'}}>
            <div className="card">
                <h4>{name}</h4>
                <p>Type: {type}</p>
                <p>Street: {street ? street : 'n/a'}</p>
                <p>City: {city}, {state}</p>
                <p>Website: {website ? website : 'n/a'}</p>
                <p>Phone: {formattedPhoneNumber ? formattedPhoneNumber : 'n/a'}</p>
            </div>
        </a>
    )
}

export default Card;