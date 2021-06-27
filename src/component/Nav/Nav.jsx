import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';


class Nav extends Component {
    constructor(props){
        super(props)
        this.state={
            active: "active"
        }
    }
    Active =(event)=>{
        let li = document.querySelectorAll("a");
        li.forEach(el=>{
        
            el.classList.remove(this.state.active);
        })
        this.setState({active: "active"})
        event.target.classList.add(this.state.active);

    }

    render() {

        return (
                <div className="Nav">
                    <ul className="ul">
                        <li onClick={this.Active}><Link className={window.location.pathname==="/"?"active":" "} to="/">About</Link></li>
                        <li onClick={this.Active}><Link className={window.location.pathname==="/portfolio"?"active":" "} to="/portfolio">Portfolio</Link></li>
                        <li onClick={this.Active}><Link className={window.location.pathname==="/skills"?"active":" "} to="/skills">Skills</Link></li>
                        <li onClick={this.Active}><Link className={window.location.pathname==="/blog"?"active":" "} to="/blog">Blog</Link></li>
                    </ul>
                    
                </div>
        );
    }
}

export default Nav;