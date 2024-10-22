import React from 'react'

export const TodoList = (props) => {
    const style={ 'cursor' : 'pointer', 'fontSize' : '20px', 'color' : 'red'}
    const styleli={'fontSize' : '26px'}
  return (

   <li style={styleli}>{props.item} &nbsp;  &nbsp;   &nbsp; <span style={style} onClick={(e) => {
    props.deleteListitem(props.index)
   }} >x</span></li>
  )
}
