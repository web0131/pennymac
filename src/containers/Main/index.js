import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { TVCard } from 'components'
import { listTvRequest } from 'modules/tv/actions'
import { selectTvList } from 'modules/tv/selectors'
import { selectSearch } from 'modules/search/selectors'

const Main = () => {
  const dispatch = useDispatch()
  const listTv = useSelector(selectTvList)
  const search = useSelector(selectSearch)

  useEffect(() => {
    dispatch(listTvRequest({ search }))
  }, [dispatch, search])

  return (
    <>
      {listTv &&
        listTv.length > 0 &&
        listTv.map((tv, index) => <TVCard key={tv.show.id} {...tv} />)}
    </>
  )
}

export default Main
