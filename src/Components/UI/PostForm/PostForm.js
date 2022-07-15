import { React, useState } from 'react'
import MyInput from '../Input/MyInput'
import MyButton from '../Button/MyButton'
import classes from './PostForm.module.css'

export default function PostForm({ create }) {
  const [post, setPost] = useState({
    title: '',
    body: '',
  })
  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post,
      id: Date.now(),
    }
    create(newPost)
    setPost({ title: '', body: '' })
  }

  return (
    <fieldset className={classes.myForm}>
      <legend>Create the new post</legend>
      <MyInput
        type='text'
        placeholder='Enter title'
        value={post.title}
        onChange={(e) => {
          setPost({ ...post, title: e.target.value })
        }}
      />
      <MyInput
        type='text'
        placeholder='Enter text'
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <MyButton onClick={addNewPost}>Create</MyButton>
    </fieldset>
  )
}
