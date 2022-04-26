import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Logout = () => {
  const { push } = useRouter();

  useEffect(() => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('username');
    push('/');
  }, [push]);

  return (
    <>
      <Link href="/login">Sign In</Link>
    </>
  );
};

export default Logout;
