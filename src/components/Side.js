import React from 'react'

const Side = (props) => {
  console.log('inside side')
  return (
    <div>
      {props.sides.join(", ")}
    </div>
  )
}

export default Side
