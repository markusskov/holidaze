import Head from 'next/head';
import { Button } from '../components/buttons/Button';
import Cards from '../components/cards/Card';
import Navbar from '../components/navbar/Navbar';
import HotelSearch from '../components/search/Search';
import SectionWithImage from '../components/sections/sectionWithImage/SectionWithImage';
import { fetcher } from '../lib/api';
import styles from '../styles/Home.module.css';

export default function Home({ data, countries }) {
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
            title="Find the perfect place for 
        your holiday."
            text={
              'Choose from a great wariety of hotels, cabins, or apartments and book your holiday today.'
            }
            image={'illustrations/HotelIllustration.svg'}
          />
        </div>
        <div className={styles.secondaryBG}>
          <div className={styles.container}>
            <h2 className={styles.centerText}>
              Search for your next vacation.
              <br /> Browse through countries after you set the date and people.
            </h2>
            <HotelSearch data={countries} />
            <div className={styles.centerText}>
              <Button href="/hotels">Search</Button>
            </div>
            <div className={styles.cards}>
              <Cards data={data} />
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <SectionWithImage
            subtitle="How it works"
            text={
              'Book with us to get the best deals. Once your reservation is ordered, you get an email verification and can rest assure that your booking is legit and safe.We also offer 30 days money back guarantee.'
            }
            image={'images/howitworks.png'}
          />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const hotelResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/hotels`
  );
  const categoryResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/countries`
  );
  return {
    props: {
      hotels: hotelResponse.data,
      countries: categoryResponse.data,
    },
  };
}
