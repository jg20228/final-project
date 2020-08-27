import React from "react";

const ItemCard = (props) => {
  console.log("여기는 ItemCard");
  console.log(props.id);
  console.log(props.Title);
  console.log(props.Price);
  return (
    <li key={props.id}>
      {/* <img src={Thumb} alt="" /> */}
      <p>
        이름 : <span>{props.Title}</span>
      </p>
      <p>가격 : {props.Price}</p>
    </li>
  );
};

export default ItemCard;
