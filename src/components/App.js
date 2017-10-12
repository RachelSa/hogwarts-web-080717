import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogsIndex from './HogsIndex'

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < HogsIndex />
      </div>
    )
  }
}

export default App;
