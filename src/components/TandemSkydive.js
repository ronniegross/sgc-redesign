import React, { Component } from 'react'
import styled from 'styled-components'
import QuestionAnswerModal from './QuestionAnswerModal'

const Wrapper = styled.div`
    .tandem-pic {
        /* width: 200px;
        height: 140px; */
        /* width: 100%; */
        /* object-fit: cover;
        object-fit: contain; */
        /* width: 500px;
        height: 350px;
        object-fit: cover; */
        /* how do i make this width responsive? */
        /* width: 20em; */
        width: 100%;
        height: auto;
    }
    .pic-holder {
        /* background-color: blue; */
        /* margin: 30px; */
    }
    img {
        /* width: 500px;
        height: 350px;
        object-fit: cover; */
        width: 100%;
        
    }
    /* @media (max-width: 1200px) {
        .tandem-pic {
            width: 425px;
            height: 300px;
        }
    } */
`


export default class TandemSkydive extends Component {
    // state = {
    //     viewMore: false,
    // }

    // triggerViewMorePrices = () => {
    //     this.setState((state, props) => {
    //         return ({ viewMore: !state.viewMore })
    //     })
    // }

    render() {
        return (
            // <Wrapper>
            //     <h1>Tandem Skydive</h1>
            //     <div className="pic-holder">
            //         <img className="tandem-pic" src="https://skydiveparacletexp.com/wp-content/uploads/2016/11/DSC04180.jpg" alt="tandem skydive"></img>
            //     </div>
            //     {
            //         this.state.viewMore ?
            //             <div className="">
            //                 <div className="question-answer">
            //                     <h2>What is a tandem skydive?</h2>
            //                     <p>Marfa VHS chicharrones ugh tumeric. Knausgaard irony slow</p>
            //                 </div>
            //                 <div className="question-answer">
            //                     <h2>Tandem skydive price</h2>
            //                     <p>$XXX</p>
            //                 </div>
            //                 <div className="question-answer">
            //                     <h2>Tandem skydive price2</h2>
            //                     <p>$XXX</p>
            //                 </div>
            //                 <div className="question-answer">
            //                     <h2>Tandem skydive price3</h2>
            //                     <p>$XXX</p>
            //                 </div>
            //                 <div className="question-answer">
            //                     <h2>Tandem skydive price4</h2>
            //                     <p>$XXX</p>
            //                 </div>
            //                 <p onClick={this.triggerViewMorePrices} className="view-more-prices">Click to view fewer prices</p>
            //             </div>
            //             :
            //             <div className="two-questions">
            //                 <div className="question-answer">
            //                     <h2>What is a tandem skydive?</h2>
            //                     <p>Marfa VHS chicharrones ugh tumeric. Knausgaard irony slow</p>
            //                 </div>
            //                 <div className="question-answer">
            //                     <h2>Tandem skydive price</h2>
            //                     <p>$XXX</p>
            //                 </div>
            //                 <p onClick={this.triggerViewMorePrices} className="view-more-prices">Click to view more prices</p>
            //             </div>
            //     }
            // </Wrapper>
            <div>
                <QuestionAnswerModal />
            </div>
        )
    }
}
