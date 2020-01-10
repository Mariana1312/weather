import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import SearchCity from "./components/SearchCity"
import Cities from "./components/Cities"

class App extends Component{
  constructor(){
    super()
    this.state = {
      cities: [
        {name: "Tel Aviv", temperature: 16},
        {name: "Jerusalem", temperature: 10},
        {name: "New York", temperature: 7}
      ]
    }
  }

  async getCityData(CITY) {
    await axios.get(`http://localhost:4000/get-city-data/${CITY}`)
      .then((response) => {
        let city = {
          name: CITY,
          temperature: response.data.temperature,
          humidity: response.data.Humidity,
          wind: response.data.Wind,
          icon: response.data.icon
        }

      let newCities = [...this.state.cities]
      newCities.unshift(city)
      this.setState({
        cities: newCities
      }, function(){
        console.log(this.state.cities)
      })
    })  
  }

  addCity = (cityName) => {
    let city = this.getCityData(cityName);
  }

  render(){

  return (
    <div className="App">
       <SearchCity addCity={this.addCity}/>
       <Cities cities={this.state.cities}/>
    </div>
  )
  }
}

export default App;
