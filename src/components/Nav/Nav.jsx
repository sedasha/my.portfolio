import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    const [state, setState] = useState({ active: "active" })
    const active = (event) => {
        let li = document.querySelectorAll("a");
        li.forEach(el => {
            el.classList.remove(state.active);
        })
        setState({ active: "active" })
        event.target.classList.add(state.active);
    }
    return (
        <div className="Nav">
            <ul className="ul">
                <li onClick={active}><Link className={window.location.pathname === "/" ? "active" : " "} to="/">About</Link></li>
                <li onClick={active}><Link className={window.location.pathname === "/portfolio" ? "active" : " "} to="/portfolio">Portfolio</Link></li>
                <li onClick={active}><Link className={window.location.pathname === "/skills" ? "active" : " "} to="/skills">Skills</Link></li>
                <li onClick={active}><Link className={window.location.pathname === "/blog" ? "active" : " "} to="/blog">Blog</Link></li>
            </ul>

        </div>
    );
}

export default Nav
