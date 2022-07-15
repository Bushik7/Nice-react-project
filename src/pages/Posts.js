import React, { useState, useEffect, useRef } from 'react'
import { usePosts } from '../hooks/usePosts'
import { useFetching } from '../hooks/useFetching'
import { getPagesCount } from '../utils/pages'
// import { getPagesArray } from '../utils/pages'
import PostList from '../Components/PostList'
import MyForm from '../Components/UI/PostForm/PostForm'
import PostFilter from '../Components/UI/Filter/PostFilter'
import MyModal from '../Components/UI/Modal/MyModal'
import MyButton from '../Components/UI/Button/MyButton'
import PostService from '../API/PostService'
import Loader from '../Components/UI/Loader/Loader'
import { useObserver } from '../hooks/useObserver'
import MySelect from '../Components/UI/Select/MySelect'
// import Pagination from '../Components/UI/Pagination/Pagination'

export default function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  //const pagesArray = getPagesArray(totalPages)
  const lastElement = useRef()

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page)
      setPosts([...posts, ...response.data])
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPagesCount(totalCount, limit))
    }
  )

  useObserver(lastElement, page < totalPages, isPostsLoading, () =>
    setPage(page + 1)
  )

  useEffect(() => {
    fetchPosts(limit, page)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => setPosts(posts.filter((p) => p.id !== post.id))

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  // const changePage = (page) => {
  //   setPage(page)
  // }

  return (
    <div className='App'>
      <MyModal visible={modal} setVisible={setModal}>
        <MyForm create={createPost} />
      </MyModal>

      <MyButton style={{ marginTop: 30 }} onPointerDown={() => setModal(true)}>
        Create post
      </MyButton>

      <div className='lineHorizontal' />

      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue='Stack of pages...'
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25' },
        ]}
      />

      {postError && <h1 className='error'>Error {postError}</h1>}

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="The Post's List"
      />

      <div ref={lastElement} style={{ height: 20 }} />

      {isPostsLoading && <Loader />}

      {/* <Pagination pagesArray={pagesArray} changePage={changePage} page={page} /> */}
    </div>
  )
}
