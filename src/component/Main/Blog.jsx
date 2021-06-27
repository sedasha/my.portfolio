import React, { Component } from 'react';
import BlogComponent from '../Mini_comp/BlogComponent';
import "./Blog.css"

class Blog extends Component {
    state = {  }
    render() {
        return (
            <div className='Blog'>
                <BlogComponent />
                <BlogComponent />
                <BlogComponent />
                <BlogComponent />



            </div>
        );
    }
}

export default Blog;