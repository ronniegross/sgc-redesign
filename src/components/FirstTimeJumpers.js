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
    pic: "https://i.imgur.com/MZ6Eorb.jpg",
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
    q6: "What can I expect?",
    a6: "After filling out paperwork and watching a short video you will be ready to make your skydive. Somewhere around 11,500 feet you will be harnessed to your tandem instructor, the door will open and you will exit the plane.",
    a7: "Your freefall with your instructor will last for approximately 40-50 seconds. We can almost guarantee this will be the most exciting minute of your life as you reach speeds of around 120 mph as you fall for nearly two miles back to earth!",
    a8: "When you reach opening altitude, your instructor will deploy your parachute made for two and you will glide you back to the landing area taking in the beautiful sites along the way.",
    a9: "For an added charge, you are able to capture the spectacular skydive you just made by having one of our great camera flyers film your adventure. Our camera flyers will put together a professionally edited video of your jump. Our videos include pre and post jump interviews, the ride to altitude, your freefall, and your landing.",
    a10: "If you have additional questions, please call us at (937) 372-0700 or visit our Frequently Asked Questions Page!",
    a11: "Once you have made your tandem skydive, you are able to move on to our Static Line Program. Check out our pricing page for more info!",
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
    q6: "What can I expect?",
    a6: "We have the most current and up to date gear available to the skydiving industry to make your skydive as safe, comfortable and most of all, as FUN as possible. All of the student gear at Skydive Greene County is maintained by certified FAA Riggers.",
    a7: "Every student will be led through the entire day by a USPA licensed Instructor. Never does the student at Skydive Greene County feel unattended.",
    a8: "Once training is over and each student is ready, they are led by their Jump Master to make their first jump. Static Line classes (depending on the weather) will jump right after the class is finished, that very same day!",
    a9: "We use ground to air communications with their students so they are able to get back to the Drop Zone and have a soft, gentle, on target landing.",
    a10: "If there is bad weather on the day of a scheduled Static line course, we will still train you for your jump. Once training is complete we will wait on the rain to clear or the winds to calm down so that you can make your jump. If the weather does not cooperate, you can come back the next day, or we will re-schedule a time to make your skydive.",
    a11: "After making your skydive, our students are given a logbook filled out by their jumpmaster, to take with them for their next jump, as well as a leaving with a memory of a lifetime!",
    a12: "If you have additional questions, please call us at (937) 372-0700."

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
