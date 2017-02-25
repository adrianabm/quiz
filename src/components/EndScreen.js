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
          <h3>The End</h3>
        </div>
        <div className="panel-body">
          <h3 className="align-center">Congratulations! You made <span className="contrast-color">{ this.props.score }</span> points</h3>
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
