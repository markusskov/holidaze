import Head from 'next/head';
import { Button } from '../components/buttons/Button';
import SectionWithImage from '../components/sections/sectionWithImage/SectionWithImage';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Holidaze</title>
        <meta name="description" content="Holidaze - Enjoy your vacation!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <SectionWithImage
          icon={'icons/mapIcon.svg'}
          title="Find the perfect place for 
        your holiday."
          text={
            'Choose from a great wariety of hotels, cabins, or apartments and book your holiday today.'
          }
          image={'illustrations/HotelIllustration.svg'}
        ></SectionWithImage>
        <Button href="/hotels">View all hotels</Button>
      </main>
    </div>
  );
}

// This function runs only on the server side
export async function getStaticProps() {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  // Props returned will be passed to the page component
  return { props: { users: data } };
}
