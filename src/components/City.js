import React, { Component } from 'react';
import '../styles/city.css'


class City extends Component {

    render() {
        let city = this.props.city
        let IsFirstCity = this.props.IsFirstCity
       
        return (
            <div className={IsFirstCity ? "firstCityContainer" : "city"}>
                {city.name.charAt(0).toUpperCase() + city.name.slice(1)}
                <br></br>
                {city.temperature}
                <br></br>
                {city.sky}
                <br></br>
                <img src={city.icon}></img>
                <br></br>
                {city.humidity}
                <br></br>
                Wind Speed: {city.wind} km/h
            </div>
        )
    }
}

export default City;