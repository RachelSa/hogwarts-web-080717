import React, { Component } from 'react';

class HogFilter extends Component {


    render() {
      return (
        <div>
          <form>
            <input type="text" placeholder="filter hogs" onChange={this.props.setFilter}/>
          </form>
        </div>
      )
    }
}

export default HogFilter
