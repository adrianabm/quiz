import React, { Component } from 'react'

class ErrorScreen extends Component {
  render() {
    return (
      <div className="quiz">
        <div className="panel-header">
          <h3>We are sorry! :(</h3>
        </div>
        <div className="panel-body">
          <h4>Questions could not be loaded.</h4>
        </div>
      </div>
    )
  }
}

export default ErrorScreen
