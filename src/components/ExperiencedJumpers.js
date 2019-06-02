import React, { Component } from 'react'
import styled from 'styled-components'
import QuestionAnswerModal from './QuestionAnswerModal.js'

const Wrapper = styled.div`
    display: flex; 
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */
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
    .pic-holder {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .text-holder {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .aircraft-facilities-text {
        width: 90%;
        margin: 20px;
    }
    /* h1 {
        margin: 20px;
    } */
    .title {
        margin: 20px;
    }
    .facilities-title {
        margin-top: 50px;
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

const Pic = styled.img`
    width: 90%;
    height: 500px;
    object-fit: cover;
`

const PricingData = {
    title: "Pricing",
    pic: "https://i.imgur.com/sHqWUmV.jpg",
    pricing: true,
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

const Pricing = () => {
    return <QuestionAnswerModal info={PricingData} />
}

const InfoData = {
    title: "General Information",
    pic: "https://i.imgur.com/dJWGdt3.jpg",
    q1: "When are you open?",
    a1: "We jump 7 days a week.",
    q2: "Do you use Burble?",
    a2: "At this time, we only use Burble for booking tandem skydives.",
    q3: "What can I expect at Skydive Greene County?",
    a3: "Whether you like RW, freeflying, CRW,or accuracy, we have it all at Skydive Greene County. We have many jumpers who have been around for awhile and some new faces as well this year-we would love to have you be one of those!",
    q4: "Where can I land?",
    a4: "We have a main landing area of over 5 acres and an additional 10 acres as a secondary with hundreds of acres for safe outs if you do happen to land off the airport. Please ask to receive a complete area briefing if you are new to the dropzone area.",

    // q3: "Question3",
    // a3: "Answer3",
    // q4: "Question4",
    // a4: "Answer4",
    q5: "Where can I pack?",
    a5: "Our packing hanger easily will allow 40 people to pack at the same time. We provide rig racks for your convenience. In addition, we have packers who can pack your gear if you so desire. Located in the hanger are boxes of rubber bands, pull up cords and a canopy rack for canopy inspections. Limited power outlets are provided for charging your video camera or other small items.",
    q6: "Do you offer gear storage?",
    a6: "Limited numbers of storage areas are available on a seasonal renting schedule.",
    q7: "Where can I get some grub?",
    a7: "If you are hungry or thirsty, visit our delicious concession stand, located on just past the clubhouse between the hanger."
}

const Rules = () => {
    return <QuestionAnswerModal info={InfoData} />
}

export default class ExperiencedJumpers extends Component {
    render() {
        return (
            <Wrapper>
                <h1>EXPERIENCED JUMPERS</h1>
                <div className="first-time-skydive-container">
                    <div>
                        <div className="pricing skydive-info-box">
                            <QuestionAnswerModal info={PricingData} />
                        </div>
                    </div>
                    <div>
                        <div className="rules skydive-info-box">
                            <QuestionAnswerModal info={InfoData} />
                        </div>
                    </div>
                </div>
                <h1 className="aircraft-title title">Aircraft</h1>
                <div className="pic-holder">
                    <Pic src="https://i.imgur.com/DAAqWXu.jpg" alt="aircraft"></Pic>
                </div>
                <div className="text-holder">
                    <p className="aircraft-facilities-text">King Air</p>
                </div>
                <div className="pic-holder">
                    <Pic src="https://i.imgur.com/MqRrjVS.jpg" alt="aircraft"></Pic>
                </div>
                <div className="text-holder">
                    <p className="aircraft-facilities-text">Westwind Turbine Beechcraft</p>
                </div>
                <div className="pic-holder">
                    <Pic src="https://i.imgur.com/7jVHfoM.jpg" alt="aircraft"></Pic>
                </div>
                <div className="text-holder">
                    <p className="aircraft-facilities-text">Cessna 182</p>
                </div>
                {/* <h1 className="facilities-title title">Facilities</h1>
                <div className="pic-holder">
                    <Pic src="https://i.imgur.com/Lp5LZjU.jpg" alt="facilities"></Pic>
                </div>
                <div className="text-holder">
                <p className="aircraft-facilities-text"> 3 wolf moon umami godard, street art everyday carry poutine tumblr unicorn keffiyeh try-hard. Fanny pack live-edge seitan lomo kinfolk cred, enamel pin blog chambray disrupt gentrify. Hoodie mustache chillwave selfies, humblebrag air plant asymmetrical umami banh mi snackwave. Tumeric williamsburg polaroid, raw denim small batch hoodie jianbing meggings sartorial.</p>
                </div> */}
            </Wrapper>
        )
    }
}
