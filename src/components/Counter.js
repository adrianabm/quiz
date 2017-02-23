import React from 'react'

const Counter = (props) => {
  return (
    <div className="counter">
      Question <span>{ props.counter }</span> of <span>{ props.total }</span>
    </div>
  )
}

export default Counter
