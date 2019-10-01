import React from 'react';

export const ItemCard = ({item}) => (
    <div className="container">
      <div className="card">
        <div className="card-body">
           <div className="box">
           <span><b style={{color: 'blue'}}>{item.product}</b></span>
           <span>{item.name}</span>
           <span><b style={{color: 'blue'}}>{item.price}€</b></span>
          </div>
        </div>
      </div>
    </div>
);

