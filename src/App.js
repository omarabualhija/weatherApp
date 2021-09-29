
import List from './components/List'
import Add from './components/Add'
import axios from 'axios';
import React, { Component } from 'react'
import './components/all.css'

export default class App extends Component {
  state={
   
    Country:"",
    city:"",
    temp:"",
    resors:"",

  }
  

  handelform=async (e)=>
  {
   e.preventDefault();
   let city=e.target.elements.city.value;
   let country=e.target.elements.country.value;
   let response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=40fe10bd216a630f52392be520c7a6cf`)
  
    this.setState({
    Country:response.data.sys.country,
    city:response.data.name,
    temp:response.data.main.temp,
    resors:response.config.url,
  })

    }

  render() {
    return (
      <div className="bage">
             <div className="box">

        <Add handelform={this.handelform}></Add>
        <List data={this.state}></List>
        <div className="footer">
        <a target="_blank" rel="noopener noreferrer" href="https://openweathermap.org/">  Source</a >
        <span> `Made with Love : Omar Abualhija` </span>
        </div>
      </div>
      </div>
    )
  }
}

