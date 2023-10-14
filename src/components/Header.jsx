import styles from "./Header.module.css";
import { useState } from "react";

function Header() {
  const [date, setDate] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [bill, setBill] = useState();

  return (
    <header className={styles.header}>
      <div className={styles.headerBill}>
        <label className={styles.label}> خریدار</label>
        <input
          className={styles.input}
          type="text"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        ></input>
      </div>
      <div className={styles.headerDate}>
        <label className={styles.label}>تاریخ</label>
        <input
          className={styles.input}
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
      </div>
      <div className={styles.headerAddress}>
        <label className={styles.label}> ریجستری</label>
        <input
          className={styles.input}
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></input>
      </div>
      <div className={styles.headerPhone}>
        <label className={styles.label}>موبایل</label>
        <input
          className={styles.input}
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></input>
      </div>
    </header>
  );
}

export default Header;
