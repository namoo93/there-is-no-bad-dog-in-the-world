import Head from 'next/head';
import axios from 'axios';
import Item from '../../src/component/Item';

const Post = ({ dog, imgUrl }) => {
  return (
    <>
      {dog && (
        <>
          <Head>
            <meta
              name="description"
              content={`${dog.name}, ${dog.temperament || '🦴'},${dog.bred_for || '🦴'},${dog.country_code || '🦴'},${
                dog.breed_group || '🦴'
              }`}
            />
            <title>{dog.name}</title>
          </Head>
          <Item dog={dog} imgUrl={imgUrl} />
        </>
      )}
    </>
  );
};

export const getServerSideProps = async (context) => {
  // data from external API
  const id = context.params.id;
  const apiUrl = `https://api.thedogapi.com/v1/`;
  const dogRes = await axios.get(`${apiUrl}breeds/${id}`);
  const imgUrlRes = await axios.get(`${apiUrl}images/${dogRes.data.reference_image_id}`);

  const dog = dogRes.data;
  const imgUrl = imgUrlRes.data.url;

  return { props: { dog, imgUrl } };
};

export default Post;
