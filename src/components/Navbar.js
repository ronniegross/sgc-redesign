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
    a {
        /* background-color: pink; */
        font-family: "HelveticaNeue-CondensedBold", "Helvetica Neue";
        font-size: 20px;
        color: white;
        padding: 10px;
        cursor: pointer;
        text-decoration: none;
    }
    li {
        padding: 10px;
    }
    .nav-button {
        border: 2px white solid;
        border-radius: 5px;
    }
`

export default class Navbar extends Component {
    render() {
        return (
            <Wrapper>
                <div>
                    <ul>
                        <li><Link to={'/'}>About</Link></li>
                        <li><Link to={'/firsttimejumpers'}>First Time Jumpers</Link></li>
                        <li><Link to={'/experiencedjumpers'}>Experienced Jumpers</Link></li>
                        <li><Link to={'/pricing'}>Pricing</Link></li>
                        <li><Link to={'/FAQs'}>FAQs</Link></li>
                        <li className="nav-button"><Link to={'/bookaskydive'}>Book a Skydive</Link></li>
                        <li className="nav-button"><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                </div>
            </Wrapper>
        )
    }
}
