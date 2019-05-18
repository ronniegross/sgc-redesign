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
        margin-bottom: 15px;
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
