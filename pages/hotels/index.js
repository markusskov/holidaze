import Cards from '../../components/cards/Card';
import styles from './Hotels.module.scss';
import Head from 'next/head';
import Navbar from '../../components/navbar/Navbar';
import { fetcher } from '../../lib/api';
import useSWR from 'swr';
import { useState } from 'react';

const Hotels = ({ hotels }) => {
  const [pageIndex, setPageIndex] = useState(1);
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/hotels?pagination[page]=${pageIndex}&pagination[pageSize]=6`,
    fetcher,
    {
      fallbackData: hotels,
    }
  );
  console.log(hotels);
  return (
    <div>
      <Head>
        <title>Holidaze</title>
        <meta name="description" content="Holidaze - Enjoy your vacation!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <h1>All hotels</h1>
        <div className={styles.cards}>
          <Cards hotels={data} />
        </div>
        <div className={styles.paginationContainer}>
          <button
            className={`${(pageIndex === 1, styles.paginationButton)}`}
            disabled={pageIndex === 1}
            onClick={() => setPageIndex(pageIndex - 1)}
          >
            Prev
          </button>
          <button
            className={`${
              (pageIndex === (data && data.meta.pagination.pageCount),
              styles.paginationButton)
            }`}
            disabled={pageIndex === (data && data.meta.pagination.pageCount)}
            onClick={() => setPageIndex(pageIndex + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hotels;

export async function getStaticProps() {
  const hotelResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/hotels?pagination[page]=1&pagination[pageSize]=6`
  );
  console.log(hotelResponse);
  return {
    props: {
      hotels: hotelResponse,
    },
  };
}
