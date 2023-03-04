import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import './SingleView.css'

const SingleView = () => {

    const {id} = useParams()
    console.log(id)
    const [brewery, setBrewery] = useState({})
    const [loading, setLoading] = useState(true);
    

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch(`https://api.openbrewerydb.org/breweries/${id}`)
            const singleBrew = await response.json()
            if (loading) {
                setBrewery(singleBrew)
                console.log("fetch worked")
            }
            return () => {
                setLoading(false)
            }
        }
        fetchData()

    },[])

    // setTimeout(5000)
    // console.log(brewery)

    return (
        <div className='single-view'>
            <p>SINGLE PAGE VIEW</p>
            {id}
        </div>
    )
}

export default SingleView;