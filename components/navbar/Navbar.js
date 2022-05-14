import Link from 'next/link';
import styles from './Navbar.module.scss';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { unsetToken } from '../../lib/auth';

const Navbar = () => {
  const [isLogged, setIsLogged] = useState();
  useEffect(() => {
    setIsLogged(Cookies.get('jwt'));
  }, []);

  const logout = () => {
    unsetToken();
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <h1>
          <Link href="/">Holidaze</Link>
        </h1>
      </div>
      <div className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/hotels">Hotels</Link>
        <Link href="/about">About</Link>
      </div>
      {isLogged ? (
        <>
          <Link href="/dashboard">Dashboard</Link>
          <a className={styles.signOut} onClick={logout}>
            Sign out
          </a>
        </>
      ) : (
        <Link href="/login">Sign In</Link>
      )}
    </nav>
  );
};

export default Navbar;
