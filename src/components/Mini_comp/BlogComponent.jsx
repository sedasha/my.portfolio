import React, { useState } from 'react';
import './BlogComponent.css';
import { BrowserRouter as Router, Link } from "react-router-dom";


function BlogComponent({ heading, text, photo, date }) {

    return (
        <div className='MiniBlog'>
            <Link to={'/blog_content'}>
                <img src={photo} className="image" alt="" />
                <h3> {heading}</h3>
                <div className='text'>
                    <p className='wide'>
                        {text}
                    </p>
                </div>
                <div className='date'>{date}</div>

            </Link>
        </div>
    )
}

export default BlogComponent


