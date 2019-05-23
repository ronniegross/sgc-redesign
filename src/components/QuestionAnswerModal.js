import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    .pic-holder {
        width: 100%;
        /* object-fit: cover; */
        /* width: 100px; */
    }
    /* .img-pic {
        width: 50%;
    } */
`

const Pic = styled.img`
    width: 500px;
    height: 300px;
    object-fit: cover;
    @media (max-width: 1200px) {
        width: 400px;
        height: 300px;
    }
    @media (max-width: 1140px) {
        width: 350px;
        height: 300px;
    }
    @media (max-width: 900px) {
        width: 300px;
        height: 275px;
    }
    @media (max-width: 800px) {
        width: 250px;
        height: 225px;
    }
    @media (max-width: 700px) {
        width: 400px;
        height: 300px;
    }
    @media (max-width: 400px) {
        width: 230px;
        height: 150px;
        /* margin: 0 100px 0 0; */
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
                    <Pic className="img-pic" src={this.props.info.pic} alt="skydive pic"></Pic>
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
