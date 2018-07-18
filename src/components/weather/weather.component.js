import React, { Component } from 'react';
import axios from 'axios';
import './weather.component.css';
import APP_CONSTANTS from '../../config/constants'
import WeatherCard from "../weather-card/weather-card";
import WeatherActions from "../../actions/weatherActions";
/*import WeatherStore from '../../store/weatherStore';*/

class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: '',
            weatherData: []
        };
        this.updateState = this.updateState.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    updateState(e) {
        this.setState({location: e.target.value});
    }
    onSubmit(){

        WeatherActions.searchCity(this.state.location);

        let url = `${APP_CONSTANTS.API_URL}?q=${this.state.location}&appid=${APP_CONSTANTS.API_KEY}`;
        axios.get(url)
            .then(res => {
                console.log(res.data.list);
                this.setState({weatherData: res.data.list||[]});
            })
    }

    render() {
        return (
            <div className="container weather-container">
                Search for a city name to get weather : <input type = "text" value = {this.state.location}
                       onChange = {this.updateState} /> <button onClick={this.onSubmit}>Search</button>
                {this.state.weatherData.length?<div className="row">
                    <div className='col-12'>Weather data for the location  {this.state.location} is :</div>
                        {
                            this.state.weatherData.map((item, i)=>{
                                const timestamp = item.dt;
                                const date = new Date(timestamp*1000);
                                let dayOfWeek = APP_CONSTANTS.DAYS[date.getDay()];

                                return <WeatherCard weatherData={item} date={date} dayOfWeek={dayOfWeek} key={i}/>
                            })
                        }
                </div>:null}
            </div>
        );
    }
}

export default Weather;