import React from 'react'
import './App.css';
import Header from '../Header/Header'
import Main from '../Main/Main'

const App = () => {

  return (
    <div className='App'>
      <Header />
      <main className='main-container'>
        <Main />
      </main>
    </div>

  )
}


export default App;
