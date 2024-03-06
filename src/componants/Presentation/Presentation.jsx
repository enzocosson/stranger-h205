/* eslint-disable */
import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { Room } from "../Room/Room";

import styles from "./Presentation.module.scss";

export function Presentation() {
  return (
    <>
      {" "}
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

        <Room position={[3, -6.5, 21]} rotation={[0.1, 3.8, 0]} />
      </Canvas>
      <div className={styles.container}>
        <div className={styles.presentation}></div>
      </div>
    </>
  );
}
