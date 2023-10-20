import React from 'react'

export const Decrease = (props) => {
    const {value} = props
  return (
    <button>{-value}</button>
  )
}
