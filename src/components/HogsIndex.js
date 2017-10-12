import React, { Component } from 'react';
import Hogs from '../porkers_data'
import HogTile from './HogTile'


class HogsIndex extends Component {

  render(){
    let hogTiles = Hogs.map((h) => < HogTile {...h} />)
    return (
      <div>{hogTiles}</div>
    )
  }

}

export default HogsIndex;
