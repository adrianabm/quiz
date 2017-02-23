import React from 'react'

const Counter = (props) => {
  return (
    <div className="float-right">
      Question <span>{ props.counter }</span> of <span>{ props.total }</span>
    </div>
  )
}

export default Counter
