import React from 'react';
import Nav from '../Nav/Nav';
import './Header.css';
import '../../Media.css';
import Contact from '../Contact/Contact';

function Header() {
    return (
        <div className="header">
            <div className="profile">
                <div className="profileCircle">
                </div>
                <div>
                    <h1>Seda Adams</h1>
                    <h2>Front End Developer</h2>
                </div>
            </div>
            <Nav />
            <Contact />
        </div>
    )
}
export default Header;

