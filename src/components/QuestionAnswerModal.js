import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    .pic-holder {
        width: 100%;
        /* object-fit: cover; */
        /* width: 100px; */
        /* width: 90%;
        background-color: blue; */
    }
    /* .img-pic {
        width: 50%;
    } */
    h2 {
        margin-top: 20px;
    }
    p {
        margin: 4px 0 20px 0;
        max-width: 600px;
    }
    h1 {
        margin-bottom: 10px;
    }
    .view-more-prices {
        margin-top: 15px;

    }
    .price-question {
        display: inline;
    }
    /* .question-answer {
        max-width: 600px;
    } */
    .view-more {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center
    }
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
    @media (max-width: 420px) {
        width: 270px;
        height: 150px;
        /* margin: 0 100px 0 0; */
    }
    @media (max-width: 330px) {
        width: 220px;
        height: 150px;
    }
`

const BigPic = styled.img`
    width: 1125px;
    height: 400px;
    object-fit: cover;
    @media (max-width: 1200px) {
        width: 1000px;
        height: 400px;
    }
    @media (max-width: 1100px) {
        width: 800px;
        height: 400px;
    }
    @media (max-width: 900px) {
        width: 650px;
        height: 400px;
    }
    @media (max-width: 750px) {
        width: 550px;
        height: 400px;
    }
    @media (max-width: 700px) {
        width: 400px;
        height: 300px;
    }
    @media (max-width: 420px) {
        width: 270px;
        height: 150px;
        /* margin: 0 100px 0 0; */
    }
    @media (max-width: 330px) {
        width: 220px;
        height: 150px;
    }
`

// const Pic = styled.img`
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     /* @media (max-width: 1200px) {
//         width: 400px;
//         height: 300px;
//     }
//     @media (max-width: 1140px) {
//         width: 350px;
//         height: 300px;
//     }
//     @media (max-width: 900px) {
//         width: 300px;
//         height: 275px;
//     }
//     @media (max-width: 800px) {
//         width: 250px;
//         height: 225px;
//     }
//     @media (max-width: 700px) {
//         width: 400px;
//         height: 300px;
//     }
//     @media (max-width: 400px) {
//         width: 230px;
//         height: 150px;
//         /* margin: 0 100px 0 0; */
//     } */
// `

export default class QuestionAnswerModal extends Component {
    state = {
        viewMore: false,
        bigTile: false,
        pricing: false
    }

    triggerViewMorePrices = () => {
        this.setState((state, props) => {
            return ({ viewMore: !state.viewMore })
        })
    }

    componentDidMount = () => {
        this.setState({ bigTile: this.props.info.bigTile })
    }

    render() {
        return (
            <Wrapper>
                <h1>{this.props.info.title}</h1>
                {
                    this.state.bigTile ?
                        <div className="pic-holder">
                            <BigPic className="img-pic" src={this.props.info.pic} alt="skydive pic"></BigPic>
                        </div>
                        :
                        <div className="pic-holder">
                            <Pic className="img-pic" src={this.props.info.pic} alt="skydive pic"></Pic>
                        </div>
                }
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
                            <div className="question-answer">
                                <h2>{this.props.info.q6}</h2>
                                <p>{this.props.info.a6}</p>
                            </div>
                            <div className="question-answer">
                                <h2>{this.props.info.q7}</h2>
                                <p>{this.props.info.a7}</p>
                            </div>
                            <div className="question-answer">
                                <h2>{this.props.info.q8}</h2>
                                <p>{this.props.info.a8}</p>
                            </div>
                            <div className="question-answer">
                                <h2>{this.props.info.q9}</h2>
                                <p>{this.props.info.a9}</p>
                            </div>
                            <div className="question-answer">
                                <h2>{this.props.info.q10}</h2>
                                <p>{this.props.info.a10}</p>
                            </div>
                            <div className="question-answer">
                                <h2>{this.props.info.q11}</h2>
                                <p>{this.props.info.a11}</p>
                            </div>
                            <div className="question-answer">
                                <h2>{this.props.info.q12}</h2>
                                <p>{this.props.info.a12}</p>
                            </div>
                            <div className="view-more">
                                <p onClick={this.triggerViewMorePrices} className="view-more-prices">Click to view less
                                {/* {this.props.info.pricing ?
                                    <p className="price-question"> prices</p>
                                    : <p className="price-question"> questions</p>
                                } */}
                                </p>
                            </div>
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
                            <div className="view-more">
                                <p onClick={this.triggerViewMorePrices} className="view-more-prices">Click to view more
                            {/* {this.props.info.pricing ?
                                    <p className="price-question"> prices</p>
                                    : <p className="price-question"> questions</p>
                            } */}
                                </p>
                            </div>
                        </div>
                }
            </Wrapper>
        )
    }
}
