// This function runs only on the server side
export async function getStaticProps() {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  // Props returned will be passed to the page component
  return { props: { users: data } };
}

const Hotels = ({ users }) => {
  return (
    <div>
      <h1>All hotels</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
        </div>
      ))}
      ;
    </div>
  );
};

export default Hotels;
