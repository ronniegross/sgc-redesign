import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import TandemSkydive from './TandemSkydive.js'
import StaticLineSkydive from './StaticLineSkydive.js'

const Wrapper = styled.div`
    display: flex; 
    flex-direction: column;
    .first-time-skydive-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .skydive-info-box {
        margin: 30px;
        /* background-color: pink; */
        padding: 30px;
        background-color: white;
        /* width: 260px; */
        /* height: 150px; */
        border-radius: 5px;
        /* border: 1px solid #888888; */
        /* box-shadow: 2px 2px #888888; */
        box-shadow: 1px 1px 2px 2px #DEDEDE;
    }
`

export default class FirstTimeJumpers extends Component {
    render() {
        return (
            <Wrapper>
                <h1>First Time Jumpers</h1>
                <div className="first-time-skydive-container">
                    <div className="tandem-skydive skydive-info-box">
                        <TandemSkydive />
                    </div>
                    <div className="static-line-skydive skydive-info-box">
                        <StaticLineSkydive />
                    </div>
                </div>
            </Wrapper>
        )
    }
}
