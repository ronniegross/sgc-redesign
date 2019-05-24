import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import TandemSkydive from './TandemSkydive.js'
import StaticLineSkydive from './StaticLineSkydive.js'
import Staff from './Staff.js'
import QuestionAnswerModal from './QuestionAnswerModal.js'

const Wrapper = styled.div`
    display: flex; 
    flex-direction: column;
    .first-time-skydive-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .skydive-info-box {
        margin: 30px;
        padding: 30px;
        background-color: white;
        border-radius: 5px;
        box-shadow: 1px 1px 2px 2px #DEDEDE;
    }
    @media (max-width: 800px) {
        .skydive-info-box {
            margin: 20px;
        }
    }
    @media (max-width: 700px) {
        .first-time-skydive-container {
            flex-direction: column;
        }
    }
    /* @media (max-width: 400px) {
        .first-time-skydive-container {
            width: 90%;
        }
    } */
`
const TandemData = {
    title: "Tandem Skydive",
    pic: "https://skydiveparacletexp.com/wp-content/uploads/2016/11/DSC04180.jpg",
    q1: "What is a tandem skydive?",
    a1: "Marfa VHS chicharrones ugh tumeric. Knausgaard irony slow",
    q2: "Question2",
    a2: "Answer2",
    q3: "Question3",
    a3: "Answer3",
    q4: "Question4",
    a4: "Answer4",
    q5: "Question5",
    a5: "Answer5",
}

const Tandem = () => {
    return <QuestionAnswerModal info={TandemData}/>
}

const StaticLineData = {
    title: "Static Line Skydive",
    pic: "http://www.skydiveparys.co.za/images/site/static-line-main-image-main.jpg",
    q1: "What is a static line skydive?",
    a1: "Marfa VHS chicharrones ugh tumeric. Knausgaard irony slow",
    q2: "Question2",
    a2: "Answer2",
    q3: "Question3",
    a3: "Answer3",
    q4: "Question4",
    a4: "Answer4",
    q5: "Question5",
    a5: "Answer5",
}

const StaticLine = () => {
    return <QuestionAnswerModal info={StaticLineData}/>
}


export default class FirstTimeJumpers extends Component {
    render() {
        return (
            <Wrapper>
                <h1>FIRST TIME JUMPERS</h1>
                <div className="first-time-skydive-container">
                    <div>
                        <div className="tandem-skydive skydive-info-box">
                            {/* <TandemSkydive component={QuestionAnswerModal}/> */}
                            <QuestionAnswerModal info={TandemData}/>
                        </div>
                    </div>
                    <div>
                        <div className="static-line-skydive skydive-info-box">
                            {/* <StaticLineSkydive /> */}
                            <QuestionAnswerModal info={StaticLineData}/>
                        </div>
                    </div>
                </div>
                <Staff />
            </Wrapper>
        )
    }
}
