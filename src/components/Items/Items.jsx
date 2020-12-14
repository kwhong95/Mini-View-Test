import React from 'react';
import { Row, Col } from 'antd';
import { FireOutlined, DashboardOutlined, ExperimentOutlined, ThunderboltOutlined } from '@ant-design/icons';

import Item from './Item/Item';

import './Items.css';

const datas = [
  { id: 1 , name: "온도", unit: "temp", payload: 27, icon: <FireOutlined /> },
  { id: 2 , name: "속도", unit: "speed", payload: 27, icon:<DashboardOutlined /> },
  { id: 3 , name: "습도", unit: "humidity", payload: 27, icon: <ExperimentOutlined />},
  { id: 4 , name: "전력", unit: "power", payload: 27, icon: <ThunderboltOutlined />},
]

const Items = () => {
  return (
    <div className="container">
      <Row gutter={[16, 16]} justify="center">
        {datas.map((item) => (
            <Col xs={24} sm={12} key={item.id}>
              <Item item={item} />
            </Col>
        ))}
      </Row>
    </div>
  )
}

export default Items;
