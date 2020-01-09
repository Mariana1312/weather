import React, { Component } from 'react';
import City from "./City"

class Cities extends Component {
    render(){
        let cities = this.props.cities
        
        return(
            <div>
                {cities.map((c,i) => <City key={i} city={c}/>)}
            </div>
        )
    }
}

export default Cities;