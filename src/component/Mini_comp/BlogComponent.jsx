import React, { Component } from 'react';
import './BlogComponent.css';
import down from '../../Image/down-arrow.png';
// import up from '../../Image/up-arrow.png';


// let propObj = {
//     title: this.props.title,
//     text: this.props.text
// }
class BlogComponent extends Component {
    state = { 
        wide: "wide"
     }
     wide=(ev)=>{
         let wide= document.querySelectorAll('text');
         wide.forEach(el => {
             el.classList.remove(this.state.wide)
         });
         this.setState({wide:'wide'})
         ev.target.classList.add(this.state.wide)
         let text = document.querySelectorAll('text')
     }



    render() {
        
        return (
            <div className='MiniBlog'>
                <h3> Roses</h3>
                <div className='text'>
                    <p className='wide'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div className='date'>01.02.05</div>
                    <img onClick={this.wide} src={down} alt=''></img>
                </div>

            </div>
            
        );
    }
}

export default BlogComponent;