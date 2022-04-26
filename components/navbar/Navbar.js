import Link from 'next/link';
import styles from './Navbar.module.scss';

const Navbar = () => {
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
      <Link href="/signin">Sign In</Link>
    </nav>
  );
};

export default Navbar;
