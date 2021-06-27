import React, { Component } from 'react';
import './Contact.css';
import '../../Media.css';



class Contact extends Component {
    state = { 
        link1:'https://www.linkedin.com/in/seda-adams/',
        link2: 'https://github.com/sedasha',
        link3: 'https://www.facebook.com/seda.shahgyaldyan/',
        link4: '',
     }
   
    render() {
        return (
            <div>
                 <p className='GetTouch'>Get in touch with me at</p>
                 <div className='Seda_info'>
                     <p className ='Seda'> Seda Adams</p>
                    <p className ='Developer'>Front End Developer</p>
                 </div>
                 <div className="Icons">
                     <a href={this.state.link1} target='blank'>
                         <div className="div1"></div>
                    </a>
                     <a href={this.state.link2} target='blank'>
                         <div className="div2"></div>
                    </a>
                    <a href={this.state.link3} target='blank'>
                        <div className="div3"></div>
                    </a>
                        <div className="div4"></div>
                 </div>
            </div>
        );
    }
}

export default Contact;
