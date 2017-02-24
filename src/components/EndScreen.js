import React from 'react'

const EndScreen = (props) => {
  return (
    <div className="panel">
      <div className="panel-header">
        <h3>End of the Quiz</h3>
      </div>
      <div className="panel-body">
        <h4>Congratulations! You made { props.score } points</h4>
      </div>
    </div>
  )
}

export default EndScreen
