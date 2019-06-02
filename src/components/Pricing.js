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
    q1: "Single Jumper",
    a1: "$175",
    q2: "Group Jumper (6+)",
    a2: "$165",
    q3: "Group Jumper (11+)",
    a3: "$160",
    q4: "Video",
    a4: "$95",
    q5: "Pictures",
    a5: "$95",
    q6: "Video and Pictures",
    a6: "$135",
}

const Tandem = () => {
    return <QuestionAnswerModal info={TandemData} />
}

const StaticLineData = {
    title: "Static Line Skydive",
    pic: "http://www.skydiveparys.co.za/images/site/static-line-main-image-main.jpg",
    pricing: true,
    q1: "Level 1 + Static Line Course",
    a1: "$175 (previous tandem skydive required)",
    q2: "Level 2-7",
    a2: "$85.00 per jump",
    q3: "Level 8-9",
    a3: "$95.00 per jump",
    q4: "Level 10-11",
    a4: "$105.00 per jump",
    q5: "Level 12-13",
    a5: "$120.00 per jump",
    q6: "Level 14-25 (includes gear rental)",
    a6: "$44.00 per jump",
    q7: "Coach Jump (includes gear rental)",
    a7: "$100.00",
    q8: "Student Refresher Course",
    a8: "$50.00",
    q9: "Packing Class",
    a9: "$50.00",
    q10: "Reserve Repack Pricing",
    a10: "$75.00",
}

const StaticLine = () => {
    return <QuestionAnswerModal info={StaticLineData} />
}


const FunJumperPricingData = {
    title: "Experienced Jumper",
    pic: "https://i.imgur.com/dJWGdt3.jpg",
    pricing: true,
    bigTile: true,
    q1: "12,500 ft - Westwind",
    a1: "$24.00",
    q2: "9,000 ft - Cessna 182",
    a2: "$20.00",
    q3: "5,500 ft - Westwind",
    a3: "$17.00",
    q4: "3,500 ft - Cessna 182",
    a4: "$14.00",
    q5: "Reserve Repack",
    a5: "$75.00",
    q6: "Gear Rental",
    a6: "$??.00",
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
