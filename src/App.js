import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import SearchCity from "./components/SearchCity"
import Cities from "./components/Cities"

class App extends Component {
  constructor() {
    super()
    this.state = {
      cities: []
    }
  }

  async getCityData(cityName, countryName) {
    await axios.get(`http://localhost:4000/get-city-data/${countryName}/${cityName}`)
      .then((response) => {
        let city = {
          name: cityName,
          temperature: response.data.temperature,
          humidity: response.data.humidity,
          wind: response.data.wind,
          sky: response.data.sky,
          icon: response.data.icon
        }

        let newCities = [...this.state.cities]
        newCities.unshift(city)
        this.setState({
          cities: newCities
        }, function () {
          console.log(this.state.cities)
        })
      })
  }

  addCity = (cityName, countryName) => {
    if(this.state.cities.find(c => c.name === cityName)){
      alert(cityName + " is already here:)")
      return
    }
    console.log(cityName);
    console.log(countryName);
    this.getCityData(cityName, countryName);
  }

  render() {

    return (
      <div className="App">
        <SearchCity addCity={this.addCity} />
        <Cities cities={this.state.cities} />
      </div>
    )
  }
}

export default App;
