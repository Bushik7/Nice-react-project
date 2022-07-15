import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import CommentItem from '../Components/CommentItem/CommentItem'
import Loader from '../Components/UI/Loader/Loader'
import { useFetching } from '../hooks/useFetching'

export default function PostIdPage(props) {
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const params = useParams()
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })
  const [fetchCommentsByPostId, areCommentsLoading, commentsError] =
    useFetching(async (id) => {
      const response = await PostService.getCommentsByPostId(id)
      setComments(response.data)
    })

  useEffect(() => {
    fetchPostById(params.id)
    fetchCommentsByPostId(params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {error && <h1 className='error'>Error {error}</h1>}
      {commentsError && <h1 className='error'>Error {commentsError}</h1>}

      <h2 className='heading'>Post №{params.id}</h2>

      {isLoading || areCommentsLoading ? (
        <Loader />
      ) : (
        <div>
          <h1 className='heading'>{post.title}</h1>
          <div>{post.body}</div>
          <div className='lineHorizontal' />
          <h3 className='heading'>Comments</h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {comments.map((comment) => (
              <CommentItem
                key={comment.id}
                name={comment.name}
                body={comment.body}
                email={comment.email}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
