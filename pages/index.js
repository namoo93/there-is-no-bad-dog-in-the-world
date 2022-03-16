import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import ItemList from '../src/component/ItemList';

export default function Home() {
  const API_URL = `https://api.thedogapi.com/v1/breeds`;
  const [list, setList] = useState([]);

  const getData = async () => {
    try {
      const dogs = await axios.get(API_URL);
      setList(dogs.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>There is no bad dog in the world</title>
      </Head>
      {!list.length ? <img src="/images/loading2.gif" alt="loading" className="loading" /> : <ItemList list={list} />}
    </>
  );
}

//axios
