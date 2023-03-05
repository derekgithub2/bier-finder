import React, { useEffect, useState } from 'react'
import './App.css';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Form from '../Form/Form'
import SingleView from '../SingleView/SingleView'
import { Route, Routes } from 'react-router-dom'

const App = () => {

  const [searchInput, setSearchInput] = useState('')

  return (
    <div className='App'>
      <Header />
      <section className='form-container'>
                <p>Select a state below:</p>
                <Form setSearch={setSearchInput} />
      </section>
      <Routes>
        <Route path='/search' element={<Main searchInput={searchInput}/>}/>
        <Route path='/' element={<SingleView />}/>
        {/* <Route path='*' element={<NotFound />}/> */}
      </Routes>
    </div>
  )
}


export default App;
