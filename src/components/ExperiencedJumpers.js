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

const PricingData = {
    title: "Pricing",
    pic: "https://www.skydivelongisland.com/images/article/Learn-to-Freefly.jpg",
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

const Pricing = () => {
    return <QuestionAnswerModal info={PricingData}/>
}

const RulesData = {
    title: "Rules",
    pic: "http://www.chutingstar.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/c/icarusreserve.jpg",
    q1: "No Swooping",
    a1: "Pilot Will Spot",
    q2: "Question2",
    a2: "Answer2",
    q3: "Question3",
    a3: "Answer3",
    q4: "Question4",
    a4: "Answer4",
    q5: "Question5",
    a5: "Answer5",
}

const Rules = () => {
    return <QuestionAnswerModal info={RulesData}/>
}

export default class ExperiencedJumpers extends Component {
    render() {
        return (
            <Wrapper>
                <h1>EXPERIENCED JUMPERS</h1>
                <div className="first-time-skydive-container">
                    <div>
                        <div className="pricing skydive-info-box">
                            <QuestionAnswerModal info={PricingData}/>
                        </div>
                    </div>
                    <div>
                        <div className="rules skydive-info-box">
                            <QuestionAnswerModal info={RulesData}/>
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}
