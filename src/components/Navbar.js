import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
    /* display: flex;
    flex-direction: row; */
    /* justify-content: space-around; */
    ul {
        margin: 0 0 30px 0;
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
        padding: 10px;
        cursor: pointer;
    }
`

export default class Navbar extends Component {
    render() {
        return (
            <Wrapper>
                <div>
                    <ul>
                        <li><Link to={'/'}></Link>About</li>
                        <li><Link to={'/firsttimejumpers'}></Link>First Time Jumpers</li>
                        <li><Link to={'/experiencedjumpers'}></Link>Experienced Jumpers</li>
                        <li><Link to={'/pricing'}></Link>Pricing</li>
                        <li><Link to={'/FAQs'}></Link>FAQs</li>
                        <li><Link to={'/bookaskydive'}></Link>Book a Skydive</li>
                        <li><Link to={'/contact'}></Link>Contact</li>
                    </ul>
                </div>
            </Wrapper>
        )
    }
}
