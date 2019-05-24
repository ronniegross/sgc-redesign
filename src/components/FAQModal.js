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
        color: #2A6523;
    }
    h3 {
        /* text-decoration: underline; */
        text-align: start;
        margin: 10px 0 10px 0;
        cursor: pointer;
    }
`



export default class FAQModal extends Component {

    render() {
        // let qArr = this.props.info
        return (
            <Wrapper>
                <h1>{this.props.info.title}</h1>
                {/* {
                    qArr.map(question => (
                        <h3>{question}</h3>
                    ))
                } */}
                <h3>{this.props.info.q1}</h3>
                <h3>{this.props.info.q2}</h3>
                <h3>{this.props.info.q3}</h3>
                <h3>{this.props.info.q4}</h3>
                <h3>{this.props.info.q5}</h3>
                <h3>{this.props.info.q6}</h3>
                <h3>{this.props.info.q7}</h3>
                <h3>{this.props.info.q8}</h3>
                <h3>{this.props.info.q9}</h3>
                <h3>{this.props.info.q10}</h3>
                <h3>{this.props.info.q11}</h3>
                <h3>{this.props.info.q12}</h3>
                <h3>{this.props.info.q13}</h3>
                <h3>{this.props.info.q14}</h3>
                <h3>{this.props.info.q15}</h3>
                <h3>{this.props.info.q16}</h3>
                <h3>{this.props.info.q17}</h3>
                <h3>{this.props.info.q18}</h3>
                <h3>{this.props.info.q19}</h3>
                <h3>{this.props.info.q20}</h3>
                <h3>{this.props.info.q21}</h3>
                <h3>{this.props.info.q22}</h3>
                <h3>{this.props.info.q23}</h3>
                <h3>{this.props.info.q24}</h3>
                <h3>{this.props.info.q25}</h3>
                <h3>{this.props.info.q26}</h3>
                <h3>{this.props.info.q27}</h3>
                <h3>{this.props.info.q28}</h3>
                <h3>{this.props.info.q29}</h3>
                <h3>{this.props.info.q30}</h3>
            </Wrapper>
        )
    }
}
