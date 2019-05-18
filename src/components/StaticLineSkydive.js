import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    .static-line-pic {
        /* width: 200px; */
        /* height: 140px; */
        /* width: 100%; */
        /* object-fit: cover;
        object-fit: contain; */
        /* width: 500px;
        height: 350px;
        object-fit: cover; */
        width: 100%;
        height: auto;
    }
    .pic-holder {
        /* background-color: blue; */
        /* margin: 30px; */
    }
    img {
        /* width: 500px;
        height: 350px;
        object-fit: cover; */
        width: 100%;
        
    }
`


export default class StaticLineSkydive extends Component {
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
                <h1>Static Line Skydive</h1>
                <div className="pic-holder">
                    <img className="static-line-pic" src="http://www.skydiveparys.co.za/images/site/static-line-main-image-main.jpg" alt="static line skydive"></img>
                </div>
                {
                    this.state.viewMore ?
                        <div className="">
                            <div className="question-answer">
                                <h2>What is a static line skydive?</h2>
                                <p>Marfa VHS chicharrones ugh tumeric. Knausgaard irony slow</p>
                            </div>
                            <div className="question-answer">
                                <h2>Static line skydive price</h2>
                                <p>$XXX</p>
                            </div>
                            <div className="question-answer">
                                <h2>Static line skydive price2</h2>
                                <p>$XXX</p>
                            </div>
                            <div className="question-answer">
                                <h2>Static line skydive price3</h2>
                                <p>$XXX</p>
                            </div>
                            <div className="question-answer">
                                <h2>Static line skydive price4</h2>
                                <p>$XXX</p>
                            </div>
                            <p onClick={this.triggerViewMorePrices} className="view-more-prices">Click to view fewer prices</p>
                        </div>
                        :
                        <div className="two-questions">
                            <div className="question-answer">
                                <h2>What is a static line skydive?</h2>
                                <p>Marfa VHS chicharrones ugh tumeric. Knausgaard irony slow</p>
                            </div>
                            <div className="question-answer">
                                <h2>Static line skydive price</h2>
                                <p>$XXX</p>
                            </div>
                            <p onClick={this.triggerViewMorePrices} className="view-more-prices">Click to view more prices</p>
                        </div>
                }
            </Wrapper>
        )
    }
}
