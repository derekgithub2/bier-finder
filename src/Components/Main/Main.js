import React from 'react'
import './Main.css'
import Form from '../Form/Form'
import CardContainer from '../Card/Card'

const Main = () => {

    return (
        <div className='main'>
            <p>Form/Search bar goes here</p>
            <Form />
            <p>Card Container goes here</p>
            <CardContainer />
        </div>
    )
}

export default Main;