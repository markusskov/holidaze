import Link from 'next/link';
import styles from './Navbar.module.scss';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isLogged, setIsLogged] = useState();
  useEffect(() => {
    setIsLogged(!!localStorage.getItem('jwt'));
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <h1>
          <Link href="/">Holidaze</Link>
        </h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/hotels">Hotels</Link>
      <Link href="/about">About</Link>
      {isLogged ? (
        <>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/auth/Logout">Sign Out</Link>
        </>
      ) : (
        <Link href="/login">Sign In</Link>
      )}
    </nav>
  );
};

export default Navbar;
