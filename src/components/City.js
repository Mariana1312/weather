import React, { Component } from 'react';

class City extends Component {
    render(){
        let city = this.props.city

        return(
            <div className={this.props.className}>
                {city.name}: {city.temperature}°C, {city.humidity}, {city.wind}s km/h, {city.icon}
            </div>
        )
    }
}

export default City;