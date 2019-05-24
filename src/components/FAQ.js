import React, { Component } from 'react'
import styled from 'styled-components'
import FAQModal from './FAQModal.js'

const Wrapper = styled.div`
    h2 {
        text-align: start;
        margin: 10px 30px 10px 30px;
    }
    p {
        text-align: start;
        margin: 0 30px 30px 30px; 
    }
    /* margin: 30px; */
    .faq-title {
        margin: 40px 0 40px 0;
    }
`

const FunJumperQuestions = {
    title: "Common Experienced Jumper Questions:",
    q1: "Can I hire a packer?",
    a1: "Yes! We have multiple packers available on the weekend.",
    q2: "Do you use Burble?",
    a2: "Yes we do. You can find us on Burble @skydivegreeneco.",
    q3: "What are your hours of operation?",
    a3: "We are open seven days a week from 9:00am to sunset for your skydiving convenience.",
    q4: "Do you have an arial view of the DZ?",
    a4: "Yes, you can find it here.",
    q5: "Are you jumping today?",
    a5: "Give us a call at 937-372-0700 and we'll gladly let you know who will be jumping.",
}

const FunJumper = () => {
    return <FAQModal funJumper={FunJumperQuestions}/>
}

const TandemJumperQuestions = {
    title: "Common First Time Jumper Questions:",
    q1: "What are your hours of operation?",
    a1: "We are open seven days a week from 9:00am to sunset for your skydiving convenience.",
    q2: "How do I learn to skydive?",
    a2: "Just pick up the phone and call 937-372-0700. You can talk directly to our friendly and experienced staff that will answer all of your questions and make your appointment for your first tandem skydive. If you would rather, click here to email us.",
    q3: "Can I jump by myself the first time?",
    a3: "We require a Tandem skydive as your first jump.  After you make a tandem you than can enroll in our static line course. Tandem skydives allows you to experience freefall and canopy flight while harnessed to an experienced instructor. This is required before enrolling in our Static Line program or AFF program. Static Line jumps will take you up with your jump master and you will leave the aircraft attached by a static line that will automatically open your parachute and you will guide the parachute via ground to air communication.",
    q4: "Is there an age requirement?",
    a4: "You must be 18, there are no exceptions on this rule. A valid photo ID (drivers license or state ID) is required to jump. There is no maximum age limit, but the minimum age is 18 regardless of parental consent. We have taken people as old as 18 or as young as 80!",
    q5: "Is there a weight limit? Are there any physical requirements?",
    a5: "Yes. Due to safety considerations, the weight limit for a tandem skydive is 240 lbs with height and weight being proportional. Various factors will be assessed to determine our ability to take you on a tandem jump. These include but are not limited to: weight, height, body type, and medical history. Tandems are not recommended to those that are not in reasonably good physical condition. Our instructors will make the final decision. Please call ahead if you have any questions.",
    q6: "What does it cost to jump?",
    a6: "The price for a tandem skydive is $175. This cost includes all the training, the plane ride to altitude, necessary equipment, the skydive, and your own logbook. For our full price list click here!",
    q7: "Do you require a deposit? What happens to my deposit if I cancel? What happens to my deposit if the weather is bad?",
    a7: "Yes, we require a $25 deposit per person to book a jump. If we cancel the jump due to weather your deposit will be fully refunded. In the event a check is not honored by your bank, your credit card will be charged for the amount of the check plus a service fee of $15 to cover the bank fee.",
    q8: "What type of payment do you accept?",
    a8: "Cash or checks.  We also take Visa and MasterCard.",
    q9: "Do I have to make an appointment?",
    a9: "Call 937-372-0700 to book your reservation(s) to help us serve you better. On weekends, in particular, we give priority to those who have scheduled with us in advance. We schedule a time for you and/or your group to arrive. That is when we will begin the training process. Your skydive will take place when your training is completed. We also welcome walk in’s at S.G.C. and will work to fit you onto our schedule so you can make a skydive with us.  Students with reservations will always take priority.  There are times when we are to busy to accept walk in’s so a reservation is highly recommended.",
    q10: "How long will this take?",
    a10: "Please plan on spending at least half the day with us. We do everything we can to get you skydiving as quickly as possible and minimize your wait. We understand that you want to jump… and we do too. However, sometimes weather or high winds do get in the way of jumping at your scheduled time and it does slow down the day. This is rare, but we do all we can to help make your jump possible at your scheduled time. Note: Weekdays are often less busy. We will make every effort to minimize your wait, regardless of when you choose to jump.",
    q11: "How long is the training?",
    a11: "When you first arrive, you will spend 15-20 minutes watching a video and signing the required paperwork. After you meet your instructor, they can train you in basic freefall body position, exit procedures, and safety information in 20-30 minutes.",
    q12: "Do you offer Discounts & Group Rates?",
    a12: "Group discounts start at 6 people or more. Please contact us at 937-372-0700 for groups of 11 or more to discuss scheduling and deposit requirements.",
    q13: "I am coming out with a group. Can we all jump at the same time?",
    a13: "Smaller groups (3-4) are usually no problem. Please let us know when you check in. We will do whatever we can to accommodate your request. For larger groups, we will work with you to divide the group between plane loads, and will consider your input regarding who jumps on each load.",
    q14: "Can I get a video and/or photographs of my jump?",
    a14: "Yes, there is an extra cost for a DVD video. All videos are edited and include a pre- and post-jump interview, ride to altitude and of course the freefall and the landing of your skydive. Digital photos are also available for an additional cost with the purchase of a video. Please let us know if you want photos with your video when you schedule your skydive(s). For our full price list click here.",
    q15: "Can we get one video for our whole group?",
    a15: "No, the time/distance gap between jumper exits prevents a camera person from being able to film more than one student at a time.",
    q16: "What altitude is the jump?",
    a16: "10,000-13,500 feet.",
    q17: "How long does the skydive last?",
    a17: "40-60 seconds of freefall time and about 5-7 minutes under canopy.",
    q18: "What will the skydive feel like?",
    a18: "The sensation of freefall is more like flying than falling, and is both exciting and at the same time liberating. There is no other feeling like it in the world! The canopy flight is quiet and peaceful.",
    q19: "What’s the landing like?",
    a19: "Most landings are quite soft. Landings vary from tip toe soft stand-ups to butt slides, with some being harder than normal. Your instructor will brief you on landing procedures and will make every effort to land both of you safely.",
    q20: "What should I wear?",
    a20: "Dress comfortably for the weather. Jeans and gym shoes are ideal. Shorts are also acceptable on warmer days. No sandals, flip-flops, cowboy boots or any shoes with hooks on them. You will not be permitted to jump without shoes.",
    q21: "What if the weather forecast is bad?",
    a21: "Please call 937-372-0700 prior to leaving home to check weather conditions. Sometimes the weather will prevent student jumps and we will reschedule you for another day.",
    q22: "What do I need to bring?",
    a22: "A valid photo ID, money and a willingness to have the experience of your life. Skydive Greene County will provide everything else needed for a successful skydive.",
    q23: "Can I bring my own camera with me on the jump?",
    a23: "No, you and your instructor are much too busy with your skydive to look after your camera. It very easily may get lost or broken. We offer the skills of highly experienced freefall videographers to record your experience. Spectators are welcome to take photographs.",
    q24: "Can I bring my friends and family to watch?",
    a24: "Definitely YES! We encourage you to share the experience with your friends, family, and co-workers.",
    q25: "Are gift certificates available?",
    a25: "Yes, gift certificates are available for tandem jumps and can include video and stills. Please call 937-372-0700 or stop in to purchase one.",
    q26: "Is your airport “Dog Friendly”?",
    a26: "Sorry, we do not allow pets at the airport.",
    q27: "Does Skydive Greene County accept 1-800-Skyride certificates?",
    a27: "NO! We do not accept 1-800-Skyride gift certificates. This is a middle man booking company that frequently charges far more then we charge for a skydive and have numerous complaints in against them with the BBB. We choose not to do business with others that harm consumers. We only accept gift certificates purchased though us.",
}

const TandemJumper = () => {
    return <FAQModal TandemJumper={TandemJumperQuestions}/>
}

export default class FAQ extends Component {
    render() {
        return (
            <Wrapper>
                <h1>SKYDIVE GREENE COUNTY FAQs </h1>
                <FAQModal info={TandemJumperQuestions}/>
                <FAQModal info={FunJumperQuestions}/>
                <h1 className="faq-title">Common First Time Jumper Questions</h1>
                <h2>{TandemJumperQuestions.q1}</h2>
                <p>{TandemJumperQuestions.a1}</p>
                <h2>{TandemJumperQuestions.q2}</h2>
                <p>{TandemJumperQuestions.a2}</p>
                <h2>{TandemJumperQuestions.q3}</h2>
                <p>{TandemJumperQuestions.a3}</p>
                <h2>{TandemJumperQuestions.q4}</h2>
                <p>{TandemJumperQuestions.a4}</p>
                <h2>{TandemJumperQuestions.q5}</h2>
                <p>{TandemJumperQuestions.a5}</p>
                <h2>{TandemJumperQuestions.q6}</h2>
                <p>{TandemJumperQuestions.a6}</p>
                <h2>{TandemJumperQuestions.q7}</h2>
                <p>{TandemJumperQuestions.a7}</p>
                <h2>{TandemJumperQuestions.q8}</h2>
                <p>{TandemJumperQuestions.a8}</p>
                <h2>{TandemJumperQuestions.q9}</h2>
                <p>{TandemJumperQuestions.a9}</p>
                <h2>{TandemJumperQuestions.q10}</h2>
                <p>{TandemJumperQuestions.a10}</p>
                <h2>{TandemJumperQuestions.q11}</h2>
                <p>{TandemJumperQuestions.a11}</p>
                <h2>{TandemJumperQuestions.q12}</h2>
                <p>{TandemJumperQuestions.a12}</p>
                <h2>{TandemJumperQuestions.q13}</h2>
                <p>{TandemJumperQuestions.a13}</p>
                <h2>{TandemJumperQuestions.q14}</h2>
                <p>{TandemJumperQuestions.a14}</p>
                <h2>{TandemJumperQuestions.q15}</h2>
                <p>{TandemJumperQuestions.a15}</p>
                <h2>{TandemJumperQuestions.q16}</h2>
                <p>{TandemJumperQuestions.a16}</p>
                <h2>{TandemJumperQuestions.q17}</h2>
                <p>{TandemJumperQuestions.a17}</p>
                <h2>{TandemJumperQuestions.q18}</h2>
                <p>{TandemJumperQuestions.a18}</p>
                <h2>{TandemJumperQuestions.q19}</h2>
                <p>{TandemJumperQuestions.a19}</p>
                <h2>{TandemJumperQuestions.q20}</h2>
                <p>{TandemJumperQuestions.a20}</p>
                <h2>{TandemJumperQuestions.q21}</h2>
                <p>{TandemJumperQuestions.a22}</p>
                <h2>{TandemJumperQuestions.q23}</h2>
                <p>{TandemJumperQuestions.a23}</p>
                <h2>{TandemJumperQuestions.q24}</h2>
                <p>{TandemJumperQuestions.a24}</p>
                <h2>{TandemJumperQuestions.q25}</h2>
                <p>{TandemJumperQuestions.a25}</p>
                <h2>{TandemJumperQuestions.q26}</h2>
                <p>{TandemJumperQuestions.a26}</p>
                <h2>{TandemJumperQuestions.q27}</h2>
                <p>{TandemJumperQuestions.a27}</p>
                <h1 className="faq-title">Common Experienced Jumper Questions</h1>
                <h2>{FunJumperQuestions.q1}</h2>
                <p>{FunJumperQuestions.a1}</p>
                <h2>{FunJumperQuestions.q2}</h2>
                <p>{FunJumperQuestions.a2}</p>
                <h2>{FunJumperQuestions.q3}</h2>
                <p>{FunJumperQuestions.a3}</p>
                <h2>{FunJumperQuestions.q4}</h2>
                <p>{FunJumperQuestions.a4}</p>
                <h2>{FunJumperQuestions.q5}</h2>
                <p>{FunJumperQuestions.a5}</p>
                <h2>{FunJumperQuestions.q6}</h2>
                <p>{FunJumperQuestions.a6}</p>
                <h2>{FunJumperQuestions.q7}</h2>
                <p>{FunJumperQuestions.a7}</p>
            </Wrapper>
        )
    }
}
