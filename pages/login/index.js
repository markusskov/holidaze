import { setToken } from '../../lib/auth';
import Head from 'next/head';
import Navbar from '../../components/navbar/Navbar';
import { useState } from 'react';
import { fetcher } from '../../lib/api';
import styles from './Login.module.scss';
import SectionWithImage from '../../components/sections/sectionWithImage/SectionWithImage';

const SignIn = () => {
  const [data, setData] = useState({
    identifier: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const responseData = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: data.identifier,
          password: data.password,
        }),
      }
    );
    setToken(responseData);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Head>
        <title>Holidaze</title>
        <meta name="description" content="Holidaze - Enjoy your vacation!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <SectionWithImage
            icon={'icons/mapIcon.svg'}
            title="Sign in to your user"
            text={'Add, edit and delete different hotels from the dashboard.'}
            image={'illustrations/HotelIllustration.svg'}
          />
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                name="identifier"
                onChange={handleChange}
                placeholder="Username"
                className={styles.formInput}
                required
              />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
                className={styles.formInput}
                required
              />

              <button className={styles.formButton} type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
