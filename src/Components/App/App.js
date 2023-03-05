import React, { useState } from 'react'
import './App.css';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Form from '../Form/Form'
import SingleView from '../RandomBrews/RandomBrews'
import NotFound from '../NotFound/NotFound'
import { Route, Routes } from 'react-router-dom'

const App = () => {

  const [searchInput, setSearchInput] = useState('')

  return (
    <div className='App'>
      <section className="top-container">
      <Header />
      <section className='form-container'>
                <p>Select a state:</p>
                <Form setSearch={setSearchInput} />
      </section>
      </section>
      <Routes>
        <Route path='/search' element={<Main searchInput={searchInput}/>}/>
        <Route path='/' element={<SingleView />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  )
}


export default App;
