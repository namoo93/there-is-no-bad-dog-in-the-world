import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import ItemList from '../src/component/ItemList';

const Home = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [list, setList] = useState([]);

  const getData = useCallback(async () => {
    try {
      const dogs = await axios.get(API_URL);
      setList(() => dogs.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="강아지 사전 페이지" />
        <title>There is no bad dog in the world</title>
      </Head>
      {!list.length ? <img src="/images/loading2.gif" alt="loading" className="loading" /> : <ItemList list={list} />}
    </>
  );
};

export default Home;

//axios
