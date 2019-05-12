import React, { Component } from 'react'

export default class TandemSkydive extends Component {
    state = {
        viewMore: false,
    }
    render() {
        return (
            <div>
                <h1>Tandem Skydive</h1>
                <div className="question-answer">
                    <h2>What is a tandem skydive?</h2>
                    <p>Marfa VHS chicharrones ugh tumeric. Knausgaard irony slow</p>
                </div>
            </div>
        )
    }
}
