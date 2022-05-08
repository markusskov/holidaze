import Head from 'next/head';
import Navbar from '../../components/navbar/Navbar';
import { fetcher } from '../../lib/api';

const Hotel = ({ hotel }) => {
  return (
    <div>
      <Head>
        <title>Holidaze</title>
        <meta name="description" content="Holidaze - Enjoy your vacation!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1>{hotel.attributes.title}</h1>
      <h2>{hotel.attributes.prize}</h2>
      <h3>{hotel.attributes.country}</h3>
    </div>
  );
};

export default Hotel;

export async function getServerSideProps({ params }) {
  const { id } = params;
  const hotelResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/hotels/${id}`
  );

  return {
    props: {
      hotel: hotelResponse.data,
    },
  };
}
