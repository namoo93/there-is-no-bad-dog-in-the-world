import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import ItemList from '../src/component/ItemList';
import styles from '../styles/Home.module.css';

export default function Home() {
  const API_URL = 'https://dog.ceo/api/breeds/';
  const [list, setList] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(`${API_URL}list/all`);
      const list = Object.keys(response.data.message);
      setList(list);

      Promise.all(list.map(async (dogs) => await axios.get(`https://dog.ceo/api/breed/${dogs}/images`))).then(
        (values) => {
          const imgsres = values.map((cur) => cur.data.message[0]);
          console.log(imgsres);
          setImgUrl(imgsres);
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => getData(), []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>There is no bad dog in the world</title>
      </Head>
      <ItemList list={list} imgUrl={imgUrl} />
    </>
  );
}

//axios
