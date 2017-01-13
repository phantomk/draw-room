import React from 'react'
import { connect } from 'dva'
import { Card, Rate, Col, Row } from 'antd'
import styles from './GalleryList.css'

const GalleryList = ({ dispatch, data }) => {
  function rateHandler(id, value) {
    dispatch({
      type: 'gallery/rate',
      payload: { id, value },
    })
  }

  return (
    <div>
      <Row>
        {data.map((data) => {
          return (
            <Col span="8">
              <Card id={data.id} style={{ width: 360 }} bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                  <img alt="draw" width="100%" src={data.url} />
                </div>
                <Rate
                  allowHalf
                  defaultValue={data.rateValue}
                  onChange={rateHandler.bind(null, data.id)}
                />
                <p>已有{data.rateCount}人评分</p>
              </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

function mapStateToProps(state) {
  // get state.urls
  const { data } = state.gallery
  return { data }
}

export default connect(mapStateToProps)(GalleryList)
