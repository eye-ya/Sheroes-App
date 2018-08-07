import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      isLoaded: true,
    }
  }

  componentDidMount() {
    this.fetchData();

  }

  fetchData(){
    fetch('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb')
    .then(response => response.json())
    .then(parsedJSON => console.log(parsedJSON.results))
  }
  render() {
      return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sheroes</h1>
        </header>
      </div>
    );
  }
}

export default App;
