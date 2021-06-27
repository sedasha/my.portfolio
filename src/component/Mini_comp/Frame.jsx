import React, { Component } from 'react';
import "./Frame.css";


class Frame extends Component {
    state = {  }
    render() {
        return (
            <div className="Frame" style={{width:this.props.width, height:this.props.height,alignSelf:this.props.self}}>
                
                <h3>{this.props.frametitle}</h3>
                <a href={this.props.link} target="blank"> 
                <img src={this.props.frameimage} alt=''/>
                </a>               

            </div>
            
        );
    }
}
Frame.defaultProps={
    width: "160px",
    height: "170px",
    // marginTop: '0px',
}
export default Frame;