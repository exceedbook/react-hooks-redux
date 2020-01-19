import React, { Fragment } from "react";

export const Filter = ({
  setSearchHandler,
  filters,
  setManufacturerHandler
}) => {
  const renderManufacturers = () => {
    return filters.manufacturers.map((e, i) => {
      return (
        <div className="filter-manufacturer">
          <input
            key={e.index}
            type="checkbox"
            checked={e.selected}
            onChange={() => setManufacturerHandler(i)}
          />
          {e.name}
        </div>
      );
    });
  };

  return (
    <Fragment>
      <input
        value={filters.search}
        className="filter-search"
        onChange={e => setSearchHandler(e.target.value)}
        placeholder="Search"
      />
      <div>
        Manufacturer:
        <div>{renderManufacturers()}</div>
      </div>
    </Fragment>
  );
};
