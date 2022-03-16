import axios from 'axios';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

const Post = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  const [dog, setDog] = useState(null);
  const [imgUrl, setImgUrl] = useState('');
  const [loading, setLoading] = useState(true);

  const API_URL = `https://api.thedogapi.com/v1/`;
  const getData = useCallback(async () => {
    try {
      const dogs = await axios.get(`${API_URL}breeds/${id}`);
      const img = await axios.get(`${API_URL}images/${dogs.data.reference_image_id}`);
      setDog(() => dogs.data);
      setImgUrl(img.data.url);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

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

export default Post;
