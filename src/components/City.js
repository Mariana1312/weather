import React, { Component } from 'react';

class City extends Component {
    render(){
        let city = this.props.city

        return(
            <div>
                {city.name}
                {city.temperature}
            </div>
        )
    }
}

export default City;