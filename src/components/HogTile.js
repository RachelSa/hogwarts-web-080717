import React, { Component } from 'react';

class HogTile extends Component {
  constructor(){
    super()
    this.state = {
      clicked: false
    }
  }

handleClick = () => {
  this.setState((previousState, currentProps) => {
    return {clicked:  !previousState.clicked}
  })
}

changeName = (name) => {
  return name.toLowerCase().split(" ").join("_")
}

render() {
  return(
    <div onClick={this.handleClick}>
      {this.state.clicked ?  `${this.props.name} - ${this.props["specialty"]}` : this.props.name}
    </div>
  )
}
}

export default HogTile
