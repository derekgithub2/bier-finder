import React, { useEffect, useState } from 'react'
import './Main.css'
import Form from '../Form/Form'
import Card from '../Card/Card'

const Main = () => {

    const [dataList, setDataList] = useState([]);
    const [searchInput, setSearchInput] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
    const [selection, setSelection] = useState('')
    const [page, setPage] = useState('')

    const handleSelection = (e) => {
        e.preventDefault()
        setSelection(e.target.name)
    }

    const handlePage = (e) => {
        e.preventDefault()
        setPage(e.target.value)
    }

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
          const response = await fetch(
            `https://api.openbrewerydb.org/breweries?by_state=${searchInput}&per_page=50&page=${page}`
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
    }, [page]);

    return (
        <div className='main'>
            <section className='form-container'>
                <p>Select a state below:</p>
                <Form setSearch={setSearchInput} />
                {/* <div style={{display: error ? "block" : "none"}}><h1>Error</h1></div> */}
            </section>
            <section className='page-selection'>
                <button onClick={handlePage} value='1'>Page 1</button>
                <button onClick={handlePage} value='2'>Page 2</button>
                <button onClick={handlePage} value='3'>Page 3</button>
                <button onClick={handlePage} value='4'>Page 4</button>
                <button onClick={handlePage} value='5'>Page 5</button>
                <button onClick={handlePage} value='6'>Page 6</button>
                <button onClick={handlePage} value='7'>Page 7</button>
            </section>
            <section className="card-grid">
                {dataList.map((brew) => {
                    return <Card 
                    handleSelection={handleSelection}
                    key={brew.id}
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