import React from 'react'
import cl from './Pagination.module.css'

export default function Pagination({ pagesArray, changePage, page }) {
  const currentPageStyles = [cl.page__bullets, cl.page__current].join(' ')
  return (
    <div className={cl.page__wrapper}>
      {pagesArray.map((p) => {
        return (
          <div
            key={p}
            onClick={() => changePage(p)}
            className={page === p ? currentPageStyles : cl.page__bullets}
          >
            {p}
          </div>
        )
      })}
    </div>
  )
}
