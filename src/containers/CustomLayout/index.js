import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { Layout, Row, Col, Input } from 'antd'

import { searchRequest } from 'modules/search/actions'

const { Search } = Input

const CustomLayout = ({ children }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleSearch = (value) => {
    dispatch(searchRequest(value))
    history.push('/main')
  }

  return (
    <Layout className='layout'>
      <Row justify='center' className='layout__search-box'>
        <Col span={12}>
          <Search onSearch={handleSearch} enterButton />
        </Col>
      </Row>
      <Row>
        <Col>{children}</Col>
      </Row>
    </Layout>
  )
}

export default CustomLayout
