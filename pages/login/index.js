import { setToken } from '../../lib/auth';
import Head from 'next/head';
import Navbar from '../../components/navbar/Navbar';
import styles from '../../styles/Home.module.css';
import { useState } from 'react';
import { fetcher } from '../../lib/api';

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
          <li>
            <form onSubmit={handleSubmit} className="form-inline">
              <input
                type="text"
                name="identifier"
                onChange={handleChange}
                placeholder="Username"
                className="md:p-2 form-input py-2 rounded mx-2"
                required
              />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
                className="md:p-2 form-input py-2 rounded mx-2"
                required
              />

              <button
                className="md:p-2 rounded py-2 text-black bg-purple-200 p-2"
                type="submit"
              >
                Login
              </button>
            </form>
          </li>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
