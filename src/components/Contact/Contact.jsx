import React, { useState } from 'react'
import github from '../../Image/github.png'
import linkedin from '../../Image/linkedin.png'
import facebook from '../../Image/facebook.png'
import yahoo from '../../Image/yahoo.png'


import './Contact.css';
import '../../Media.css';


function Contact() {
    const [state] = useState([
        { link: 'https://www.linkedin.com/in/seda-adams/', bgimage: linkedin },
        { link: 'https://github.com/sedasha', bgimage: github },
        { link: 'https://www.facebook.com/seda.shahgyaldyan/', bgimage: facebook },
        {link: 'https://www.linkedin.com/in/seda-adams/',bgimage: yahoo}
    ])
    return (
        <div>
            <div>
                <p className="GetTouch">Get in touch with me at</p>
                <div className='Seda_info'>
                    <p className='Seda'> Seda Adams</p>
                    <p className='Developer'>Front End Developer</p>
                </div>
                <div className="Icons">
                    {state.map(e =>
                        <a href={e.link} target='blank'>
                            <div style={{backgroundImage: `url(${e.bgimage})`}} ></div>
                        </a>)}
                </div>
            </div>
        </div>
    )
}

export default Contact
