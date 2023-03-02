import React, { useEffect, useState } from 'react'
import './Main.css'
import Form from '../Form/Form'
import CardContainer from '../Card/Card'
import { fetchData } from '../../apiCalls'

const Main = () => {

    const [dataList, setDataList] = useState([])
    const [searchInput, setSearched] = useState('')

    useEffect(() => {
        fetchData()
        .then (data => {
            setDataList(data)
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
            <CardContainer />
        </div>
    )
}

export default Main;