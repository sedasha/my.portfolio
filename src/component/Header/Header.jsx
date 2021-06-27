import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './Header.css';
import '../../Media.css';
import Contact from '../Contact/Contact';

class Header extends Component {
    state = {  }
    render() {
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
        );
    }
}

export default Header;