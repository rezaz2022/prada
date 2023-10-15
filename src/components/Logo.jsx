import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <img
        className={styles.logoPhoto}
        src="img/new.PNG"
        alt="logo"
      ></img>
      <p className={styles.logoHeading}>فروشگاه موبایل و لوازم جانبی</p>
    </div>
  );
}

export default Logo;
