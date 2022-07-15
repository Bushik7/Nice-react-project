import React from 'react'
import cl from './CommentItem.module.css'

export default function CommentItem(props) {
  return (
    <div className={cl.comment__wrapper}>
      <h3 className={cl.comment__name}>{props.name}</h3>
      <span className={cl.comment__email}>{props.email}</span>
      <p className={cl.comment__body}> {props.body}</p>
    </div>
  )
}
