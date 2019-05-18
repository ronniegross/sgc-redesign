import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
    /* display: flex;
    flex-direction: row; */
    /* justify-content: space-around; */
    /* margin: 0;
    padding: 0; */
    ul {
        margin: 0 0 30px 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        background-color: #2A6523;
        height: 75px;
    }
    a {
        /* background-color: pink; */
        font-family: "HelveticaNeue-CondensedBold", "Helvetica Neue";
        font-size: 20px;
        color: white;
        padding: 10px;
        cursor: pointer;
        text-decoration: none;
    }
    li {
        padding: 10px;
    }
    .nav-button {
        border: 2px white solid;
        border-radius: 5px;
    }
`

export default class Navbar extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {};

    //     this.handleScroll = this.handleScroll.bind(this);
    // }

    // handleScroll() {
    //     this.setState({ scroll: window.scrollY });
    // }

    // componentDidMount() {
    //     const el = document.querySelector('nav');
    //     this.setState({ top: el.offsetTop, height: el.offsetHeight });
    //     window.addEventListener('scroll', this.handleScroll);
    // }

    // componentDidUpdate() {
    //     this.state.scroll > this.state.top ?
    //         document.body.style.paddingTop = `${this.state.height}px` :
    //         document.body.style.paddingTop = 0;
    // }

    // state = {
    // isNavBarStickied: false,
    // handleScroll: this.handleScroll.bind(this)
    // }

    // handleScroll() {
    //     this.setState({ scroll: window.scrollY });
    // }

    // componentDidMount() {
    //     const el = document.querySelector('nav');
    //     this.setState({ top: el.offsetTop, height: el.offsetHeight });
    //     window.addEventListener('scroll', this.handleScroll);
    // }

    // componentDidUpdate() {
    //     this.state.scroll > this.state.top ?
    //         document.body.style.paddingTop = `${this.state.height}px` :
    //         document.body.style.paddingTop = 0;
    // }

    render() {
        return (
            <Wrapper>
                {/* <nav className={this.state.scroll > this.state.top ? "fixed-nav" : ""}> */}
                <nav>
                    <ul>
                        <li><Link to={'/'}>About</Link></li>
                        <li><Link to={'/firsttimejumpers'}>First Time Jumpers</Link></li>
                        <li><Link to={'/experiencedjumpers'}>Experienced Jumpers</Link></li>
                        <li><Link to={'/pricing'}>Pricing</Link></li>
                        <li><Link to={'/FAQs'}>FAQs</Link></li>
                        <li className="nav-button"><Link to={'/bookaskydive'}>Book a Skydive</Link></li>
                        <li className="nav-button"><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                </nav>
            </Wrapper>
        )
    }
}
