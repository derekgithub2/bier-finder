import React, { useState } from "react";
import './Form.css'
import Link from 'react'
import states from './states'

const Form = ({dropdown}) => {

    const [searchInput, setSearchInput] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value)
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
            </form>
        </div>
    )
}

export default Form;