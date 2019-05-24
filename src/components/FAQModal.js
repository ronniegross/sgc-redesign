import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin: 30px;
    padding: 30px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 1px 1px 2px 2px #DEDEDE;
    h1 {
        text-align: start;
        margin-bottom: 10px;
    }
    h3 {
        text-decoration: underline;
        text-align: start;
        margin: 10px 0 10px 0;
    }
`

export default class FAQModal extends Component {
    render() {
        return (
            <Wrapper>
                <h1>{this.props.info.title}</h1>
                <h3>{this.props.info.q1}</h3>
                <h3>{this.props.info.q2}</h3>
                <h3>{this.props.info.q3}</h3>
                <h3>{this.props.info.q4}</h3>
                <h3>{this.props.info.q5}</h3>
                <h3>{this.props.info.q6}</h3>
                <h3>{this.props.info.q7}</h3>
                <h3>{this.props.info.q8}</h3>
            </Wrapper>
        )
    }
}
