import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.scss";

export function Home() {
  const [cardStyles, setCardStyles] = useState({
    card1: { x: 0, y: 0, rotationX: 0, rotationY: 0 },
    card2: { x: 0, y: 0, rotationX: 0, rotationY: 0 },
    card3: { x: 0, y: 0, rotationX: 0, rotationY: 0 },
  });

  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    setCardStyles({
      card1: {
        x: (x - centerX) / 20,
        y: (y - centerY) / 20,
        rotationX: (y - centerY) / 100, // Adjust the rotation factor as needed
        rotationY: (x - centerX) / 100,
      },
      card2: {
        x: (x - centerX) / 40,
        y: (y - centerY) / 40,
        rotationX: (y - centerY) / 100,
        rotationY: (x - centerX) / 100,
      },
      card3: {
        x: (x - centerX) / 60,
        y: (y - centerY) / 60,
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
    <div className={styles.container}>
      <div className={styles.home}>
        <div className={styles.text}>
          <div className={styles.container__text}>
            <img
              className={styles.logo__title}
              src="images/logo-title.webp"
              alt=""
            />
            <div className={styles.genre}>
              <div className={styles.logo__netflix}>
                <img src="images/logo-n.webp" alt="" />
                <span>GAMES</span>
              </div>

              <div className={styles.age}>
                <p>+18</p>
              </div>

              <span className={styles.jeu}>Jeu réalisé avec Unity</span>

              <span className={styles.jeu}>968Mo</span>
            </div>
            <p className={styles.paragraphe}>
              Pour la validation du module, nous devions créer en binôme, un
              &ldquo;mini escape game&ldquo; en réalité virtuelle pour le casque
              Oculus. Le défi consiste à choisir une salle de l&apos;IUT (h205
              pour nous) et concevoir une énigme permettant de
              &ldquo;sortir&ldquo; de cet espace après avoir accompli au moins
              quatre actions spécifiques.
            </p>
            <div className={styles.container__btns}>
              <button className={styles.btn__play}>En savoir plus</button>

              <Link
                className={styles.btn__download}
                to="https://mega.nz/file/IeUVFSxK#QgGXuJsdhG3MNzeSK6phsENG_4D3_XSWf1XiEzQ8EoY"
                target="_blank"
                download
              >
                Télécharger l&apos;APK
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.illustration} style={{ perspective: "1000px" }}>
          <img
            className={`${styles.card} ${styles.card__3}`}
            src="images/card-3.webp"
            alt="card"
            style={{
              transform: `translate(-50%, -50%) translate(${cardStyles.card3.x}px, ${cardStyles.card3.y}px) rotateX(${cardStyles.card3.rotationX}deg) rotateY(${cardStyles.card3.rotationY}deg)`,
            }}
          />
          <img
            className={`${styles.card} ${styles.card__2}`}
            src="images/card-2.webp"
            alt="card"
            style={{
              transform: `translate(-50%, -50%) translate(${cardStyles.card2.x}px, ${cardStyles.card2.y}px) rotateX(${cardStyles.card2.rotationX}deg) rotateY(${cardStyles.card2.rotationY}deg)`,
            }}
          />
          <img
            className={`${styles.card} ${styles.card__1}`}
            src="images/card-1.webp"
            alt="card"
            style={{
              transform: `translate(-50%, -50%) translate(${cardStyles.card1.x}px, ${cardStyles.card1.y}px) rotateX(${cardStyles.card1.rotationX}deg) rotateY(${cardStyles.card1.rotationY}deg)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
