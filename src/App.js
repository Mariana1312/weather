import React, { Component } from 'react';
import './App.css';
import SearchCity from "./components/SearchCity"
import Cities from "./components/Cities"

class App extends Component{
  constructor(){
    super()
    this.state = {
      cities: [
        {name: "Tel Aviv", temperature: 16},
        {name: "Jerusalem", temperature: 10}
      ]
    }
  }


  addCity = (city) => {
    let newCities = [...this.state.cities]
    newCities.unshift({name: city})
    this.setState({
      cities: newCities
    }, function(){
      console.log(this.state.cities)
    })
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
