import './BlogComponent.css';
import React from 'react'

function SingleBlog({ heading, text, photo, date }) {

    return (
        <div className='MiniBlog'>
            <img src={photo} className="image" alt="" />
            <h3> {heading}</h3>
            <div className='text'>
                <p className='wide'>
                    {text}
                </p>
            </div>
            <div className='date'>{date}</div>
        </div>
    )
}

export default SingleBlog

