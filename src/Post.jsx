import React from 'react'
import Rating from './Rating'


export default function Post(props){
    return(
      <div className={`wrapper-tile tile-${props.data.id}`}>
        <Rating data = {props.data.id}></Rating>
        <div className="rate">{props.data.rate}</div>
        <div className="post-title">{props.data.title}</div>
        <img className='post-image'src={`${props.data.imgUrl}`} alt={`"${props.data.altDescription}"`}/>
        <div className="experpt">{props.data.experpt}</div>
        <div className="author">{props.data.author}</div>
      </div>
    )
  }
