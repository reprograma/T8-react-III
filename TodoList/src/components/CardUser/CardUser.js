import React from 'react';

const CardUser = (props) => {
  return (
        <div className="card">
        <p>{props.name}</p>
        <p>{props.login}</p>
        <img src={props.img} className="card-img" alt="">
        </img>
    </div>
);
}
export default CardUser;