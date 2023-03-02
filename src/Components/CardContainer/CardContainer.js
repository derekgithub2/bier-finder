import React from "react";
import './CardContainer.css'
import Card from '../Card/Card'

const CardContainer = ({fullArray, usersCity}) => {

    // do fetch call and pass down to card everything we need to display on the card.
    // usersCity 
    // const breweries = dataList.map(brewery => {
    //     return (
    //         <Card 
    //             name = {brewery.name}
    //             street = {brewery.street}
    //             city = {brewery.city}
    //             country = {brewery.country}
    //             website = {brewery.website ? brewery.website : "none"}
    //             phone = {brewery.phone}
    //             key = {brewery.id}
    //         />
    //     )
    // })


    return (
        <div>
            <Card />
        </div>
    )
}

export default CardContainer;