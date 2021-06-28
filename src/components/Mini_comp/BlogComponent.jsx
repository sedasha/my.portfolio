import React, { useState } from 'react';
import './BlogComponent.css';
import {useHistory} from 'react-router-dom';

import SingleBlog from './SingleBlog';


function BlogComponent({ heading, text, photo, id}) {
    const history = useHistory()
    const changeLink =()=>{
        history.push(`/blog/${id}`)
    }
    return (
        <div className='MiniBlog' onClick={changeLink}>
           
         
                <img src={photo} className="image" alt="" />
                <h3> {heading}</h3>
                <div className='text'>
                    <p className='wide'>
                        {text}
                    </p>
                </div>
                <div className='date'></div>
       
        </div>

    )
}

export default BlogComponent


