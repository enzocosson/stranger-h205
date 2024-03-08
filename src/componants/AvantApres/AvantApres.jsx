/* eslint-disable */
import { useState } from "react";
import styles from "./AvantApres.module.scss";

export function AvantApres() {
  const [mousePosition1, setMousePosition1] = useState(50);
  const [mousePosition2, setMousePosition2] = useState(50);
  const [mousePosition3, setMousePosition3] = useState(50);
  const [mousePosition4, setMousePosition4] = useState(50);
  const [mousePosition5, setMousePosition5] = useState(50);
  const [mousePosition6, setMousePosition6] = useState(50);

  const handleMouseMove1 = (e) => {
    const containerRect = e.target.getBoundingClientRect();
    const percentage =
      ((e.clientX - containerRect.left) / containerRect.width) * 100;
    setMousePosition1(percentage);
  };

  const handleMouseMove2 = (e) => {
    const containerRect = e.target.getBoundingClientRect();
    const percentage =
      ((e.clientX - containerRect.left) / containerRect.width) * 100;
    setMousePosition2(percentage);
  };

  const handleMouseMove3 = (e) => {
    const containerRect = e.target.getBoundingClientRect();
    const percentage =
      ((e.clientX - containerRect.left) / containerRect.width) * 100;
    setMousePosition3(percentage);
  };

  const handleMouseMove4 = (e) => {
    const containerRect = e.target.getBoundingClientRect();
    const percentage =
      ((e.clientX - containerRect.left) / containerRect.width) * 100;
    setMousePosition4(percentage);
  };

  const handleMouseMove5 = (e) => {
    const containerRect = e.target.getBoundingClientRect();
    const percentage =
      ((e.clientX - containerRect.left) / containerRect.width) * 100;
    setMousePosition5(percentage);
  };

  const handleMouseMove6 = (e) => {
    const containerRect = e.target.getBoundingClientRect();
    const percentage =
      ((e.clientX - containerRect.left) / containerRect.width) * 100;
    setMousePosition6(percentage);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.conception}>
          <img className={styles.title} src="images/avant&apres.png" alt="" />
          <div className={`${styles.section_text}`}>
            <div
              className={styles.container}
              style={{ "--position": `${mousePosition1}%` }}
              onMouseMove={handleMouseMove1}
            >
              <div class={styles.image__container}>
                <img
                  className={`${styles.image__after} ${styles.slider__image}`}
                  src="images/before-after/porte-before.png"
                  alt="black and white"
                />
                <img
                  className={`${styles.image__before} ${styles.slider__image}`}
                  src="images/before-after/porte-after.png"
                  alt="color photo"
                />
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value="50"
                aria-label="Percentage of before photo shown"
                class={styles.slider}
              />
              <div
                className={`${styles.slider__line}`}
                aria-hidden="true"
              ></div>
            </div>
          </div>

          {/* ------------------------------------ separation ------------------------------------  */}

          <div className={`${styles.section_text}`}>
            <div
              className={styles.container}
              style={{ "--position": `${mousePosition2}%` }}
              onMouseMove={handleMouseMove2}
            >
              <div class={styles.image__container}>
                <img
                  className={`${styles.image__after} ${styles.slider__image}`}
                  src="images/before-after/bureau-before.png"
                  alt="black and white"
                />
                <img
                  className={`${styles.image__before} ${styles.slider__image}`}
                  src="images/before-after/bureau-after.png"
                  alt="color photo"
                />
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value="50"
                aria-label="Percentage of before photo shown"
                class={styles.slider}
              />
              <div
                className={`${styles.slider__line}`}
                aria-hidden="true"
              ></div>
            </div>
          </div>

          {/* ------------------------------------ separation ------------------------------------  */}

          <div className={`${styles.section_text}`}>
            <div
              className={styles.container}
              style={{ "--position": `${mousePosition3}%` }}
              onMouseMove={handleMouseMove3}
            >
              <div class={styles.image__container}>
                <img
                  className={`${styles.image__after} ${styles.slider__image}`}
                  src="images/before-after/salle-before.png"
                  alt="black and white"
                />
                <img
                  className={`${styles.image__before} ${styles.slider__image}`}
                  src="images/before-after/salle-after.png"
                  alt="color photo"
                />
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value="50"
                aria-label="Percentage of before photo shown"
                class={styles.slider}
              />
              <div
                className={`${styles.slider__line}`}
                aria-hidden="true"
              ></div>
            </div>
          </div>

          {/* ------------------------------------ separation ------------------------------------  */}

          <div className={`${styles.section_text}`}>
            <div
              className={styles.container}
              style={{ "--position": `${mousePosition4}%` }}
              onMouseMove={handleMouseMove4}
            >
              <div class={styles.image__container}>
                <img
                  className={`${styles.image__after} ${styles.slider__image}`}
                  src="images/before-after/table-haute-before.png"
                  alt="black and white"
                />
                <img
                  className={`${styles.image__before} ${styles.slider__image}`}
                  src="images/before-after/table-haute-after.png"
                  alt="color photo"
                />
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value="50"
                aria-label="Percentage of before photo shown"
                class={styles.slider}
              />
              <div
                className={`${styles.slider__line}`}
                aria-hidden="true"
              ></div>
            </div>
          </div>

          {/* ------------------------------------ separation ------------------------------------  */}

          <div className={`${styles.section_text}`}>
            <div
              className={styles.container}
              style={{ "--position": `${mousePosition5}%` }}
              onMouseMove={handleMouseMove5}
            >
              <div class={styles.image__container}>
                <img
                  className={`${styles.image__after} ${styles.slider__image}`}
                  src="images/before-after/fenetre-before.png"
                  alt="black and white"
                />
                <img
                  className={`${styles.image__before} ${styles.slider__image}`}
                  src="images/before-after/fenetre-after.png"
                  alt="color photo"
                />
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value="50"
                aria-label="Percentage of before photo shown"
                class={styles.slider}
              />
              <div
                className={`${styles.slider__line}`}
                aria-hidden="true"
              ></div>
            </div>
          </div>

          {/* ------------------------------------ separation ------------------------------------  */}

          <div className={`${styles.section_text}`}>
            <div
              className={styles.container}
              style={{ "--position": `${mousePosition6}%` }}
              onMouseMove={handleMouseMove6}
            >
              <div class={styles.image__container}>
                <img
                  className={`${styles.image__after} ${styles.slider__image}`}
                  src="images/before-after/casier-before.png"
                  alt="black and white"
                />
                <img
                  className={`${styles.image__before} ${styles.slider__image}`}
                  src="images/before-after/casier-after.png"
                  alt="color photo"
                />
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value="50"
                aria-label="Percentage of before photo shown"
                class={styles.slider}
              />
              <div
                className={`${styles.slider__line}`}
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
