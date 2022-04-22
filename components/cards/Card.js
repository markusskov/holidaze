import styles from './Card.module.scss';

const Cards = ({ user }) => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <h4>
          <b>{user.name}</b>
        </h4>
        <h4>
          <b>{user.address.street}</b>
        </h4>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default Cards;
