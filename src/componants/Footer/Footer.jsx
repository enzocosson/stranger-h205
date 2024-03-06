import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={`${styles.main}`}>
        <p>Copyright © 2024 | Stranger 205</p>
        <span>Enzo Cosson | Benjamin Frenal</span>
      </div>
    </div>
  );
}
