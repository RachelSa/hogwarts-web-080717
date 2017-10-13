import React, { Component } from 'react';
import '../App.css';
import Hogs from '../porkers_data'
import Nav from './Nav'
import HogsIndex from './HogsIndex'
import NameSort from './NameSort'
 import HogFilter from './HogFilter'

class App extends Component {
  constructor() {
    super()
    this.state = {
      sorted: false,
      filter: ""
    }
  }

  setSort = () => {
    this.setState((previousState, currentProps) => {
      return {sorted: !previousState.sorted}
    })
  }

  setFilter = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
      < Nav />
      < NameSort setSort={this.setSort}/>
      < HogFilter setFilter={this.setFilter}/>
      < HogsIndex filter={this.state.filter} sorted={this.state.sorted} hogs={Hogs}/>
      </div>
    )
  }
}




export default App;
