import React from "react";

export const ItemCart = ({ item, removeItemFromCartHandler }) => {
  const renderTags = () => {
    return item.tags.map(e => {
      return <div className="item-tag">{e}</div>;
    });
  };

  return (
    <div className="item-cart">
      <div className="item-header">
        <img className="item-picture" src={item.picture} alt="not found" />
        <div>
          <div className="item-title">{item.title}</div>
          <div className="item-manufacturer">
            Manufacturer: {item.manufacturer}
          </div>
          <div className="item-tags">{renderTags()}</div>
        </div>
      </div>
      <div className="item-price">Price: ${item.price}</div>
      <button
        className="common-btn"
        onClick={() => removeItemFromCartHandler(item._id)}
      >
        Remove
      </button>
    </div>
  );
};
