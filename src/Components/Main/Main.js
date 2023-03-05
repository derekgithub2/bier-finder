import React, { useEffect, useState } from 'react'
import './Main.css'
import Card from '../Card/Card'

const Main = ({searchInput}) => {

    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')
    const [page, setPage] = useState('')

    const handlePage = (e) => {
        e.preventDefault()
        setPage(e.target.value)
    }

    useEffect(() => {

        const fetchData = async () => {
          const response = await fetch(
            `https://api.openbrewerydb.org/breweries?by_state=${searchInput}&per_page=50&page=${page}`
          )
          const newData = await response.json();
          setDataList(newData)
          setLoading(false)
          .catch((error) => {
            setLoading(false)
            setError(error)
          })

        };
        fetchData();

    }, [searchInput, page]);

    if(!loading && !error) {
        return (
            <div className='main'>
                <section className='page-selection'>
                    <button onClick={handlePage} value='1'>Page 1</button>
                    <button onClick={handlePage} value='2'>Page 2</button>
                    <button onClick={handlePage} value='3'>Page 3</button>
                    <button onClick={handlePage} value='4'>Page 4</button>
                    <button onClick={handlePage} value='5'>Page 5</button>
                </section>
                {error ? error : ''}
                <section className="card-grid">
                    {dataList.map((brew) => {
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
    } else if (loading) {
        return (
            <div>
                {loading && <h1>Loading...</h1>}
            </div>
        )
    } 
    else {
        return (
            <div>
                NOT FOUND HERE
                {/* {error && <NotFound />} */}
            </div>
        )
    }
}

export default Main;