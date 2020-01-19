import React from "react";
import { ItemShop } from "./ItemShop";
import { Filter } from "./Filter";

const Shop = ({
  filter,
  items,
  addItemToCartHandler,
  removeItemFromCartHandler,
  setSearchHandler,
  setManufacturerHandler
}) => {
  const renderItems = () => {
    return items.map(e => {
      const searchMatch =
        e.title.toUpperCase().search(filter.search.toUpperCase()) !== -1;
      const manufacturersSelected = !!filter.selectedManufacturers.length;
      const manufacturersMatch =
        manufacturersSelected &&
        !!filter.selectedManufacturers.filter(m => m.name === e.manufacturer)
          .length;

      return (
        ((searchMatch && !manufacturersSelected) ||
          (searchMatch && manufacturersMatch)) && (
          <ItemShop
            key={e._id}
            item={e}
            addItemToCartHandler={addItemToCartHandler}
            removeItemFromCartHandler={removeItemFromCartHandler}
          />
        )
      );
    });
  };

  return (
    <div className="page-body shop-page">
      <div className="shop-items-filter-settings page-element">
        <Filter
          filters={filter}
          setSearchHandler={setSearchHandler}
          setManufacturerHandler={setManufacturerHandler}
        />
      </div>
      <div className="shop-items-table">{renderItems()}</div>
    </div>
  );
};

export default Shop;
