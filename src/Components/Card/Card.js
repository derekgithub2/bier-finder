import React, { useEffect, useState } from "react";
import './Card.css'
import { fetchData } from '../../apiCalls'


const Card = () => {

    const [dataList, setDataList] = useState([])
    // const [searchInput, setSearched] = useState('')

    useEffect(() => {
        fetchData(searchInput)
        .then (data => {
            setDataList(data)
            // console.log(dataList)
        })
        .catch ((error) => {
            throw new Error(error)
        }, [])
    })

    const breweries = dataList.map(brewery => {
        return (
            <Card 
                name = {brewery.name}
                street = {brewery.street}
                city = {brewery.city}
                country = {brewery.country}
                website = {brewery.website ? brewery.website : "none"}
                phone = {brewery.phone}
                key = {brewery.id}
            />
        )
    })

    return (
        <div className="breweries">
            {breweries}
        </div>
    )
}

export default Card;