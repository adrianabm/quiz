import React, { Component, PropTypes } from 'react'
import Quiz from '../components/Quiz'
import { Link } from 'react-router'

class Home extends Component {
  render() {
    return (
      <div className="panel">
        {/* TODO: Separate component for quiz header */}
        <div className="panel-header">
          <h3>What are your favorite things?</h3>
          <p>Check how many points you can earn with this awesome quiz!</p>
        </div>
        <div className="panel-body">
          <p>Please enter your name before starting the quiz.</p>
          <input placeholder="Your name here" />
          <Link className="button" to={ `/quiz` }>Yay! Let's start it!</Link>
        </div>
      </div>
    )
  }
}

export default Home
