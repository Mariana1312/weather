import React, { Component } from 'react';
import City from "./City"

class Cities extends Component {
    render(){
        let cities = this.props.cities
        
        return(
            <div id="cities">
                {cities.map((c,i) => <City key={i} city={c} className = {i ? "secondary": "primary"}/>)}
            </div>
        )
    }
}

export default Cities;