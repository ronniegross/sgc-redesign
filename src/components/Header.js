import React, { Component } from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
    /* img {
        height: 100px;
        width: 100%;
        margin: 0;
        object-fit: cover;
    }  */
    .header-container {
        margin: 0;
        padding: 0;
    }
    /* img .header-container {
        height: 100px;
    } */
    /* img .header-pic {
        width: 100%;
        object-fit: cover;
        height: 400px;
    } */
    .sticky {
        position: fixed;
        top: 0;
        width: 100%;
    }
`

const StyledImage = styled.img`
    width: 100%;
    object-fit: cover;
    height: 450px;
    margin: -3px;
    padding: 0;
`

const Img = styled.img`
    position: absolute;
    z-index: 1;
    width: 350px;
    left: 10px;
    top: 10px;
    @media (max-width: 700px) {
        width: 200px;
        left: 10px;
        top: 10px;
    }
    @media (max-width: 475px) {
        width: 150px;
        left: 10px;
        top: 10px;
    }
`

export default class Header extends Component {

    render() {
        return (
            <div className="header-container">
                {/* <img className="header-pic" src="https://www.skydiveorange.com/wp-content/uploads/Tandem-Skydiving-Gift-Certificate-Skydive-Orange.jpg" alt="header-gif"></img> */}
                {/* <Img className="SGCpng" src="https://i.imgur.com/tgBW84G.png" alt="sgc png"></Img> */}
                <Img className="sgc-overlay" src="https://i.imgur.com/RAsQWT1.png" alt="sgc png"></Img>
                <StyledImage className="header-pic" src="https://i.imgur.com/dJWGdt3.jpg" alt="header-gif"></StyledImage>
            </div>
        )
    }
}
