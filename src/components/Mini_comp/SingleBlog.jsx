import './BlogComponent.css';
import React, { useEffect }  from 'react'
import { useState } from 'react';
import axios from 'axios';


function SingleBlog(props) {
   console.log(props)
   const [data, setData] = useState({})
   const {  heading, text, photo, date, id }= props
   console.log(props)
//    useEffect(()=>{
//     axios.get("https://jsonplaceholder.typicode.com/photos/"+id)
//         .then(result => {
//             setData(result.data)
//         })
//     }, [])
   
    return (
        <div className='MiniBlog'>
            <img src={data.url} className="image" alt="" />
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

export default SingleBlog

