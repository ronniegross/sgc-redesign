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
        margin: 0 30px 0 30px; 
    }
    /* margin: 30px; */
    .faq-title {
        margin: 40px 0 20px 0;
    }
`

const FunJumperQuestions = {
    title: "Common Fun Jumper Questions:",
    q1: "Question1",
    a1: "Answer1",
    q2: "Question2",
    a2: "Answer2",
    q3: "Question3",
    a3: "Answer3",
    q4: "Question4",
    a4: "Answer4",
    q5: "Question5",
    a5: "Answer5",
}

const FunJumper = () => {
    return <FAQModal funJumper={FunJumperQuestions}/>
}

const TandemJumperQuestions = {
    title: "Common First Time Jumper Questions:",
    q1: "Question1",
    a1: "Answer1",
    q2: "Question2",
    a2: "Answer2",
    q3: "Question3",
    a3: "Answer3",
    q4: "Question4",
    a4: "Answer4",
    q5: "Question5",
    a5: "Answer5",
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
            </Wrapper>
        )
    }
}
