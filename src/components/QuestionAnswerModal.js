import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    .pic-holder {
        /* width: 100%; */
        /* object-fit: cover; */
        /* width: 100px; */
    }
    .img-pic {
        width: 50%;
    }
`

export default class QuestionAnswerModal extends Component {
    state = {
        viewMore: false,
    }

    triggerViewMorePrices = () => {
        this.setState((state, props) => {
            return ({ viewMore: !state.viewMore })
        })
    }
    
    render() {
        return (
            <Wrapper>
                <h1>{this.props.info.title}</h1>
                <div className="pic-holder">
                    <img className="img-pic" src={this.props.info.pic} alt="skydive pic"></img>
                </div>
                {
                    this.state.viewMore ?
                        <div className="full-list-questions">
                            <div className="question-answer">
                                <h2>{this.props.info.q1}</h2>
                                <p>{this.props.info.a1}</p>
                            </div>
                            <div className="question-answer">
                                <h2>{this.props.info.q2}</h2>
                                <p>{this.props.info.a2}</p>
                            </div>
                            <div className="question-answer">
                                <h2>{this.props.info.q3}</h2>
                                <p>{this.props.info.a3}</p>
                            </div>
                            <div className="question-answer">
                                <h2>{this.props.info.q4}</h2>
                                <p>{this.props.info.a4}</p>
                            </div>
                            <div className="question-answer">
                                <h2>{this.props.info.q5}</h2>
                                <p>{this.props.info.a5}</p>
                            </div>
                            <p onClick={this.triggerViewMorePrices} className="view-more-prices">Click to view fewer prices</p>
                        </div>
                        :
                        <div className="two-questions">
                            <div className="question-answer">
                                <h2>{this.props.info.q1}</h2>
                                <p>{this.props.info.a1}</p>
                            </div>
                            <div className="question-answer">
                                <h2>{this.props.info.q2}</h2>
                                <p>{this.props.info.a2}</p>
                            </div>
                            <p onClick={this.triggerViewMorePrices} className="view-more-prices">Click to view more prices</p>
                        </div>
                }
            </Wrapper>
        )
    }
}
