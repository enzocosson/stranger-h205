/* eslint-disable */
import { useState } from "react";
import styles from "./Demo.module.scss";

export function Demo() {
  const [position, setPosition] = useState(0);

  const handleInputChange = (e) => {
    setPosition(e.target.value);
  };

  const [mousePosition, setMousePosition] = useState(50);

  const handleMouseMove = (e) => {
    const containerRect = e.target.getBoundingClientRect();
    const percentage =
      ((e.clientX - containerRect.left) / containerRect.width) * 100;
    setMousePosition(percentage);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.conception}>
          <img className={styles.title} src="images/demo.webp" alt="" />
        </div>
      </div>
    </>
  );
}
