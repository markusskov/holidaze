import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Dashboard.module.scss';
import Head from 'next/head';
import Navbar from '../../components/navbar/Navbar';
import Cookies from 'js-cookie';
import { fetcher } from '../../lib/api';
import Table from '../../components/table/Table';
import { Button } from '../../components/buttons/Button';

const Dashboard = ({ hotels }) => {
  const [isLogged, setIsLogged] = useState();
  useEffect(() => {
    setIsLogged(Cookies.get('jwt'));
  }, []);

  return (
    <div>
      <Head>
        <title>Holidaze</title>
        <meta name="description" content="Holidaze - Enjoy your vacation!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.container}>
        {isLogged ? (
          <>
            <p className={styles.welcome}>
              👋🏼 &nbsp;Welcome back, <b>{Cookies.get('username')}</b>!
              <br />
              Edit hotels, or add new ones.
            </p>
            <Table hotels={hotels} />
            <Button href="/dashboard/addHotel">Add new hotel</Button>
          </>
        ) : (
          <>
            <p>You dont have access here.</p>
            <p>
              You need to{' '}
              <span className={styles.orange}>
                <Link href={'/login'}>sign in</Link>
              </span>{' '}
              first.
            </p>
          </>
        )}
      </div>
    </div>
  );
};
export default Dashboard;

export async function getStaticProps() {
  const hotelResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/hotels`
  );
  console.log(hotelResponse);
  return {
    props: {
      hotels: hotelResponse,
    },
  };
}
