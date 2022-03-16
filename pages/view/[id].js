import axios from 'axios';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import Item from '../../src/component/Item';

const Post = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  const [dog, setDog] = useState(null);
  const [imgUrl, setImgUrl] = useState('');

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

  return <Item dog={dog} imgUrl={imgUrl} id={id} />;
};

export default Post;
