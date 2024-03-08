/* eslint-disable */
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { Quest3 } from "../Quest3/Quest3-comp";
import gsap from "gsap";
import styles from "./Visite.module.scss";

export function Visite() {
  const [isBottomVisible, setIsBottomVisible] = useState(false);
  const bottomRef = useRef(null);
  const navigate = useNavigate();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.offsetHeight;

    const bottomPosition = scrollY + windowHeight;

    setIsBottomVisible(bottomPosition >= documentHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isBottomVisible) {
      bottomRef.current.classList.add(styles.black__transition__active);

      const redirectTimer = setTimeout(() => {
        navigate("/map");
      }, 300);

      return () => clearTimeout(redirectTimer);
    } else {
      bottomRef.current.classList.remove(styles.black__transition__active);
    }
  }, [isBottomVisible]);

  return (
    <>
      <Canvas
        className={styles.webgl}
        camera={{
          fov: 60,
          position: [0, 0, 20],
        }}
      >
        <EffectComposer>
          <DepthOfField
            focusDistance={0}
            focalLength={0.02}
            bokehScale={2}
            height={480}
          />
          <Bloom luminanceThreshold={0} luminanceSmoothing={2} height={500} />
          <Noise opacity={0.08} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>

        <ambientLight color="#fff" intensity={0.5} />
        <directionalLight
          color="#e05050"
          position={[3, -6.5, 21.6]}
          intensity={1.9}
        />

        <Sparkles
          color="#ff0000"
          position={[0, 0, 0]}
          scale={40}
          intensity={1.3}
          fadeFactor={0.1}
          count={100}
          maxOpacity={0.9}
          minOpacity={0.1}
          size={2}
          opacity={0.9}
          fadeOut={true}
          fadeIn={true}
          fadeOutSpeed={0.5}
          fadeInSpeed={0.5}
        />
        <OrbitControls enableZoom={false} enablePan={false} />

        <Quest3 scale={35} />
      </Canvas>
      <div className={styles.container}>
        <div className={styles.presentation}>
          <img className={styles.logo} src="images/visite-3d.webp" alt="" />

          <img
            className={styles.scroll__arrow}
            src="images/scroll-arrow.png"
            alt=""
          />
        </div>
      </div>
      <div ref={bottomRef} className={styles.black__transition}></div>
    </>
  );
}
