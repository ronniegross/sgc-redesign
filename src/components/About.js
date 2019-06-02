import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Slideshow from './Slideshow'
import QuickLinksBox from './QuickLinksBox.js'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-content: center; */
    .quick-link-box-container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .slideshow-container {
        width: 60%;
        margin: 0 auto;
    }
    .history-container {
        margin: 15px 70px 30px 70px;
    }
    h1 {
        margin-top: 30px;
    }
    .legend-title {
        margin-bottom: 15px;
    }
    a {
        text-decoration: none;
    }
    .pic-title {
        margin: 40px 0 15px 0;
    }
    @media (max-width: 850px) {
        .quick-links-title {
            margin: 30px;
        }
    }
    @media (max-width: 700px) {
        .quick-link-box-container {
            flex-direction: column;
            align-items: center;
            /* justify-content: center; */
        }
    }
`

const Pic = styled.img`
    width: 90%;
`

const TandemInfo = {
    title: "Tandem Program",
    info: "Looking for the thrill of your life? Curious about your first skydive? Start here!"
}

const Tandem = () => {
    return <QuickLinksBox quickLink={TandemInfo} />
}

const StaffInfo = {
    title: "Staff",
    info: "Meet the people who will be curating your once in a lifetime experience."
}

const Staff = () => {
    return <QuickLinksBox quickLink={StaffInfo} />
}

const StaticLineInfo = {
    title: "Static Line Program",
    info: "Learn how to become a licensed skydiver. Classes held weekly."
}

const StaticLine = () => {
    return <QuickLinksBox quickLink={StaticLineInfo} />
}

export default class About extends Component {
    render() {
        return (
            <Wrapper>
                <div>
                    <h1 className="quick-links-title">Thinking about making your first skydive? Check out our quick links to learn more!</h1>
                    <div className="quick-link-box-container">
                        <Link to={'/firsttimejumpers'}><QuickLinksBox quickLink={TandemInfo} /></Link>
                        <Link to={'/firsttimejumpers'}><QuickLinksBox quickLink={StaffInfo} /></Link>
                        <Link to={'/firsttimejumpers'}><QuickLinksBox quickLink={StaticLineInfo} /></Link>
                        {/* <div className="tandem-program quick-link-box">

                        </div>
                        <div className="staff quick-link-box">

                        </div>
                        <div className="static-line-program quick-link-box">

                        </div> */}
                    </div>
                    <h1 className="legend-title">The legend of Skydive Greene County</h1>
                    {/* <div className="slideshow-container">
                        <Slideshow />
                    </div> */}
                    <Pic src="https://i.imgur.com/MqRrjVS.jpg" alt="the legend"></Pic>
                    <div className="history-container">
                        <p>Skydive Greene County is located in Xenia, Ohio since 1961 just outside of the greater Dayton-Miami Valley area and is within a reasonable driving distance of major metropolitan areas including Cincinnati, Columbus, Cleveland, Richmond, Indianapolis, and Indiana.

                            From the second you arrive at our Drop Zone, to the moment you leave you will feel an excitement like never before. The excitement of SKYDIVING!!!

                            Located on a private airport, Skydive Greene County offers a large landing area, a covered hanger for packing, rigging services, and a great staff for tandem skydives, students, and experienced skydivers.</p>
                    </div>
                    <h1 className="pic-title">Pic of the Week</h1>
                    <Pic src="https://i.imgur.com/25lYGz7.jpg" alt="pic of the week"></Pic>
                    <div className="history-container">
                        <p>Meet our newest Static Line Instructors!</p>
                    </div>
                </div>
            </Wrapper>
        )
    }
}
