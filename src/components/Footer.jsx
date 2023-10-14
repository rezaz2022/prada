import styles from "./Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.explanations}>
        <label>:توضیحات </label>
        <input type="text"></input>

        <p>
          {" "}
          گوشی های موجود در فروشگاه شامل یک هفته مهلت تست (انتن و باتری) میباشد{" "}
        </p>
      </section>
      <section className={styles.qRCode}>
        <p>مهر و امضا</p>
      </section>
      <section className={styles.info}>
        <p className={styles.infoAccount}>
          <span>
            <InstagramIcon />
          </span>
          <span>Prada.mobile</span>
        </p>
        <p className={styles.infoLocation}>
          <span>
            <LocationOnIcon />
          </span>
          <span>سی متری دانشگاه دانشگاه 18 </span>
        </p>
        <p className={styles.infoPhone}>
          <span>
            <WhatsAppIcon />
          </span>
          <span>09366785330 حشمتی فر </span>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
