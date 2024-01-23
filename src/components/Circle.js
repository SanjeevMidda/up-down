import React from 'react'

function Circle({state}) {
  return (
    <div className={state? "circle" : "circle circleTransform"}></div>
  )
}

export default Circle