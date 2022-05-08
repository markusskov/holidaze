import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';
import Head from 'next/head';
import Navbar from '../../components/navbar/Navbar';
import Cookies from 'js-cookie';

const Dashboard = () => {
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
          <p>
            👋🏼 &nbsp;Welcome back, <b>{Cookies.get('username')}</b>!
          </p>
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
