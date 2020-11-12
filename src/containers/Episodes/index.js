import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getEpisodesRequest } from 'modules/episodes/actions'
import { selectEpisodes } from 'modules/episodes/selectors'

const Episodes = () => {
  const { id: tvId } = useParams()
  const dispatch = useDispatch()
  const episodes = useSelector(selectEpisodes)
  console.log(tvId, episodes)

  useEffect(() => {
    dispatch(getEpisodesRequest({ id: tvId }))
  }, [dispatch, tvId])

  return <div>Episodes</div>
}

export default Episodes
