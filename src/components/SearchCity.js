import React, { Component } from 'react';
import '../styles/search.css'


class SearchCity extends Component {
    constructor() {
        super()
        this.state = {
            city: "",
            country: ""
        }
    }

    handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        this.setState({
            [name]: value
        })
    }

    addCity = () => {
        let cityName = this.state.city
        let countryName = this.state.country
        this.props.addCity(cityName, countryName)
    }

    render() {
        return (
            <div className="search">
                <h1>WEATHER</h1>
                <input id="input" name="city" type="text" placeholder="City" onChange={this.handleInput}></input>
                <input id="input" name="country" type="text" placeholder="Country" onChange={this.handleInput}></input>
                <button onClick={this.addCity}><i className="fa fa-search"></i></button>
            </div>
        )
    }
}

export default SearchCity;