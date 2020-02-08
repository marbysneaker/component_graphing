import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { stat } from 'fs';
import Form from './components/Form/Form.js';
import Nav from './components/Nav/nav.js';
import BarChart from './components/BarChart/BarChart.js';
console.log('running')

class App extends Component {

state = {
  test : ["GBP", "USD", "SGD", "NZD","AUD"],
  countries: ["not", "fetching"],
  rates : ["not", "fetching"],
  values : ["not", "fetching"],
  display: "price per EUR",
  url:"https://api.exchangeratesapi.io/latest",
  value: 'EUR',
  displayValue:'EUR'
}

doFetch = () => {
  console.log('Hitting refresh', this.state.searchBox);
  const dataOne = [];
  
  fetch(this.state.url)
    .then(response => response.json())
    .then(data => {
    console.log('receiving data', data);
    dataOne.push(data)

      this.setState({
        base : dataOne[0]["base"],
        date : dataOne[0]["date"],
        rates : dataOne[0]["rates"],
        countries : Object.keys(dataOne[0]["rates"]),
        values : Object.values(dataOne[0]["rates"])
        
      });
      for (let i of Object.keys(dataOne[0]["rates"])){
        this.setState({
          id : i,
        })
      }
    });
}
componentDidMount = (ev) => {
  this.doFetch();
}
myFunction = (country) =>{
  const addCountry = this.state.test.concat([]);
  if(addCountry.includes(country)){
    let n = addCountry.indexOf(country);
    console.log(n);
    addCountry.splice(n,1);
    
  }
  else{

    addCountry.push(country);
  }
  
  this.setState({
    test: addCountry
  })
}
displayClick = (rates,country) =>{
  let Currency = this.state.displayValue;
  let displayText = '1 '+Currency+ ' = '+ rates + country;
  this.setState({display: displayText})
}

newBase = () => { 
  let base = this.state.value;
  this.setState({displayValue:this.state.value})
  let apiUrl= 'https://api.exchangeratesapi.io/latest?base='
  
  this.setState({url:apiUrl+base,})
  console.log(this.state.url);
  this.doFetch();
  this.render();
  }





render() {
  console.log(this.state.value)

  let formList =[]
  
  
  this.state.countries.map((country, index)=>(
          
    formList.push(<option>{country}</option>)

  ))
  return (
    
    <div className="App">
      <header className="App-header">
      </header>
        <div className="title">
      
          <h1>Currency Graph</h1>
        </div>
        <div className = "nav">
        {
          this.state.countries.map((country, index) => (
            <Nav keys={index} onClick={() => this.myFunction(country, index)}
              country = {country}
            />
          ))
        }
        </div>
   
        <div className="display-box">{this.state.display}</div>

        <div className="graph-main">
          <div className="graph-box">
              {this.state.test.map((country, index) => (
                                    
                  <BarChart index={index} onClick={() => this.displayClick(this.state.rates[country],country)} style={{height: (( 1.00 / (this.state.rates[country]))*100)+"%"}}
                    country = {country}
                />
                ))}
                </div>
              </div>
        
              <Form
              onChange ={(e) => this.setState({ value: e.target.value })}
              formList = {formList}
              onClick ={() => this.newBase()}
              />
            </div>
    
  );
  }
}
export default App;
// <div> {
//   this.state.rates.map(function (rates) {
//      return  (<span key={rates.Id}>{rates.Description}</span>)
//   })
// }

