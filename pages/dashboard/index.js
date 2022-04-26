import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [isLogged, setIsLogged] = useState();
  useEffect(() => {
    setIsLogged(!!localStorage.getItem('jwt'));
  }, []);

  return (
    <div className={styles.container}>
      {isLogged ? (
        <p>
          👋🏼 &nbsp;Welcome back, <b>{localStorage.username}</b>!
        </p>
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
  );
};
export default Dashboard;
