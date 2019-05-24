import React, { Component } from 'react'
import styled from 'styled-components'
import FAQModal from './FAQModal.js'

const Wrapper = styled.div`

`

const FunJumperQuestions = {
    title: "Common Fun Jumper Questions:",
    q1: "Question1",
    q2: "Question2",
    q3: "Question3",
    q4: "Question4",
    q5: "Question5",
}

const FunJumper = () => {
    return <FAQModal funJumper={FunJumperQuestions}/>
}

const TandemJumperQuestions = {
    title: "Common First Time Jumper Questions:",
    q1: "Question1",
    q2: "Question2",
    q3: "Question3",
    q4: "Question4",
    q5: "Question5",
}

const TandemJumper = () => {
    return <FAQModal funJumper={TandemJumperQuestions}/>
}

export default class FAQ extends Component {
    render() {
        return (
            <Wrapper>
                <h1>SKYDIVE GREENE COUNTY FAQs </h1>
                <FAQModal info={TandemJumperQuestions}/>
                <FAQModal info={FunJumperQuestions}/>
            </Wrapper>
        )
    }
}
