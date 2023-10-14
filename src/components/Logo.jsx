import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <img
        className={styles.logoPhoto}
        src="../../public/img/new.PNG"
        alt=""
      ></img>
      <p className={styles.logoHeading}>فروشگاه موبایل و لوازم جانبی</p>
    </div>
  );
}

export default Logo;
