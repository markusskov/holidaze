import styles from './Button.module.css';
import Link from 'next/link';

export function Button({ href, children, ...props }) {
  return (
    <Link href={href}>
      <a className={styles.add} {...props}>
        {children}
      </a>
    </Link>
  );
}
