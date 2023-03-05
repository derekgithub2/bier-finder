import React from "react"
import './Header.css'
import icon from '../../images/beer_icon.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <Link to='/' className="home-button">
                <img className='logo' src={icon} alt='beer-icon-logo' />
            </Link>
            <h1>Bierfinder</h1>
        </div>
    )
}

export default Header;