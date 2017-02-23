import React, { Component } from 'react'

class EndScreen extends Component {
  render() {
    return (
      <div className="quiz">
        <div className="quiz-header">
          <h3>End of the Quiz</h3>
        </div>
        <div className="quiz-body">
          <h4>Congratulations! You made { this.props.score } points</h4>
        </div>
      </div>
    )
  }
}

export default EndScreen
