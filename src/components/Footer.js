import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 150px 30px 30px 30px;
    h1 {
        color: #2A6523;
    }
`

export default class Footer extends Component {
    render() {
        return (
            <Wrapper>
                <div className="address">
                    <h1>177 South Monroe Siding</h1>
                    <h1>Xenia, Ohio 45385</h1>
                    <h1># 937-372-0700</h1>
                </div>
            </Wrapper>
        )
    }
}
