import Cards from '../../components/cards/Card';
import styles from './Hotels.module.scss';
import Head from 'next/head';
import Navbar from '../../components/navbar/Navbar';
import { fetcher } from '../../lib/api';
import { useState } from 'react';
import Select from 'react-select';
import { useQuery, useQueryClient } from 'react-query';

const getHotels = async (key) => {
  console.log(key);

  const countriesId = key.queryKey[1].country.map(
    (id) => `filters[countries]=${id}`
  );
  console.log(countriesId);
  const countryQueryString = countriesId.join('&');
  console.log(countryQueryString);

  if (countryQueryString) {
    const res = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/hotels?${countryQueryString}`
    );
    return res.data;
  }

  const res = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/hotels`);
  return res.data;
};

const Hotels = ({ countries }) => {
  const queryClient = useQueryClient();
  const [countryId, setCountryId] = useState([]);
  const { data, status } = useQuery(
    ['hotels', { country: countryId }],
    getHotels
  );
  return (
    <div>
      <Head>
        <title>Holidaze</title>
        <meta name="description" content="Holidaze - Enjoy your vacation!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <Select
          getOptionLabel={(option) => `${option.attributes.country}`}
          getOptionValue={(option) => option.id}
          options={countries}
          instanceId="countries"
          isMulti
          placeholder="Filter By Country"
          onChange={(values) =>
            setCountryId(values.map((country) => country.id))
          }
        />
        <h1>All hotels</h1>
        <div className={styles.cards}>
          {status === 'success' && <Cards data={data} />}
        </div>
      </div>
    </div>
  );
};

export default Hotels;

export async function getServerSideProps() {
  const hotelResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/hotels`
  );
  const categoryResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/countries`
  );
  console.log(hotelResponse);
  return {
    props: {
      hotels: hotelResponse.data,
      countries: categoryResponse.data,
    },
  };
}
