import React, { Component } from 'react'
import { connect } from 'react-redux'
import saveScore from '../actions/save_score'
import HighScore from './HighScore'

class EndScreen extends Component {
  componentWillMount() {
    let user = this.props
    this.props.saveScore(user)
  }

  render() {
    const { highscore, isLoading } = this.props.highscore

    if (isLoading) {
      return <div className="panel">Loading...</div>
    }
    return (
      <div className="panel">
        <div className="panel-header">
          <h3>End of the Quiz</h3>
        </div>
        <div className="panel-body">
          <h4>Congratulations! You made { this.props.score } points</h4>
          <HighScore highscore = { highscore } />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ highscore }) {
  return { highscore }
}

export default connect(mapStateToProps, { saveScore })(EndScreen)
