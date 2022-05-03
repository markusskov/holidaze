import styles from './Card.module.scss';
import Link from 'next/link';

const Cards = ({ hotel }) => {
  return (
    <div className={styles.cards}>
      <Link href={`/detail/${hotel.id}`}>
        <a>
          <div className={styles.card}>
            <div className={styles.container}>
              <img src={hotel.attributes.img} />
              <h4>{hotel.attributes.name}</h4>
              <p className={styles.desc}>{hotel.attributes.description}</p>
              <p className={styles.price}>{hotel.attributes.prize}$ / night</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Cards;
