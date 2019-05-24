import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import ResponsiveMenu from 'react-responsive-navbar'

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
    .navbar-toggle {
        display: none;
        width: 30px;
        /* margin: 30px 0 30px 0; */
        /* margin: 0 auto; */
        /* padding: 30px 0 30px 0; */
        /* margin: auto; */
    }
    /* img .navbar-toggle {
        margin: auto;
    } */
    .navbar-exit {
        width: 20px;
        height: 20px;
        margin-left: 5px;
        /* cursor: pointer; */
        /* margin: 0 auto; */
        /* margin: 30px 0 30px 0; */
    }
    .mobile-menu {
        /* display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; */
        /* margin: 0 auto; */
        align-items: start;
        display: none;
        margin-left: 10px;
    }
    .mobile-menu ul {
        background-color: white;
        flex-direction: column;
        align-content: start;
        justify-content: start;
        /* margin: 80px 0 100px 0; */
    }
    .mobile-menu-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        margin-bottom: 175px; 
    }
    .mobile-menu a {
        color: #3D3D3D;
    }
    .mobile-icon {
        /* margin: 0 auto; */
        margin: 15px 0 10px 15px;
        cursor: pointer;
    }
    .mobile-menu-container {
        display: none;
    }
    @media (max-width: 1100px) {
        li {
            padding: 5px;
        }
        a {
            padding: 5px;
        }
    }
    @media (max-width: 875px) {
        a {
            font-size: 16px;
        }
        ul {
            height: 50px;
        }
    }
    @media (max-width: 700px) {
        /* hamberger menu */
        .regular-menu {
            display: none;
        }
        .navbar-toggle {
            display: flex;
        }
        .mobile-menu {
            display: flex;
        }
        .mobile-menu-container {
            display: flex;
            flex-direction: column;
        }
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

    state = {
        isMobileDropDownTriggered: false,
        displayMobileExitIcon: false
    }

    toggleMobileDropDown = () => {
        this.setState((state, props) => {
            return ({ isMobileDropDownTriggered: !state.isMobileDropDownTriggered, displayMobileExitIcon: !state.displayMobileExitIcon })
        })
    }

    render() {
        return (
            <Wrapper>
                {/* <nav className={this.state.scroll > this.state.top ? "fixed-nav" : ""}> */}
                {/* <ResponsiveMenu
                    menuOpenButton={<img src="https://i.imgur.com/I34tvzm.png" alt="ham menu"/>}
                    menuCloseButton={<div />}
                    changeMenuOn="500px"
                    largeMenuClassName="large-menu-classname"
                    smallMenuClassName="small-menu-classname"
                    menu={
                        <ul>
                            <li><Link to={'/'}>About</Link></li>
                            <li><Link to={'/firsttimejumpers'}>First Time Jumpers</Link></li>
                            <li><Link to={'/experiencedjumpers'}>Experienced Jumpers</Link></li>
                            <li><Link to={'/pricing'}>Pricing</Link></li>
                            <li><Link to={'/FAQs'}>FAQs</Link></li>
                            <li className="nav-button"><Link to={'/bookaskydive'}>Book a Skydive</Link></li>
                            <li className="nav-button"><Link to={'/contact'}>Contact</Link></li>
                        </ul>
                    }
                /> */}
                
                <div className="mobile-menu-container">
                    { 
                        this.state.displayMobileExitIcon ?
                            <div className="navbar-toggle mobile-icon" onClick={this.toggleMobileDropDown}><img className="navbar-exit" src="https://i.imgur.com/ssmtzqs.png"  alt="mobile menu exit" /></div>
                            : <div className="navbar-exit mobile-icon" onClick={this.toggleMobileDropDown}><img className="navbar-toggle"  src="https://i.imgur.com/l4qViTz.png" alt="mobile menu trigger" /></div>
                    }
                    {
                        this.state.isMobileDropDownTriggered ?
                            <nav className="mobile-menu">
                                <ul className="mobile-menu-list">
                                    <li className="mobile-nav-item" onClick={this.toggleMobileDropDown}><Link to={'/'}>About</Link></li>
                                    <li className="mobile-nav-item" onClick={this.toggleMobileDropDown} ><Link to={'/firsttimejumpers'}>First Time Jumpers</Link></li>
                                    <li className="mobile-nav-item" onClick={this.toggleMobileDropDown} ><Link to={'/experiencedjumpers'}>Experienced Jumpers</Link></li>
                                    <li className="mobile-nav-item" onClick={this.toggleMobileDropDown} ><Link to={'/pricing'}>Pricing</Link></li>
                                    <li className="mobile-nav-item" onClick={this.toggleMobileDropDown} ><Link to={'/FAQs'}>FAQs</Link></li>
                                    <li className="mobile-nav-item" onClick={this.toggleMobileDropDown} ><Link to={'/bookaskydive'}>Book a Skydive</Link></li>
                                    <li className="mobile-nav-item" onClick={this.toggleMobileDropDown} ><Link to={'/contact'}>Contact</Link></li>
                                    {/* <li onClick={this.toggleMobileDropDown}><Link to={'/'}> List of Resources </Link></li>
                                    <li onClick={this.toggleMobileDropDown}><Link to={'/map'}> Map </Link></li>
                                    <li onClick={this.toggleMobileDropDown}><Link to={'/links'}> Links </Link></li>
                                    <li onClick={this.toggleMobileDropDown}><Link to={'/numberindex'}> Number Index </Link></li>
                                    <li onClick={this.toggleMobileDropDown}><Link to={'/mission'}> Mission </Link></li>
                                    <li onClick={this.toggleMobileDropDown}><Link to={'/useraccounts'}> User Accounts </Link></li> */}
                                </ul>
                            </nav>
                            : null
                    }

                </div>
                <nav className="regular-menu">
                    <ul>
                        <li className="regular-nav-item"><Link to={'/'}>About</Link></li>
                        <li className="regular-nav-item"><Link to={'/firsttimejumpers'}>First Time Jumpers</Link></li>
                        <li className="regular-nav-item"><Link to={'/experiencedjumpers'}>Experienced Jumpers</Link></li>
                        <li className="regular-nav-item"><Link to={'/pricing'}>Pricing</Link></li>
                        <li className="regular-nav-item"><Link to={'/FAQs'}>FAQs</Link></li>
                        <li className="nav-button regular-nav-item"><Link to={'/bookaskydive'}>Book a Skydive</Link></li>
                        <li className="nav-button regular-nav-item"><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                </nav>
            </Wrapper>
        )
    }
}

