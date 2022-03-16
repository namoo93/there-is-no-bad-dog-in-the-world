import Link from 'next/link';
import React from 'react';

const ItemList = ({ list }) => {
  return (
    <>
      <ul className="dogs_list">
        {list.map((cur) => (
          <Link href={`/view/${cur.id}`}>
            <li className="dogs_item" key={`${cur.id}_${new Date().toString()}`}>
              <span>{cur.name}</span>
              <div className="img_wrap">
                <img src={cur.image.url} alt={cur.name} />
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default ItemList;
