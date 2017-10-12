import React, { Component } from 'react';

class HogTile extends Component {
  constructor(){
    super()
    this.state = {
      clicked: false
    }
  }

  handleClick = () => {
    let click = !this.state.clicked
    this.setState({
      clicked: click
    })
  }

  render(){
    return (
      this.state.clicked ? <div onClick={this.handleClick}>{this.props.name} - {this.props.specialty} </div> : <div onClick={this.handleClick}>{this.props.name} </div>
    )
  }
}

export default HogTile
