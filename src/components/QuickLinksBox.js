import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    .quick-link-box {
        background-color: white;
        width: 260px;
        height: 125px;
        border-radius: 5px;
        box-shadow: 1px 1px 2px 2px #DEDEDE;
        margin: 10px;
    }
    p {
        margin: 0 20px 20px 20px;
    }
    h1 {
        margin-bottom: 10px;
        color: #2A6523;
    }
    @media (max-width: 850px) {
        .quick-link-box {
            width: 200px;
            height: 150px;
        }
    }
    @media (max-width: 700px) {
        .quick-link-box {
            width: 260px;
            height: 125px;
        }
    }
`

export default class QuickLinksBox extends Component {
    render() {
        return (
            <Wrapper>
                <div className="quick-link-box">
                    <h1 className="quick-link-title">{this.props.quickLink.title}</h1>
                    <p className="quick-link-info">{this.props.quickLink.info}</p>
                </div>
            </Wrapper>
        )
    }
}
