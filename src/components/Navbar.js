import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
    /* display: flex;
    flex-direction: row; */
    /* justify-content: space-around; */
    ul {
        margin-bottom: 30px;
        padding: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        background-color: #2A6523;
        height: 75px;
    }
    li {
        /* background-color: pink; */
        font-family: "HelveticaNeue-CondensedBold", "Helvetica Neue";
        font-size: 20px;
        color: white;
    }
`

export default class Navbar extends Component {
    render() {
        return (
            <Wrapper>
                <div>
                    <ul>
                        <li>About</li>
                        <li>First Time Jumpers</li>
                        <li>Experienced Jumpers</li>
                        <li>Pricing</li>
                        <li>FAQs</li>
                        <li>Book a Skydive</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </Wrapper>
        )
    }
}
