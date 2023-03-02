import React, { useState } from "react";
import './Form.css'
import Link from 'react'
import states from './states'

const Form = ({setSearched}) => {

    const [searchInput, setSearchInput] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        setSearched(searchInput)
    }

    const stateList = states.map(state => {
        return (<option>{state}</option>)
    })

    return (
        <div>
            <form>
                <input
                    type='text'
                    placeholder='Search...'
                    className='input-field'
                    value={searchInput}
                    list='dropdown-menu'
                    onChange={handleChange}
                    required>
                </input>
                <datalist id='dropdown-menu'>
                    {stateList}
                </datalist>
                <div>
                    {/* <Link to="/"> */}
                        <button onClick={handleClick} type='submit'>Go!</button>
                    {/* </Link> */}
                </div>
            </form>
        </div>
    )
}

export default Form;