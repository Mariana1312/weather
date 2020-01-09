import React, { Component } from 'react';

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
        console.log(this.state.name);
        this.props.addCity(this.state.name)
    }

    render(){
        return(
            <div>
                <input id="cityName" name="city" type="text" placeholder="Search for a city" onChange={this.handleInput}></input>
                <button onClick={this.addCity}>Search</button>
            </div>
        )
    }
}

export default SearchCity;