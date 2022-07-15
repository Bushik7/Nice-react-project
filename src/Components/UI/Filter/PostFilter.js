import React from 'react'
import MyInput from '../Input/MyInput'
import MySelect from '../Select/MySelect'

export default function PostFilter({ filter, setFilter }) {
  return (
    <div>
      <MyInput
        placeholder='Search...'
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        defaultValue='Ordered by the...'
        options={[
          { value: 'id', name: 'Id' },
          { value: 'body', name: 'Body' },
          { value: 'title', name: 'Title' },
        ]}
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
      />
    </div>
  )
}
