/* eslint-disable */
import { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";

import { Room } from "../Room/Room-comp-max";

import styles from "./Map.module.scss";

const SoundConfirmation = ({ onConfirm }) => {
  const handleConfirm = () => {
    onConfirm(true);
  };

  const handleCancel = () => {
    onConfirm(false);
  };

  return (
    <div className={styles.soundConfirmation}>
      <p>Voulez-vous activer le son?</p>
      <div className={styles.container__button}>
        <button onClick={handleConfirm}>Oui</button>
        <button onClick={handleCancel}>Non</button>
      </div>
    </div>
  );
};

export function Map() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showSoundConfirmation, setShowSoundConfirmation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        setIsLoading(true);
        console.log("done", isLoading);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [progress]);

  // --------------------------- animation mouse

  const [cardStyles, setCardStyles] = useState({
    card1: { x: 0, y: 0, rotationX: 0, rotationY: 0 },
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
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleSoundConfirmation = (isConfirmed) => {
    setShowSoundConfirmation(false);
    if (isConfirmed) {
      const audio = new Audio("son/sound.mp3");
      audio.loop = true;
      audio.play();

      return () => {
        audio.pause();
        audio.currentTime = 0;
      };
    }
  };

  useEffect(() => {
    setShowSoundConfirmation(true);
  }, []);

  return (
    <>
      {showSoundConfirmation && (
        <SoundConfirmation onConfirm={handleSoundConfirmation} />
      )}

      <div
        className={
          isLoading
            ? `${styles.loader} ${styles.loader__active}`
            : styles.loader
        }
      >
        <span className={styles.loader__animation}></span>
        <span
          className={styles.progress}
          style={{ width: `${progress}%` }}
        ></span>
        <span className={styles.progress__bg}></span>
        <div className={styles.progressText}>{progress}%</div>
      </div>

      <div className={styles.bg__vr}></div>

      <div className={styles.container} style={{ perspective: "1000px" }}>
        <div
          className={`${styles.container__model}`}
          style={{
            transform: `translate(-50%, -50%) translate(${cardStyles.card1.x}px, ${cardStyles.card1.y}px) rotateX(${cardStyles.card1.rotationX}deg) rotateY(${cardStyles.card1.rotationY}deg)`,
          }}
        >
          <img
            className={styles.filter__vr}
            src="images/filter-vr-2.webp"
            alt=""
          />

          <Suspense fallback={null}>
            <Canvas
              className={styles.webgl}
              camera={{
                fov: 70,
                position: [0, 0, 0],
              }}
            >
              <ambientLight color="#fff" intensity={0.3} />
              <directionalLight
                color="#e05050"
                position={[3, -6.5, 21.6]}
                intensity={2.5}
              />

              <directionalLight
                color="#3c255f"
                position={[3, -6.5, 21.6]}
                intensity={1}
              />

              <Sparkles
                color="#ff0000"
                position={[-0, -1, 18]}
                scale={8}
                intensity={1.9}
                fadeFactor={0.1}
                count={100}
                maxOpacity={0.9}
                minOpacity={0.1}
                size={1}
                opacity={0.9}
                fadeOut={true}
                fadeIn={true}
                fadeOutSpeed={0.5}
                fadeInSpeed={0.5}
              />
              <OrbitControls enableZoom={false} enablePan={false} />

              {/* <Room position={[3, -8, 20]} rotation={[0.1, 3.8, 0]} /> */}
              <Room position={[3, -8, 20]} rotation={[0.1, 3.8, 0]} />
            </Canvas>
          </Suspense>
        </div>
        <div className={styles.presentation}></div>
      </div>
    </>
  );
}
