import React, { Component } from 'react'

class EndScreen extends Component {
  render() {
    return (
      <div>
        End of the Quiz
        <p>You made { this.props.score } points</p>
      </div>
    )
  }
}

export default EndScreen
