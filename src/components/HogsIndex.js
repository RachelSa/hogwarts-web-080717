import React, { Component } from 'react';

import HogTile from './HogTile'


class HogsIndex extends Component {

  sortByName = () => {
    const hoggies = [...this.props.hogs]
    return hoggies.sort((a,b) =>  a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
  }

  filterThoseHogs = (hogs) => {
    return hogs.filter(hog => hog.name.includes(this.props.filter))
  }

  hogsToRender = () => {
    let sortHogs = this.props.sorted ? this.sortByName() : this.props.hogs
    let sortFilterHogs = this.props.filter ? this.filterThoseHogs(sortHogs) : sortHogs
    return sortFilterHogs.map((h) => < HogTile {...h} />)
  }


  render(){
    return (
      <div>{this.hogsToRender()}</div>
    )
  }

}

export default HogsIndex;
