import styles from './Card.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Cards = ({ hotels }) => {
  return (
    <>
      {hotels &&
        hotels.data.map((hotel) => {
          return (
            <Link key={hotel.id} href={`/detail/${hotel.id}`}>
              <a>
                <div className={styles.card}>
                  <div className={styles.container}>
                    <Image
                      className={styles.image}
                      src={hotel.attributes.img}
                      alt={hotel.attributes.title}
                      width={267}
                      height={261}
                    />
                    <h4>{hotel.attributes.title}</h4>
                    <p className={styles.desc}>
                      {hotel.attributes.description}
                    </p>
                    <p className={styles.price}>
                      {hotel.attributes.prize}$ / night
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          );
        })}
    </>
  );
};

export default Cards;
