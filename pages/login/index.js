import Login from '../auth/Login';
import Head from 'next/head';
import Navbar from '../../components/navbar/Navbar';
import styles from '../../styles/Home.module.css';

const SignIn = () => {
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
          <Login />
        </div>
      </main>
    </div>
  );
};

export default SignIn;
