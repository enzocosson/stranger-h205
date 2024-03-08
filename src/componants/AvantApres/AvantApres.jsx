/* eslint-disable */
import { useState, useEffect } from "react";
import styles from "./AvantApres.module.scss";

export function AvantApres() {
  const [mousePosition1, setMousePosition1] = useState(50);
  const [mousePosition2, setMousePosition2] = useState(50);
  const [mousePosition3, setMousePosition3] = useState(50);
  const [mousePosition4, setMousePosition4] = useState(50);
  const [mousePosition5, setMousePosition5] = useState(50);
  const [mousePosition6, setMousePosition6] = useState(50);
  const [mousePosition7, setMousePosition7] = useState(50);

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

  const handleMouseMove7 = (e) => {
    const containerRect = e.target.getBoundingClientRect();
    const percentage =
      ((e.clientX - containerRect.left) / containerRect.width) * 100;
    setMousePosition7(percentage);
  };

  // ---------------- animation mouse

  const [cardStyles, setCardStyles] = useState({
    card1: { x: 0, y: 0, rotationX: 0, rotationY: 0 },
    card2: { x: 0, y: 0, rotationX: 0, rotationY: 0 },
    card3: { x: 0, y: 0, rotationX: 0, rotationY: 0 },
    card4: { x: 0, y: 0, rotationX: 0, rotationY: 0 },
    card5: { x: 0, y: 0, rotationX: 0, rotationY: 0 },
    card6: { x: 0, y: 0, rotationX: 0, rotationY: 0 },
    card7: { x: 0, y: 0, rotationX: 0, rotationY: 0 },
  });

  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    setCardStyles({
      card1: {
        x: (x - centerX) / 20,
        y: (y - centerY) / 20,
        rotationX: (y - centerY) / 100,
        rotationY: (x - centerX) / 100,
      },
      card2: {
        x: (x - centerX) / 20,
        y: (y - centerY) / 20,
        rotationX: (y - centerY) / 100,
        rotationY: (x - centerX) / 100,
      },
      card3: {
        x: (x - centerX) / 20,
        y: (y - centerY) / 20,
        rotationX: (y - centerY) / 100,
        rotationY: (x - centerX) / 100,
      },
      card4: {
        x: (x - centerX) / 20,
        y: (y - centerY) / 20,
        rotationX: (y - centerY) / 100,
        rotationY: (x - centerX) / 100,
      },
      card5: {
        x: (x - centerX) / 20,
        y: (y - centerY) / 20,
        rotationX: (y - centerY) / 100,
        rotationY: (x - centerX) / 100,
      },
      card6: {
        x: (x - centerX) / 20,
        y: (y - centerY) / 20,
        rotationX: (y - centerY) / 100,
        rotationY: (x - centerX) / 100,
      },
      card7: {
        x: (x - centerX) / 20,
        y: (y - centerY) / 20,
        rotationX: (y - centerY) / 100,
        rotationY: (x - centerX) / 100,
      },
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.conception}>
          <img className={styles.title} src="images/avant&apres.webp" alt="" />
          <div
            className={`${styles.section_text}`}
            style={{ perspective: "1000px" }}
          >
            <div
              className={styles.container}
              onMouseMove={handleMouseMove1}
              style={{
                "--position": `${mousePosition1}%`,
                transform: `translate(${cardStyles.card1.x}px, ${cardStyles.card1.y}px) rotateX(${cardStyles.card1.rotationX}deg) rotateY(${cardStyles.card1.rotationY}deg)`,
              }}
            >
              <div class={styles.image__container}>
                <img
                  className={`${styles.image__after} ${styles.slider__image}`}
                  src="images/before-after/porte-before.webp"
                  alt="black and white"
                />
                <img
                  className={`${styles.image__before} ${styles.slider__image}`}
                  src="images/before-after/porte-after.webp"
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

          <div
            className={`${styles.section_text}`}
            style={{ perspective: "1000px" }}
          >
            <div
              className={styles.container}
              onMouseMove={handleMouseMove2}
              style={{
                "--position": `${mousePosition2}%`,
                transform: `translate(${cardStyles.card1.x}px, ${cardStyles.card1.y}px) rotateX(${cardStyles.card1.rotationX}deg) rotateY(${cardStyles.card1.rotationY}deg)`,
              }}
            >
              <div class={styles.image__container}>
                <img
                  className={`${styles.image__after} ${styles.slider__image}`}
                  src="images/before-after/bureau-before.webp"
                  alt="black and white"
                />
                <img
                  className={`${styles.image__before} ${styles.slider__image}`}
                  src="images/before-after/bureau-after.webp"
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

          <div
            className={`${styles.section_text}`}
            style={{ perspective: "1000px" }}
          >
            <div
              className={styles.container}
              onMouseMove={handleMouseMove3}
              style={{
                "--position": `${mousePosition3}%`,
                transform: `translate(${cardStyles.card1.x}px, ${cardStyles.card1.y}px) rotateX(${cardStyles.card1.rotationX}deg) rotateY(${cardStyles.card1.rotationY}deg)`,
              }}
            >
              <div class={styles.image__container}>
                <img
                  className={`${styles.image__after} ${styles.slider__image}`}
                  src="images/before-after/salle-before.webp"
                  alt="black and white"
                />
                <img
                  className={`${styles.image__before} ${styles.slider__image}`}
                  src="images/before-after/salle-after.webp"
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

          <div
            className={`${styles.section_text}`}
            style={{ perspective: "1000px" }}
          >
            <div
              className={styles.container}
              style={{
                "--position": `${mousePosition4}%`,
                transform: `translate(${cardStyles.card1.x}px, ${cardStyles.card1.y}px) rotateX(${cardStyles.card1.rotationX}deg) rotateY(${cardStyles.card1.rotationY}deg)`,
              }}
              onMouseMove={handleMouseMove4}
            >
              <div class={styles.image__container}>
                <img
                  className={`${styles.image__after} ${styles.slider__image}`}
                  src="images/before-after/table-haute-before.webp"
                  alt="black and white"
                />
                <img
                  className={`${styles.image__before} ${styles.slider__image}`}
                  src="images/before-after/table-haute-after.webp"
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

          <div
            className={`${styles.section_text}`}
            style={{ perspective: "1000px" }}
          >
            <div
              className={styles.container}
              style={{
                "--position": `${mousePosition5}%`,
                transform: `translate(${cardStyles.card1.x}px, ${cardStyles.card1.y}px) rotateX(${cardStyles.card1.rotationX}deg) rotateY(${cardStyles.card1.rotationY}deg)`,
              }}
              onMouseMove={handleMouseMove5}
            >
              <div class={styles.image__container}>
                <img
                  className={`${styles.image__after} ${styles.slider__image}`}
                  src="images/before-after/fenetre-before.webp"
                  alt="black and white"
                />
                <img
                  className={`${styles.image__before} ${styles.slider__image}`}
                  src="images/before-after/fenetre-after.webp"
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

          <div
            className={`${styles.section_text}`}
            style={{ perspective: "1000px" }}
          >
            <div
              className={styles.container}
              style={{
                "--position": `${mousePosition6}%`,
                transform: `translate(${cardStyles.card1.x}px, ${cardStyles.card1.y}px) rotateX(${cardStyles.card1.rotationX}deg) rotateY(${cardStyles.card1.rotationY}deg)`,
              }}
              onMouseMove={handleMouseMove6}
            >
              <div class={styles.image__container}>
                <img
                  className={`${styles.image__after} ${styles.slider__image}`}
                  src="images/before-after/casier-before.webp"
                  alt="black and white"
                />
                <img
                  className={`${styles.image__before} ${styles.slider__image}`}
                  src="images/before-after/casier-after.webp"
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

          <div
            className={`${styles.section_text}`}
            style={{ perspective: "1000px" }}
          >
            <div
              className={styles.container}
              style={{
                "--position": `${mousePosition7}%`,
                transform: `translate(${cardStyles.card1.x}px, ${cardStyles.card1.y}px) rotateX(${cardStyles.card1.rotationX}deg) rotateY(${cardStyles.card1.rotationY}deg)`,
              }}
              onMouseMove={handleMouseMove7}
            >
              <div class={styles.image__container}>
                <img
                  className={`${styles.image__after} ${styles.slider__image}`}
                  src="images/before-after/tableau-before.webp"
                  alt="black and white"
                />
                <img
                  className={`${styles.image__before} ${styles.slider__image}`}
                  src="images/before-after/tableau-after.webp"
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
