import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import ItemList from '../src/component/ItemList';
import styles from '../styles/Home.module.css';

export default function Home() {
  const API_URL = 'https://dog.ceo/api/breeds/';
  const [list, setList] = useState([]);

  const getData = async () => {
    const response = await axios.get(`${API_URL}list/all`);
    const list = Object.keys(response.data.message);
    setList(list);
  };

  useEffect(() => getData(), []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>There is no bad dog in the world</title>
      </Head>
      <ItemList list={list} API_URL={API_URL} />
    </>
  );
}

//axios
