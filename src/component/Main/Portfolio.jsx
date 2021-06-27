import React, { Component } from 'react';
import "./Portfolio.css"
import Frame from '../Mini_comp/Frame';
import Matson from "../../Image/2.png";
import Calculator from "../../Image/3.png";
import n4 from "../../Image/4.png";
import n6 from "../../Image/6.png";
import n7 from "../../Image/7.png";





let arrFrame = [
    {
        frametitle:"Matson Adams musician",
        frameimage: Matson,
        width: "380px",
        height: "270px",
        link: 'https://sedasha.github.io/Matsonadamsmusic.github.io/',        
    },
    {
        frametitle:"Investment Calculator",
        frameimage: Calculator,
        width: "320px",
        height: "230px",
        link: 'https://sedasha.github.io/dividend-calculator.githup.io/#pop',
        
    },
    {
        width: "480px",
        height: '300px',
    }

]


class Portfolio extends Component {
    state = {  }
    render() {
        return (
            <div className="Portfolio">
                  
                    <Frame frametitle= {arrFrame[0].frametitle} frameimage={arrFrame[0].frameimage} width={arrFrame[0].width} height={arrFrame[0].height} link={arrFrame[0].link} />
                     <Frame frameimage={n7} height={arrFrame[2].height} />
                    <Frame frameimage={n4} />
                    <Frame frametitle= {arrFrame[1].frametitle} frameimage={arrFrame[1].frameimage} width={arrFrame[1].width} height={arrFrame[1].height} self={"flex-start"} link={arrFrame[1].link}/>
                    <Frame frameimage={n6} width={arrFrame[2].width} height={arrFrame[0].height}/>
            </div>
        );
    }
}

export default Portfolio;