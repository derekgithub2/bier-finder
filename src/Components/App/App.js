import React from 'react'
import './App.css';
import Header from '../Header/Header'
import Main from '../Main/Main'
import SingleView from '../SingleView/SingleView'
import { Route, Routes } from 'react-router-dom'

const App = () => {

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/:name' element={<SingleView />}/>
        {/* <Route path='*' element={<NotFound />}/> */}
      </Routes>

      
    </div>
  )
}


export default App;
