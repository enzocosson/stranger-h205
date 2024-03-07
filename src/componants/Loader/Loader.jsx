import { useEffect, useState } from "react";
import styles from "./Loader.module.scss";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      }
    }, 30); // 4 secondes divisées par 100

    return () => clearInterval(interval);
  }, [progress]);
  return (
    <div className={styles.loader}>
      <img src="images/logo-title.png" alt="" />
      <p>Chargement...</p>
      <span
        className={styles.progress}
        style={{ width: `${progress}%` }}
      ></span>
    </div>
  );
};

export default Loader;
