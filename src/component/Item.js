import React, { useState } from 'react';

const Item = ({ dog, imgUrl, id }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="dog_wrap">
      <p>Post: {id}</p>
      {loading && <img src="/images/loading2.gif" alt="loading" className="loading" />}
      {dog && (
        <dl style={{ display: loading ? 'none' : 'block' }}>
          <dt>{dog.name || '🦴'}</dt>
          <dd>
            <img onLoad={() => setLoading(false)} src={imgUrl} alt={dog.name} />
          </dd>
          <dd>
            <ul>
              <li>
                <span>life span :</span> {dog.life_span || '🦴'}
              </li>
              <li>
                <span>weight -</span> imperial : {dog?.weight.imperial} , metric : {dog?.weight.metric}
              </li>
              <li>
                <span>height -</span> imperial : {dog?.height.imperial} , metric : {dog?.height.metric}
              </li>
              <li>
                <span>temperament :</span> {dog.temperament || '🦴'}
              </li>
              <li>
                <span>bred for :</span> {dog.bred_for || '🦴'}
              </li>
              <li>
                <span>country code :</span> {dog.country_code || '🦴'}
              </li>
              <li>
                <span>breed group :</span> {dog.breed_group || '🦴'}
              </li>
              <li>
                <span>origin :</span> {dog.origin || '🦴'}
              </li>
            </ul>
          </dd>
        </dl>
      )}
    </div>
  );
};

export default Item;
