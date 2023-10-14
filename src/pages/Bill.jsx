import styles from "./Bill.module.css";

import Logo from "../components/Logo";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { BillProvider } from "../contexts/BillContext";
function Bill() {
  return (
    <div className={styles.bill}>
      <BillProvider>
        <Logo />
        <Header />
        <Main />
        <Footer />
      </BillProvider>
    </div>
  );
}

export default Bill;
