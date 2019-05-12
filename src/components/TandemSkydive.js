import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    .tandem-pic {
        /* width: 200px;
        height: 140px; */
        width: 100%;
    }
    .pic-holder {
        /* background-color: blue; */
        margin: 30px;
    }
`


export default class TandemSkydive extends Component {
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
                <h1>Tandem Skydive</h1>
                <div className="pic-holder">
                    <img className="tandem-pic" src="https://skydiveparacletexp.com/wp-content/uploads/2016/11/DSC04180.jpg" alt="tandem skydive"></img>
                </div>
                {
                    this.state.viewMore ?
                        <div className="">
                            <div className="question-answer">
                                <h2>What is a tandem skydive?</h2>
                                <p>Marfa VHS chicharrones ugh tumeric. Knausgaard irony slow</p>
                            </div>
                            <div className="question-answer">
                                <h2>Tandem skydive price</h2>
                                <p>$XXX</p>
                            </div>
                            <div className="question-answer">
                                <h2>Tandem skydive price2</h2>
                                <p>$XXX</p>
                            </div>
                            <div className="question-answer">
                                <h2>Tandem skydive price3</h2>
                                <p>$XXX</p>
                            </div>
                            <div className="question-answer">
                                <h2>Tandem skydive price4</h2>
                                <p>$XXX</p>
                            </div>
                            <p onClick={this.triggerViewMorePrices} className="view-more-prices">Click to view fewer prices</p>
                        </div>
                        :
                        <div className="two-questions">
                            <div className="question-answer">
                                <h2>What is a tandem skydive?</h2>
                                <p>Marfa VHS chicharrones ugh tumeric. Knausgaard irony slow</p>
                            </div>
                            <div className="question-answer">
                                <h2>Tandem skydive price</h2>
                                <p>$XXX</p>
                            </div>
                            <p onClick={this.triggerViewMorePrices} className="view-more-prices">Click to view more prices</p>
                        </div>
                }
            </Wrapper>
        )
    }
}
