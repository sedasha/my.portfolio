import React, { Component } from 'react';
import './Skills.css';


class Resume extends Component {
    state = {  }
    render() {
        return (
            <div className="Skills">
                <div className="skills_ul_div">
                    <h3 className="skills_header">Skills</h3>
                <ul className="skills_ul">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Github</li>
                    <li>Bootstrap</li>
                    <li>And more...</li>

                </ul>
                </div>
            </div>
        );
    }
}

export default Resume;