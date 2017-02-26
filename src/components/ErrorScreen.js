import React from 'react'

const ErrorScreen = (props) => {
  return (
    <div className="panel">
      <div className="panel-header">
        <h3>We are sorry!</h3>
      </div>
      <div className="panel-body">
        <h4>{ props.message }</h4>
      </div>
    </div>
  )
}

export default ErrorScreen
