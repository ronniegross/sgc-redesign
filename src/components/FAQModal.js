import React, { Component } from 'react'
import styled from 'styled-components'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Wrapper = styled.div`
    margin: 30px;
    padding: 30px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 1px 1px 2px 2px #DEDEDE;
    h1 {
        text-align: start;
        margin-bottom: 10px;
        color: #2A6523;
    }
    h3 {
        /* text-decoration: underline; */
        text-align: start;
        margin: 10px 0 10px 0;
        cursor: pointer;
    }
`



export default class FAQModal extends Component {
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount() {

        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });

    }
    scrollToTop() {
        scroll.scrollToTop();
    }
    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            // offset: 100
        })
    }
    scrollToWithContainer() {

        let goToContainer = new Promise((resolve, reject) => {

            Events.scrollEvent.register('end', () => {
                resolve();
                Events.scrollEvent.remove('end');
            });

            scroller.scrollTo('scroll-container', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
                // offset: 100
            });

        });

        goToContainer.then(() =>
            scroller.scrollTo('scroll-container-second-element', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
                containerId: 'scroll-container',
                // offset: 100
            }));
    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    render() {
        // let qArr = this.props.info
        return (
            <Wrapper>
                <h1>{this.props.info.title}</h1>
                {/* {
                    qArr.map(question => (
                        <h3>{question}</h3>
                    ))
                } */}
                <Link activeClass="active" className="q1" to="q1" spy={true} smooth={true} duration={500} offset={-70}><h3>{this.props.info.q1}</h3></Link>
                {/* <h3>{this.props.info.q1}</h3> */}
                <Link activeClass="active" className="q1" to="q2" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q2}</h3></Link>
                <Link activeClass="active" className="q1" to="q3" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q3}</h3></Link>
                <Link activeClass="active" className="q1" to="q4" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q4}</h3></Link>
                <Link activeClass="active" className="q1" to="q5" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q5}</h3></Link>
                <Link activeClass="active" className="q1" to="q6" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q6}</h3></Link>
                <Link activeClass="active" className="q1" to="q7" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q7}</h3></Link>
                <Link activeClass="active" className="q1" to="q8" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q8}</h3></Link>
                <Link activeClass="active" className="q1" to="q9" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q9}</h3></Link>
                <Link activeClass="active" className="q1" to="q10" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q10}</h3></Link>
                <Link activeClass="active" className="q1" to="q11" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q11}</h3></Link>
                <Link activeClass="active" className="q1" to="q12" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q12}</h3></Link>
                <Link activeClass="active" className="q1" to="q13" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q13}</h3></Link>
                <Link activeClass="active" className="q1" to="q14" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q14}</h3></Link>
                <Link activeClass="active" className="q1" to="q15" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q15}</h3></Link>
                <Link activeClass="active" className="q1" to="q16" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q16}</h3></Link>
                <Link activeClass="active" className="q1" to="q17" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q17}</h3></Link>
                <Link activeClass="active" className="q1" to="q18" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q18}</h3></Link>
                <Link activeClass="active" className="q1" to="q19" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q19}</h3></Link>
                <Link activeClass="active" className="q1" to="q20" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q20}</h3></Link>
                <Link activeClass="active" className="q1" to="q21" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q21}</h3></Link>
                <Link activeClass="active" className="q1" to="q22" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q22}</h3></Link>
                <Link activeClass="active" className="q1" to="q23" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q23}</h3></Link>
                <Link activeClass="active" className="q1" to="q24" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q24}</h3></Link>
                <Link activeClass="active" className="q1" to="q25" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q25}</h3></Link>
                <Link activeClass="active" className="q1" to="q26" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q26}</h3></Link>
                <Link activeClass="active" className="q1" to="q27" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q27}</h3></Link>
                <Link activeClass="active" className="q1" to="q28" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q28}</h3></Link>
                <Link activeClass="active" className="q1" to="q29" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q29}</h3></Link>
                <Link activeClass="active" className="q1" to="q30" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q30}</h3></Link>
                <Link activeClass="active" className="q1" to="q31" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q31}</h3></Link>
                <Link activeClass="active" className="q1" to="q32" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q32}</h3></Link>
                <Link activeClass="active" className="q1" to="q33" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q33}</h3></Link>
                <Link activeClass="active" className="q1" to="q34" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q34}</h3></Link>
                <Link activeClass="active" className="q1" to="q35" spy={true} smooth={true} duration={500} offset={-30}><h3>{this.props.info.q35}</h3></Link>
            </Wrapper>
        )
    }
}
