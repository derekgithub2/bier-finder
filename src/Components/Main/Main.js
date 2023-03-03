import React, { useEffect, useState } from 'react'
import './Main.css'
import Form from '../Form/Form'
import CardContainer from '../Card/Card'
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
            {/* <Form searchFunc={}/> */}
            <Form setSearch={setSearchInput} />
            <p>Card Container goes here</p>
            <div style={{display: loading ? "block" : "none"}}>Loading...</div>
            {/* <div style={{display: error ? "block" : "none"}}><h1>Error</h1></div> */}
            <CardContainer byState={dataList}/>
        </div>
    )
}

export default Main;