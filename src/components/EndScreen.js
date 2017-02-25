import React, { Component } from 'react'
import { connect } from 'react-redux'
import saveScore from '../actions/save_score'

class EndScreen extends Component {
  componentWillMount() {
    let user = this.props
    this.props.saveScore(user)
  }

  render() {
    return (
      <div className="panel">
        <div className="panel-header">
          <h3>End of the Quiz</h3>
        </div>
        <div className="panel-body">
          <h4>Congratulations! You made { this.props.score } points</h4>
        </div>
      </div>
    )
  }
}

export default connect(null, { saveScore })(EndScreen)
