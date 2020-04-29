import React from 'react'
const NavBar = ({ toggleTheme }) => {
    return (
        <header>
            <h2>Where in the world?</h2>
            <p className="dark_mode" onClick={toggleTheme}><i className="far fa-moon"></i> Dark Mode</p>
        </header>
    )
}

export default NavBar;
