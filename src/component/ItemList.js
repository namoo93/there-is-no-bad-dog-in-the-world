import Link from 'next/link';
import React from 'react';

const ItemList = ({ list, imgUrl }) => {
  return (
    <>
      <ul className="dogs_list">
        {list.map((cur, idx) => (
          <Link href={`/view/${idx}`}>
            <li className="dogs_item" key={`${idx}_${new Date().toString()}`}>
              <span>{cur}</span>
              <div className="img_wrap">
                <img src={imgUrl[idx]} alt={cur} />
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default ItemList;
