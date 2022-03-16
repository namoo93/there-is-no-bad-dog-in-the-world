import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [dog, setDog] = useState({});
  const [imgUrl, setImgUrl] = useState('');

  const API_URL = `https://api.thedogapi.com/v1/`;
  const getData = async () => {
    try {
      const dogs = await axios.get(`${API_URL}breeds/${id}`);
      setDog(dogs.data);
    } catch (error) {
      console.error(error);
    }
  };
  const getDataImg = async () => {
    try {
      const dogImg = await axios.get(`${API_URL}images/${dog.reference_image_id}`);
      setImgUrl(dogImg.data.url);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  useEffect(() => {
    getDataImg();
  }, [dog]);

  return (
    <div className="dog_wrap">
      <p>Post: {id}</p>
      {!imgUrl.length ? (
        <img src="/images/loading2.gif" alt="loading" className="loading" />
      ) : (
        <dl>
          <dt>{dog.name || '🦴'}</dt>
          <dd>
            <img src={imgUrl} alt={dog.name} />
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
