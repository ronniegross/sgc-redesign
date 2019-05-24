import React, { Component } from 'react'
import styled from 'styled-components'
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
    .fun-jumper {
        margin: 30px;
        padding: 30px;
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
`

const TandemData = {
    title: "Tandem Skydive",
    pic: "https://skydiveparacletexp.com/wp-content/uploads/2016/11/DSC04180.jpg",
    pricing: true,
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
    return <QuestionAnswerModal info={TandemData} />
}

const StaticLineData = {
    title: "Static Line Skydive",
    pic: "http://www.skydiveparys.co.za/images/site/static-line-main-image-main.jpg",
    pricing: true,
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
    return <QuestionAnswerModal info={StaticLineData} />
}


const FunJumperPricingData = {
    title: "Experienced Jumper",
    pic: "https://www.skydivelongisland.com/images/article/Learn-to-Freefly.jpg",
    pricing: true,
    bigTile: true,
    q1: "Low Pass",
    a1: "Marfa VHS chicharrones ugh tumeric. Knausgaard irony slow",
    q2: "Regular",
    a2: "Answer2",
    q3: "Question3",
    a3: "Answer3",
    q4: "Question4",
    a4: "Answer4",
    q5: "Question5",
    a5: "Answer5",
}

const FunJumperPricing = () => {
    return <QuestionAnswerModal info={FunJumperPricingData} />
}


export default class Pricing extends Component {
    render() {
        return (
            <Wrapper>
                <h1>PRICING</h1>
                <div className="first-time-skydive-container">
                    <div>
                        <div className="tandem-skydive skydive-info-box">
                            {/* <TandemSkydive component={QuestionAnswerModal}/> */}
                            <QuestionAnswerModal info={TandemData} />
                        </div>
                    </div>
                    <div>
                        <div className="static-line-skydive skydive-info-box">
                            {/* <StaticLineSkydive /> */}
                            <QuestionAnswerModal info={StaticLineData} />
                        </div>
                    </div>
                </div>
                <div className="first-time-skydive-container">
                    <div className="fun-jumper skydive-info-box">
                        <QuestionAnswerModal info={FunJumperPricingData} />
                    </div>
                </div>
            </Wrapper>
        )
    }
}
