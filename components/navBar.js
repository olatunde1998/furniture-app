import Image from "next/image";
import styles from "./navBar.module.css"

const NavBar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.brandWrapper}>
      <Image src="/vercel.svg" width={70} height={40} alt="geodev logo" />

      </div>
      <ul className={styles.navBarList}>
        <li className={styles.List}>Home</li>
        <li className={styles.List}>Product</li>
        <li className={styles.List}>Service</li>
        <li className={styles.List}>Blog</li>
        <li className={styles.List}>Contact</li>
      </ul>
    </div>
  );
};

export default NavBar;
