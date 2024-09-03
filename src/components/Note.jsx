import React from 'react'


function Note (props) {
  return (
    <div className='note'>
        <h4>{props.title}</h4>
        <p>{props.content}</p>
    </div>
  )
}

export default Note