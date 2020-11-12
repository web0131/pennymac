import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import { Card, Row, Col, Button } from 'antd'

const TVCard = (tv) => {
  const history = useHistory()

  const handleEpisodes = (tv) => {
    history.push(`/main/${tv.show.id}`)
  }

  return (
    <Card>
      <Row>
        <Col span={5}>
          <img
            src={(tv.show.image && tv.show.image.medium) || ''}
            alt={tv.show.name || ''}
          />
        </Col>
        <Col span={19}>
          <h1>{tv.show.name || ''}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: tv.show.summary || '' }}
          ></div>
          <Button onClick={() => handleEpisodes(tv)}>Show Episodes</Button>
        </Col>
      </Row>
    </Card>
  )
}

TVCard.propTypes = {
  tv: PropTypes.object,
}

export default TVCard
