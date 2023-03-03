import React, { useState, useEffect } from "react";
import './Form.css'
// import Link from 'react'
import states from './states'
import getData from '../../apiCalls'

const Form = () => {

    const [userChoice, setUserChoice] = useState('')
    const [dataList, setDataList] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')


    useEffect(() => {
        setLoading(true)
        async function fetchData () {
            try {
                const response = await getData(searchInput)
                setDataList(response)

                // if (!response.ok){
                //     throw new Error('there was an error')
                // }
                // .then((res) => setDataList(res.json()))
                // const newData = await response.json();
                // if(loading) {
                // }
            } catch (error) {
                console.log(error)
            }
            // const json = await response.json()
            console.log("DATA HERE", dataList)
        }
        fetchData()
        // return () => {
        //     setLoading(false)
        // }
    },[searchInput])

    const handleChange = (e) => {
        e.preventDefault()
        setUserChoice(e.target.value)
        // setSearchInput(e.target.value)
        console.log("e.target.value", e.target.value)
        console.log("inside handle change", userChoice)
    }

    const handleClick = (e) => {
        e.preventDefault()
        console.log("userChoice onClick", userChoice)
        setSearchInput(userChoice)
        console.log("searchInput onClick", searchInput)
    }

    const stateList = states.map(state => {
        return (<option key={state}>{state}</option>)
    })

    return (
        <div>
            <form>
                <input
                    type='text'
                    placeholder='Search...'
                    className='input-field'
                    list='dropdown-menu'
                    value={userChoice}
                    onChange={handleChange}
                    required>
                </input>
                <datalist id='dropdown-menu'>
                    {stateList}
                </datalist>
                <div>
                        <button onClick={handleClick} type='submit'>Go!</button>
                </div>
            </form>
        </div>
    )
}

export default Form;