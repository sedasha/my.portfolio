import React, { useState, useEffect } from 'react';
import BlogComponent from '../Mini_comp/BlogComponent';
import SingleBlog from '../Mini_comp/SingleBlog';
import "./Blog.css"
import axios from 'axios';
import { Route } from 'react-router-dom';
// import _uniqueId from 'lodash/uniqueId'
import blog1 from '../../Image/blog1.jpg'
import blog2 from '../../Image/blog2.jpg'
import blog3 from '../../Image/blog3.jpg'
import blog4 from '../../Image/blog4.jpg'
import blog5 from '../../Image/blog5.jpg'
import blog6 from '../../Image/blog6.jpg'


function Blog() {
    const [data, setData] = useState([])
    const [list] = useState([
        { id: 1, heading: "Roses", photo: blog1, date:"06.25.2021", text: " standard dummy text ever since the 1500s,whe anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { id: 2, heading: "Roses", photo: blog2, date:"06.25.2021", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" },
        { id: 3, heading: "Roses", photo: blog3, date:"06.25.2021", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" },
        { id: 4, heading: "Roses", photo: blog4, date:"06.25.2021", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" },
        { id: 5, heading: "Roses", photo: blog5, date:"06.25.2021", text: " standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { id: 6, heading: "Roses", photo: blog6, date:"06.25.2021", text: "Lorem Ipsum is simply dummy  text of the prin00s, when an unknown printer took a gating and typesetting industry. Lorem Ipsum has been the industry's" },

    ])
    useEffect(()=>{
            axios.get("https://jsonplaceholder.typicode.com/photos")
                .then(result => {
                    setData(result.data)
                    // dispatchEvent({type: "photos", payload: result.data})
                })
            }, [])
            console.log(data)
    return (
      
        <div className='Blog'>
            {data.map((e, ind) => {
                return (
                    <BlogComponent key={ind} heading={e.title} text={e.title} photo={e.url} id={e.id}/>)
            })}
             
        </div>
     
    )
}

export default Blog

