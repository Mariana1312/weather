import React, { Component } from 'react';
// const puppeteer = require('puppeteer');
// const $ = require('cheerio');

class SearchCity extends Component {
    constructor(){
        super()
        this.state = {
            name: ""
        }
    }

    handleInput = (e) => {
        let value = e.target.value
         this.setState({
            name: value
        })
    }

    addCity = () => {
        let cityName = this.state.name
        console.log(cityName);

        this.props.addCity(cityName)
    }

    render(){
        return(
            <div id="input">
                <input id="cityName" name="city" type="text" placeholder="Search for a city" onChange={this.handleInput}></input>
                <button onClick={this.addCity}>Search</button>
            </div>
        )
    }
}

export default SearchCity;