import Link from "next/link";
import React, { Component } from "react";
import PropTypes from "prop-types";
import Ttile from "./styles/Title";
import ItemStyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";
class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };
  render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        {item.image && <img src={item.image} alt={item.title} />}
        <Ttile>
          <Link href={{ pathName: "/item", query: { id: item.id } }}>
            <a>{item.title}</a>
          </Link>
        </Ttile>
        <PriceTag>{formatMoney(item.price)}</PriceTag>
        <p>{item.description}</p>
        <div className="buttonList">
          <Link
            href={{
              pathname: "update",
              query: { id: item.id }
            }}
          >
            <a>Edit</a>
          </Link>
          <button>Add to Cart</button>
          <button>Delete</button>
        </div>
      </ItemStyles>
    );
  }
}

export default Item;
