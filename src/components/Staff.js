import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const StaffWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    /* align-content: space-around; */
    margin-bottom: 50px;
    .staff-pic-container {
        /* width: 50px; */
        margin: 10px;
        display: flex;
        flex-direction: column;
    }
    .staff-pic {
        width: 250px;
    }
    h2 {
        margin-top: 10px;
    }
    p {
        font-size: 14px;
    }
`

export default class Staff extends Component {
    render() {
        return (
            <Wrapper>
                <h1>MEET OUR STAFF</h1>
                <StaffWrapper>
                    <div className="staff-pic-container">
                        <img className="staff-pic" src="https://cdn.photofunia.com/effects/skydiver/examples/tga0n8_o.jpg" alt="Dennis" />
                        <h2>Dennis</h2>
                        <p>Static Line Instructor</p>
                    </div>
                    <div className="staff-pic-container">
                        <img className="staff-pic" src="https://cdn.photofunia.com/effects/skydiver/examples/tga0n8_o.jpg" alt="Jim" />
                        <h2>Jim</h2>
                        <p>Owner and Founder</p>
                    </div>
                    <div className="staff-pic-container">
                        <img className="staff-pic" src="https://cdn.photofunia.com/effects/skydiver/examples/tga0n8_o.jpg" alt="Mike" />
                        <h2>Mike</h2>
                        <p>Pilot and Static Line Instructor</p>
                    </div>
                    <div className="staff-pic-container">
                        <img className="staff-pic" src="https://cdn.photofunia.com/effects/skydiver/examples/tga0n8_o.jpg" alt="Jeff" />
                        <h2>Jeff</h2>
                        <p>Tandem Instructor</p>
                    </div>
                    <div className="staff-pic-container">
                        <img className="staff-pic" src="https://cdn.photofunia.com/effects/skydiver/examples/tga0n8_o.jpg" alt="Tiffany" />
                        <h2>Tiffany</h2>
                        <p>Mainifest</p>
                    </div>
                </StaffWrapper>
            </Wrapper>
        )
    }
}
