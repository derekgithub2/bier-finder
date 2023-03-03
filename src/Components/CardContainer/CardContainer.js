import React, { useState } from "react";
import './CardContainer.css'
import Card from '../Card/Card'
import { fetchData } from '../../apiCalls'

const CardContainer = (byState) => {

    const breweries = byState.map(brewery => {
        return (
            <Card 
                name = {brewery.name}
                street = {brewery.street}
                city = {brewery.city}
                country = {brewery.country}
                website = {brewery.website}
                phone = {brewery.phone}
                key = {brewery.id}
            />
        )
    })


    return (
        <div className='card-container'>
            {breweries}
        </div>
    )
}

export default CardContainer;