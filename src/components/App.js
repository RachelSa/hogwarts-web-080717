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
      filter: "",
      hogs: Hogs
    }

  }

  setSort = () => {
    this.setState((prevState, curProps) => {
      return {sorted: !prevState.sorted}
    })
  }


  setFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
      < Nav />
      < NameSort setSort={this.setSort}/>
      < HogFilter setFilter={this.setFilter} />
      < HogsIndex sorted={this.state.sorted} filter={this.state.filter} hogs={this.state.hogs}/>
      </div>
    )
  }
}




export default App;
