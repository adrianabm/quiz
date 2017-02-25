import React, { Component } from 'react'

class HighScore extends Component {
  render() {
    const highscore = this.props.highscore
    let scores = highscore.map((singleScore, i) => {
      return (
        <li key = { singleScore.id }>
          <span className="ranking-number"><strong>{ i + 1}.</strong></span>
          { singleScore.name }
          <span className="float-right"> { singleScore.score }</span>
        </li>
      )
    })

    return (
      <div className="highscore">
        <h4 className="contrast-color align-center">
          <span><i className="fa fa-trophy" aria-hidden="true"></i></span>
          Ranking
          <span><i className="fa fa-trophy" aria-hidden="true"></i></span>
        </h4>
        <ul>{ scores }</ul>
      </div>
    )
  }
}

export default HighScore
