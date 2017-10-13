import React, { Component } from 'react';
import HogTile from './HogTile'



class HogsIndex extends Component {

  sortByName = () => {
    const hoggies = [...this.props.hogs]
    return hoggies.sort((a,b) =>  a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
  }

  filterHogs = (hogs) => {
    return hogs.filter((hog) => hog.name.includes(this.props.filter))
  }

  renderHogs = () => {
    let hogs = this.props.hogs
    if (this.props.sorted) {
      hogs = this.sortByName()
    }
    let filterSortedHogs = this.filterHogs(hogs)
    return filterSortedHogs.map((hog) => { return < HogTile {...hog} />})
  }

  render() {
    return (<div>{this.renderHogs()}</div>)
  }

}

export default HogsIndex;
