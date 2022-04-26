import styles from './SectionWithImage.module.css';

const SectionWithImage = ({
  image,
  icon,
  alt,
  title,
  text,
  width,
  height,
  imageAlt,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <img src={icon} width={35} height={35} alt={alt} />
        <h1 className={title}>{title}</h1>
        <p className={text}>{text}</p>
      </div>
      <img src={image} width={width} height={height} alt={imageAlt} />
    </div>
  );
};

export default SectionWithImage;
