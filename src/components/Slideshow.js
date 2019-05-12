import React, { Component } from 'react'
import { Slide } from 'react-slideshow-image';
import styled from 'styled-components'

const Wrapper = styled.div`
    .slide-container {
        width: 70%;
        margin: auto; 
    }

    h3 {
        text-align: center; 
    }

    .each-slide {
        margin: 0 auto;
        /* height: 700px; */
        /* background-color: pink; */
        /* display: flex; */
        /* align-content: center; */
        justify-content: center;
    }

    .each-slide > div {
        display: flex;
        align-items: center;
        justify-content: center;
        /* background-size: cover; */
        height: 700px;
        background-size: contain;
        /* background-size: contain; */
        background-repeat: no-repeat;
        /* background-size: 100%; */
    }

    /* .each-slide span {
        padding: 20px;
        font-size: 20px;
        background: #efefef;
        text-align: center;
    } */

    .each-fade {
        display: flex;
    }

    .each-fade .image-container {
        width: 75%;
        overflow: hidden;
    }

    .each-fade .image-container img {
        width: 100%;
    }

    .each-fade h2 {
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        background: #adceed;
    }
`

const slideImages = [
    'https://i.pinimg.com/originals/d6/ce/ed/d6ceede36d17c474de6cc9dca7d6db54.jpg',
    'https://public-media.si-cdn.com/filer/keech.jpg',
    'http://www.chandymuseum.com/communities/6/004/012/700/256//images/4627213442.jpg'
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false
}

export default class Slideshow extends Component {
    render() {
        return (
            <Wrapper>
                <div>
                    <Slide {...properties}>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                                {/* <span>Slide 1</span> */}
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                                {/* <span>Slide 2</span> */}
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                                {/* <span>Slide 3</span> */}
                            </div>
                        </div>
                    </Slide>
                </div>
            </Wrapper>
        )
    }
}




// const Slideshow = () => {
//     return (

//     )
// }