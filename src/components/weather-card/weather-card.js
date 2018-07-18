import React, { Component } from 'react';
import './weather-card.css'

class WeatherCard extends Component {
    render() {
        return (
            <div className="card col-3">
                <div className="card-body">
                    <h5 className="card-title">On {this.props.date.getUTCDate()},{this.props.dayOfWeek}</h5>
                    <p className="card-text">Temp: {this.props.weatherData.main.temp} F</p>
                    <p className="card-text">Pressure: {this.props.weatherData.main.pressure} Pa</p>
                    <p className="card-text">Humidity: {this.props.weatherData.main.humidity}</p>
                    <p className="card-text">Clouds: {this.props.weatherData.clouds.all} %</p>
                    <p className="card-text">Desc: {this.props.weatherData.weather[0].description}</p>
                </div>
            </div>
        );
    }
}

export default WeatherCard;