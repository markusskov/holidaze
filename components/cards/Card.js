import styles from './Card.module.scss';
import Link from 'next/link';

const Cards = ({ hotel }) => {
  return (
    <Link href={`/detail/${hotel.id}`}>
      <a>
        <div className={styles.card}>
          <div className={styles.container}>
            <h4>
              <b>{hotel.attributes.name}</b>
            </h4>
            <p>{hotel.attributes.description}</p>
            <p>{hotel.attributes.prize}$</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Cards;
