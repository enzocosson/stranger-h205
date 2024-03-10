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
          <iframe
            width="500"
            height="259"
            src="https://www.youtube.com/embed/l-pgppGhrRk?si=lXvPrULi5s9a7WYg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            styles={{ borderRadius: "20px !important" }}
          ></iframe>
        </div>
      </div>
    </>
  );
}
