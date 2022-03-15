import Link from 'next/link';
import React, { useEffect } from 'react';
// import Isotope from 'isotope-layout';

const ItemList = ({ list, imgUrl }) => {
  // useEffect(() => {
  //   //isotope layout
  //   const grid = document.querySelector('.dogs_list');
  //   const iso = new Isotope(grid, {
  //     // options...
  //     itemSelector: '.dogs_item',
  //     masonry: {
  //       columnWidth: 200,
  //     },
  //   });
  // }, []);
  return (
    <>
      <ul className="dogs_list">
        {list.map((cur, idx) => (
          <Link href={`/view/${idx}`}>
            <li className="dogs_item" key={`${idx}_${new Date().toString()}`}>
              <span>{cur}</span>
              <img src={imgUrl[idx]} alt={cur} />
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default ItemList;
