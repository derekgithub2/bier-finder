import React from "react";
import './Form.css'
import Link from 'react'

const Form = () => {


    return (
        <div>
            <form>
                <input
                    type='text'
                    placeholder='Search by city...'

                />
                {/* <Link to="/">
                    <button></button>
                </Link> */}
            </form>
        </div>
    )
}

export default Form;