import React, { Component } from 'react';
import City from "./City"


class Cities extends Component {
    render() {
        let cities = this.props.cities
        
        return (
            cities.length === 0 ? null :
            <div className="container">
                <div className="firstCityContainer">
                    <City city={cities[0]} IsFirstCity={true} />
                </div>
                <div className="otherCities">
                    {cities.slice(1).map((c, i) => <City key={i} city={c} IsFirstCity={false} />)}
                </div>
            </div>
        )
    }
}

export default Cities;