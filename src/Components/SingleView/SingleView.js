import React, { useState, useEffect } from "react";
import './SingleView.css'
import Card from '../../Components/Card/Card'

const SingleView = () => {

    const [randomBrews, setRandomBrews] = useState([])
    const [loading, setLoading] = useState(true);
    
    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch(`https://api.openbrewerydb.org/breweries/random?size=5`)
            const data = await response.json()
            if (loading) {
                setRandomBrews(data)
                console.log("fetch worked")
            }
            return () => {
                setLoading(false)
            }
        }
        fetchData()
    },[])

    return (
        <div className='random-breweries'>
            <section className="card-grid">
                {randomBrews.map((brew) => {
                    return <Card 
                    key={brew.id}
                    name={brew.name} 
                    type={brew['brewery_type']}
                    street={brew.street}
                    city={brew.city}
                    state={brew.state}
                    website={brew.website}
                    phone={brew.phone}/>
                })}
            </section>
        </div>
    )
}

export default SingleView;