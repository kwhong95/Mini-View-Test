import React from 'react';
import './Items.css';

const datas = [
  { id: 1 , title: "온도", unit: "℃", payload: Math.floor(Math.random()*(30-20))+20},
  { id: 2 , title: "송풍기", unit: "?", payload: Math.floor(Math.random()*(30-20))+20},
  { id: 3 , title: "습도", unit: "?", payload: Math.floor(Math.random()*(30-20))+20},
]

const Items = () => {

  return (
      <div className="container">
        {datas.map((item) => (
          <div className="item-card" key={item.id}>
            <div className="card-title">{item.title}</div>
            <div className="card-payload">{item.payload}<sup>{item.unit}</sup></div>
          </div>  
        ))}
      </div>
    )
  }
  
  export default Items;