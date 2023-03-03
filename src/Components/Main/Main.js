import React, { useEffect, useState } from 'react'
import './Main.css'
import Form from '../Form/Form'
import Card from '../Card/Card'
// import { fetchData } from '../../apiCalls'

const Main = () => {

    const [dataList, setDataList] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
          const response = await fetch(
            `https://api.openbrewerydb.org/breweries?by_state=${searchInput}`
          );
          const newData = await response.json();
          if (loading) {
            setDataList(newData);
          }
        };
        fetchData();
        return () => {
          setLoading(false);
        };
    }, [searchInput]);

    

    return (
        <div className='main'>
            <p>Click the search bar to search your state!</p>
            <Form setSearch={setSearchInput} />
            <div style={{display: loading ? "block" : "none"}}>Loading...</div>
            {/* <div style={{display: error ? "block" : "none"}}><h1>Error</h1></div> */}
            <section className="card-grid">
                {dataList.map((brew) => {
                    return <Card 
                    name={brew.name} 
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

export default Main;