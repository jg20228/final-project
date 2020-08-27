import React, { Component } from "react";
import ItemCard from "./ItemCard";

class Listpage extends Component {
  state = {};

  render() {
    console.log("여기는 Listpage render");

    const { Itemcard } = this.props;
    return (
      <ul>
        {Itemcard &&
          Itemcard.map((itemdata) => {
            console.log("여기는 map");
            console.log(itemdata);
            return (
              <ItemCard
                key={itemdata.id}
                Thumb={itemdata.thumb}
                Title={itemdata.title}
                Price={itemdata.price}
              />
            );
          })}
      </ul>
    );
  }
}
export default Listpage;
