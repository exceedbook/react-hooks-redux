import React from "react";

export const ItemShop = ({
  item,
  removeItemFromCartHandler,
  addItemToCartHandler
}) => {
  const renderTags = () => {
    return item.tags.map(e => {
      return <div className="item-tag">{e}</div>;
    });
  };

  return (
    <div className="item-shop page-element">
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
      <div className="item-about">
        {item.about.length > 200
          ? item.about.substring(0, 200) + "..."
          : item.about}
      </div>
      <div className="item-price">Price: ${item.price}</div>
      {!item.selected ? (
        <button
          className="common-btn"
          onClick={() => addItemToCartHandler(item)}
        >
          Add to cart
        </button>
      ) : (
        <button
          className="common-btn"
          onClick={() => removeItemFromCartHandler(item._id)}
        >
          Remove from cart
        </button>
      )}
    </div>
  );
};
