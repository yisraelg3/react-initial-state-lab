// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends Component {

    state = {
        secondsLeft : this.props.initialCount
    }
    render() {
        let bombTimer = this.state.secondsLeft === 0 ? <h4>Boom!</h4> : <h4>{this.state.secondsLeft} seconds left before I go boom!</h4>
    return (
      <div>
        {bombTimer}
      </div>
    )
  }
}
