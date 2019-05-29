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
    height: 400px;
    object-fit: cover;
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
    return <QuestionAnswerModal info={PricingData} />
}

const RulesData = {
    title: "Rules",
    pic: "https://i.imgur.com/dJWGdt3.jpg",
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
    return <QuestionAnswerModal info={RulesData} />
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
                            <QuestionAnswerModal info={RulesData} />
                        </div>
                    </div>
                </div>
                <h1 className="aircraft-title title">Aircraft</h1>
                <div className="pic-holder">
                    <Pic src="https://skydivekc.com/images/site/Skydiving-Aircraft.jpg" alt="aircraft"></Pic>
                </div>
                <div className="text-holder">
                <p className="aircraft-facilities-text">Lorem ipsum dolor amet cloud bread artisan vinyl bicycle rights. Air plant la croix yuccie, kickstarter VHS williamsburg readymade bushwick cornhole beard tumeric tbh. Distillery pok pok vape tousled paleo messenger bag. Narwhal iceland adaptogen, vape chillwave actually tousled synth crucifix kogi raw denim meh. Health goth PBR&B hell of tilde portland fixie artisan hexagon polaroid tattooed bitters. Kogi microdosing helvetica pug crucifix craft beer.
                </p>
                </div>
                <h1 className="facilities-title title">Facilities</h1>
                <div className="pic-holder">
                    <Pic src="https://www.skydiveohio.com/wp-content/uploads/2013/01/packing_hanger.jpg" alt="amenities"></Pic>
                </div>
                <div className="text-holder">
                <p className="aircraft-facilities-text"> 3 wolf moon umami godard, street art everyday carry poutine tumblr unicorn keffiyeh try-hard. Fanny pack live-edge seitan lomo kinfolk cred, enamel pin blog chambray disrupt gentrify. Hoodie mustache chillwave selfies, humblebrag air plant asymmetrical umami banh mi snackwave. Tumeric williamsburg polaroid, raw denim small batch hoodie jianbing meggings sartorial.</p>
                </div>
            </Wrapper>
        )
    }
}
