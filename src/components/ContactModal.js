import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 80%;
    height: 80%;
    background-color: white;
    position: absolute;
    z-index: 1;
    top: 400px;
    border-radius: 5px;
    /* border: 5px #2A6523 solid; */
    border: 5px #3D3D3D solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    .links {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    h1 {
        margin: 40px;
    }
    .contact-modal-link {
        color: #3D3D3D;
    }
`

const Pic = styled.img`
    width: 20px;
    height: 20px;
    /* position: fixed;
    right: 30px;
    top: 30px; */
    align-self: flex-end;
    margin: 30px 30px 0 0;
`

export default class ContactModal extends Component {

    closeContactModal = () => {
        
    }

    render() {
        return (
            <Wrapper>
                <Pic src="https://i.imgur.com/ssmtzqs.png" alt="exit"/>
                <h1 className="contact-title">CONTACT US</h1>
                <div className="links">
                    <a className="contact-modal-link" href="mailto:info@skydiveohio.com">Email: info@skydiveohio.com</a>
                    <a className="contact-modal-link">Phone #: 937-372-0700</a>
                </div>
            </Wrapper>
        )
    }
}
