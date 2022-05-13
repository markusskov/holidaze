import Head from 'next/head';
import Navbar from '../../components/navbar/Navbar';

const Enquiry = () => {
  return (
    <div>
      <Head>
        <title>Holidaze</title>
        <meta name="description" content="Holidaze - Enjoy your vacation!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
};

export default Enquiry;
