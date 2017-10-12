import React, { Component } from 'react';
import HogTile from './HogTile'


class HogsIndex extends Component {

  sortByName = () => {
    const hoggies = [...this.props.hogs]
    return hoggies.sort((a,b) =>  a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
  }

}

export default HogsIndex;
