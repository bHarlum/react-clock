import React, {Component} from 'react';
import Clock from "./Clock";
import axios from "axios";
const openWeatherMap = 'https://api.openweathermap.org/data/2.5/weather?';
// const apiK = "71bda40a3386431d6ec6aae4dd785664";


class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            weather: null,
        };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({latitude: position.coords.latitude});
                axios.get(`${openWeatherMap}lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=${process.env.REACT_APP_WEATHER_KEY}`)
                .then(response => {
                    const temp = response.data.main.temp;
                    const {description, icon} = response.data.weather[0];
                    this.setState({weather: {temp, description, icon}});
                    console.log(this.state.weather.temp);
                    console.log("Weather state has been set");
                });
            },
            error => console.log(error)
        );
    }

    isItWarm(){
        if(this.state.weather.temp > 20){
            console.log(this.state);
            return true;
        }
        return false;
    }

    getClockIcon() {
        if(this.isItWarm()){
            return "sun.svg";
        }
        return "snowflake.svg";
    }

    render() {

        return (
            <>
            {this.state.latitude}
            <div>
                <Clock 
                    icon={this.state.weather && `http://openweathermap.org/img/wn/${this.state.weather.icon}@2x.png`}
                    timezone={"Sydney/Australia"} 
                    date={new Date()} 
                />
            </div>
            {this.state.weather && <div>{`${this.state.weather.temp}°c and ${this.state.weather.description}`}</div>}
            </>
        );
    }
}

export default App;
