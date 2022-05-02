import Cards from '../../components/cards/Card';

// This function runs only on the server side
export async function getStaticProps() {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const res = await fetch(
    'https://radiant-brushlands-84668.herokuapp.com/api/hotels'
  );
  const data = await res.json();
  console.log(data);
  // Props returned will be passed to the page component
  return { props: { hotels: data.data } };
}

const Hotels = ({ hotels }) => {
  console.log(hotels);
  return (
    <div>
      <h1>All hotels</h1>
      {hotels.map((hotel) => (
        <Cards key={hotel.id} hotel={hotel} />
      ))}
      ;
    </div>
  );
};

export default Hotels;
