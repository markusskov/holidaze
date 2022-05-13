import Head from 'next/head';
import Navbar from '../../components/navbar/Navbar';
import Cookies from 'js-cookie';
import styles from './Enquiry.module.scss';
import { useState, useEffect } from 'react';
import moment from 'moment';

const Enquiry = () => {
  const [people, setPeople] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    setPeople(Cookies.get('people'));
    // Restoring dates from Local Storage to get it back as an array
    const getDates = localStorage.getItem('date');
    const DatesArray = JSON.parse(getDates);
    setDate(DatesArray);
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
        <h1>Complete your order</h1>
        <h2>Details</h2>
        <p>{people} people</p>
        <h2>Check in:</h2>
        <p className={styles.dates}>{moment(date[0]).utc().format('LL')}</p>
        <h2>Check out:</h2>
        <p className={styles.dates}>{moment(date[1]).utc().format('LL')}</p>
        <h2>Room type</h2>
        <p className={styles.dates}>Double Room</p>
      </div>
    </div>
  );
};

export default Enquiry;
