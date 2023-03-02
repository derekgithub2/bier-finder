import React, { useEffect, useState } from 'react'
import './Main.css'
import Form from '../Form/Form'
import CardContainer from '../Card/Card'
import { fetchData } from '../../apiCalls'

const Main = () => {

    const [dataList, setDataList] = useState([])
    const [searchInput, setSearched] = useState('')
    const [randomBrews, setRandomBrews] = useState([])

    useEffect(() => {
        fetchData()
        .then (data => {
            setDataList(data)
            console.log('searchInput in main', searchInput)
            console.log(dataList)
        })
        .catch ((error) => {
            throw new Error(error)
        }, [])
    },[searchInput])

    return (
        <div className='main'>
            <p>Click the search bar to search your state!</p>
            <Form dropdown={dataList} setSearched={setSearched}/>
            <p>Card Container goes here</p>
            <CardContainer usersCity={searchInput}/>
        </div>
    )
}

export default Main;