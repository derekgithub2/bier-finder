import React from 'react'
import './App.css';
import Header from '../Header/Header'
import Main from '../Main/Main'
import { Router, Route, Link, Routes } from 'react-router-dom'

const App = () => {

  return (
    <div className='App'>
      <Header />
      <main className='main-container'>
        <Main />
      </main>

      {/* <Routes>
        <Route 
          path='/' 
          element={
            <div className='App'>
              <Header />
              <main className='main-container'>
                <Main />
              </main>
            </div>} 
        />
        <Route 
          exact path='/:id'
          render={() => (
            Single view here
          )}
        />
      </Routes> */}

    </div>
  )
}


export default App;
