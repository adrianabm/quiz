import React, { Component } from 'react'

class HighScore extends Component {
  render() {
    const highscore = this.props.highscore
    let scores = highscore.map((singleScore) => {
      return (
        <li key = { singleScore.id }>
          { singleScore.name }, { singleScore.score }
        </li>
      )
    })

    return (
      <div>
        <h4>Users HighScore Ranking</h4>
        <ul>{ scores }</ul>
      </div>
    )
  }
}

export default HighScore
