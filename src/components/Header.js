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

export default class Header extends Component {

    render() {
        return (
            <div className="header-container">
                {/* <img className="header-pic" src="https://www.skydiveorange.com/wp-content/uploads/Tandem-Skydiving-Gift-Certificate-Skydive-Orange.jpg" alt="header-gif"></img> */}
                <StyledImage className="header-pic" src="https://i.imgur.com/dJWGdt3.jpg" alt="header-gif"></StyledImage>
            </div>
        )
    }
}
