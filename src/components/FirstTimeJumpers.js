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
    a1: "Tandem skydiving is an exhilarating, easy, low stress way to make your first jump and is the most widely used method of skydiving across the United States. Our tandem training method involves you being harnessed to one of our highly trained and skilled tandem instructors rated by United Parachute Technologies as well as the United States Parachute Association.",
    q2: "How much does it cost?",
    a2: "$175 per person.",
    q3: "Who is eligible?",
    a3: "Anyone over the age of 18 and less than 240 lbs with their weight in proportion to their height.",
    q4: "How long does it take?",
    a4: "Please plan on spending at least half the day with us. We do everything we can to get you skydiving as quickly as possible and minimize your wait. We understand that you want to jump… and we do too. However, sometimes weather or high winds do get in the way of jumping at your scheduled time and it does slow down the day. This is rare, but we do all we can to help make your jump possible at your scheduled time. Weekdays are often less busy. We will make every effort to minimize your wait, regardless of when you choose to jump.",
    q5: "What should I wear?",
    a5: "Dress comfortably for the weather. Jeans or athletic clothes, and gym shoes are ideal. Shorts are also acceptable on warmer days. No sandals, flip-flops, cowboy boots or any shoes with hooks on them. You will not be permitted to jump without shoes.",
}

const Tandem = () => {
    return <QuestionAnswerModal info={TandemData}/>
}

const StaticLineData = {
    title: "Static Line Skydive",
    pic: "http://www.skydiveparys.co.za/images/site/static-line-main-image-main.jpg",
    q1: "What is a static line skydive?",
    a1: "A parachute jump during which the deployment of the parachute is initiated by a static line attached to the aircraft. The Static Line Jump is the “traditional” way to learn to skydive. Here at Skydive Greene County, we have classes through out the year, taught by USPA licensed Instructors.",
    q2: "How much does it cost?",
    a2: "$175 which includes the skydive, gear rental, and the cost of the first jump course.",
    q3: "Who is eligible?",
    a3: "Anyone over the age of 18 who has previoulsy made a tandem skydive.",
    q4: "How long does it take?",
    a4: "The course itself is around 8 hours. The skydive can be done in 30 minutes once the course is completed.",
    q5: "How can I schedule my first static line skydive?",
    a5: "Please call us at 937-372-0700 and we'll book your class.",
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
