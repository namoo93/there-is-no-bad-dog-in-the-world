import React from 'react';

const ItemList = ({ list, API_URL }) => {
  return (
    <>
      <ul className="search_list">
        {list.map((cur, idx) => (
          <li key={idx}>
            <span>{cur}</span>
            {/* <img src={imgUrl[idx]} alt={cur} /> */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ItemList;
