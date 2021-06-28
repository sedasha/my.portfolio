import React from 'react';
import './Contain.css';
import '../../Media.css';
import Portfolio from '../Main/Portfolio';
import About from '../Main/About';
import Skills from '../Main/Skills';
import Blog from '../Main/Blog';
import { Route } from 'react-router-dom';
import SingleBlog from '../Mini_comp/SingleBlog';


function Contain() {
    return (
        <div className="Contain">
            <Route path='/' exact><About /> </Route>
            <Route path='/skills'><Skills /> </Route>
            <Route path='/portfolio'><Portfolio /> </Route>
            <Route path='/blog'> <Blog /> </Route>
            <Route path={`/blog/:contain`}> <SingleBlog /></Route>
            
        </div>
    )
}

export default Contain;

