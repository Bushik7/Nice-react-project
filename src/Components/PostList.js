import React from 'react'
import PostItem from './PostItem'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default function PostList({ posts, title, remove }) {
  if (!posts.length)
    return (
      <h1 className='heading'>
        The Post's List
        <br />
        is empty
      </h1>
    )
  return (
    <div>
      <h1 className='heading'>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames='post'>
            <PostItem number={index + 1} remove={remove} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}
