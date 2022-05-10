import Head from 'next/head';
import Navbar from '../../../components/navbar/Navbar';
import Link from 'next/link';
import styles from './Addhotel.module.scss';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { fetcher } from '../../../lib/api';

const AddHotel = ({}) => {
  // Check if user is logged in
  const [isLogged, setIsLogged] = useState();
  useEffect(() => {
    setIsLogged(Cookies.get('jwt'));
  }, []);

  // Adding states for inputs on a new hotel
  const [hotelName, sethotelName] = useState('');
  const [hotelDesc, sethotelDesc] = useState('');
  const [hotelFullDesc, sethotelFullDesc] = useState('');
  const [hotelPrice, sethotelPrice] = useState(10);
  const [hotelCountry, sethotelCountry] = useState('');
  const [hotelCity, sethotelCity] = useState('');
  const [hotelAllInclusive, sethotelAllInclusive] = useState(false);
  const [hotelImg, sethotelImg] = useState('');

  async function NewHotel() {
    const jwt = Cookies.get('jwt');

    const hotelInfo = {
      title: hotelName,
      description: hotelDesc,
      full_desc: hotelFullDesc,
      prize: hotelPrice,
      country: hotelCountry,
      city: hotelCity,
      img: hotelImg,
    };

    const add = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/hotels`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwt}`,
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ data: hotelInfo }),
    });

    const getResponse = await add.json();
    console.log(getResponse);
  }

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
            <form>
              <input
                type="text"
                onChange={(e) => sethotelName(e.target.value)}
                value={hotelName}
                placeholder="Hotel Name"
              />
              <br />
              <input
                type="text"
                onChange={(e) => sethotelDesc(e.target.value)}
                value={hotelDesc}
                placeholder="Hotel Short Description"
              />
              <br />
              <input
                type="text"
                onChange={(e) => sethotelFullDesc(e.target.value)}
                value={hotelFullDesc}
                placeholder="Hotel Full description"
              />
              <br />
              <input
                type="number"
                onChange={(e) => sethotelPrice(e.target.value)}
                value={hotelPrice}
                placeholder="Hotel Price"
              />
              <br />
              <input
                type="text"
                onChange={(e) => sethotelCountry(e.target.value)}
                value={hotelCountry}
                placeholder="Hotel Country"
              />
              <br />
              <input
                type="text"
                onChange={(e) => sethotelCity(e.target.value)}
                value={hotelCity}
                placeholder="Hotel City"
              />
              <br />
              <input
                type="text"
                onChange={(e) => sethotelImg(e.target.value)}
                value={hotelImg}
                placeholder="Hotel Image Url"
              />
              <br />
              <button type="button" onClick={NewHotel}>
                Add new hotel
              </button>
            </form>
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
export default AddHotel;
