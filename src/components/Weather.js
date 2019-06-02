import React, { Component } from 'react'
import unirest from 'unirest'

export default class Weather extends Component {

    state = {
        weather: []
    }

    componentDidMount = () => {
        unirest.get("https://community-open-weather-map.p.rapidapi.com/weather?lat=39.683497266&lon=-83.936162922&callback=test&id=2172797&units=%22metric%22+or+%22imperial%22&mode=json&q=xenia%2Cus")
            .header("X-RapidAPI-Host", "community-open-weather-map.p.rapidapi.com")
            .header("X-RapidAPI-Key", "dff5fb0b52msh532bbdf434ca2a9p15833ajsn3574425ac354")
            .end(function (result) {
                console.log(result.status, result.headers, result.body);
            });
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
