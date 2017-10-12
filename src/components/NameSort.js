import React, { Component } from 'react';

class NameSort extends Component {
  render(){
    return (
      <p>
        <input type="checkbox" onClick={this.props.setSort}></input>
        <label>sort by name</label>
      </p>
    )
  }
}

export default NameSort
