export async function getStaticPaths() {
  const res = await fetch(
    'https://radiant-brushlands-84668.herokuapp.com/api/hotels'
  );
  const data = await res.json();
  const id = data.data;
  console.log(id);

  const paths = id.map((hotel) => ({
    params: { id: hotel.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://radiant-brushlands-84668.herokuapp.com/api/hotels/${params.id}`
  );
  const hotel = await res.json();
  return { props: { hotel } };
}

const Details = ({ hotel }) => {
  console.log(hotel);
  return (
    <div>
      <h1>{hotel.data.attributes.name}</h1>
    </div>
  );
};

export default Details;
