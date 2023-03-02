import React from "react"
import './Header.css'
import icon from '../../images/beer_icon.png'

const Header = () => {
    return (
        <div className="header">
            <img className='logo' src={icon} alt='beer-icon-logo' />
            <h1>Bierfinder</h1>
        </div>
    )
}

export default Header;