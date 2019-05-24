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
        margin-top: 10px;
    }
    p {
        margin-top: 4px;
    }
    h1 {
        margin-bottom: 10px;
    }
    .view-more-prices {
        margin-top: 15px;
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
    @media (max-width: 400px) {
        width: 230px;
        height: 150px;
        /* margin: 0 100px 0 0; */
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
    @media (max-width: 400px) {
        width: 230px;
        height: 150px;
        /* margin: 0 100px 0 0; */
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
        bigTile: false
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
                            <p onClick={this.triggerViewMorePrices} className="view-more-prices">Click to view fewer questions</p>
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
                            <p onClick={this.triggerViewMorePrices} className="view-more-prices">Click to view more questions</p>
                        </div>
                }
            </Wrapper>
        )
    }
}
