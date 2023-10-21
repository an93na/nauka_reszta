import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement } from './counterSliceEx3'

export const Decrease = (props) => {
    const {value} = props
    const dispatch = useDispatch()
  return (
    <button onClick={() => dispatch(decrement(value))}>{-value}</button>
  )
}
