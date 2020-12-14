import React from 'react'
import { Card } from 'antd';

import './Item.css'

const Item = ({ item }) => {
  
  return (
    <div className="cardContainer">
      <Card
        className="cardItem"
        title={item.name}
        extra={item.icon}
      >
        <div className="cardContent">{item.payload}{item.unit}</div>
      </Card>
    </div>
  )
}

export default Item;
