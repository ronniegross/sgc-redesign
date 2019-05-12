import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    .quick-link-box-container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .quick-link-box {
        /* background-color: pink; */
        background-color: white;
        width: 260px;
        height: 150px;
        border-radius: 5px;
        /* border: 1px solid #888888; */
        /* box-shadow: 2px 2px #888888; */
        box-shadow: 1px 1px 2px 2px #DEDEDE;
    }
`

export default class About extends Component {
    render() {
        return (
            <Wrapper>
                <div>
                    <h1>Thinking about making your first skydive? Check out our quick links to learn more!</h1>
                    <div className="quick-link-box-container">
                        <div className="tandem-program quick-link-box">

                        </div>
                        <div className="staff quick-link-box">

                        </div>
                        <div className="static-line-program quick-link-box">

                        </div>
                    </div>
                    <h1>The legend of Skydive Greene County</h1>
                </div>
            </Wrapper>
        )
    }
}
