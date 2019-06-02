import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    .staff-title {
        margin: 35px 0 20px 0;
    }
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
        justify-content: center;
        align-items: center;
    }
    .staff-pic {
        width: 250px;
        height: 250px;
        object-fit: cover;
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
                <h1 className="staff-title" >MEET OUR STAFF</h1>
                <StaffWrapper>
                    <div className="staff-pic-container">
                        <img className="staff-pic" src="https://cdn.photofunia.com/effects/skydiver/examples/tga0n8_o.jpg" alt="Dennis" />
                        <h2>Dennis</h2>
                        <p>Static Line Instructor</p>
                    </div>
                    {/* <div className="staff-pic-container">
                        <img className="staff-pic" src="https://i.imgur.com/TPGMhWJ.jpg" alt="Damien" />
                        <h2>Damon</h2>
                        <p>The packer formally known as Skylar</p>
                    </div> */}
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
