import React from 'react'
import Avatar from './Avatar'
import Paragraphs from './Paragraphs'


function Card (props) {
    return (
        <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img} />
        </div>
        <div className="bottom">
          <Paragraphs paraInfo={props.phone}
          />
          <Paragraphs paraInfo={props.email}
          />
        </div>
      </div>
    )
}

export default Card
