import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <img
        className={styles.logoPhoto}
        src="https://drive.google.com/file/d/1_xttq4TQELWByUa6w4hfNXNmiySpZLh4/view"
        alt=""
      ></img>
      <p className={styles.logoHeading}>فروشگاه موبایل و لوازم جانبی</p>
    </div>
  );
}

export default Logo;
