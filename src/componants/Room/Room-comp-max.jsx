/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/room-comp-max.glb 
*/

/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";

export function Room(props) {
  const { nodes, materials } = useGLTF("./models/room-comp-max.glb");
  const { gl, scene, camera } = useThree();
  const map = useRef(null);
  const [animate, setAnimate] = useState(false);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    const onMouseMove = (event) => {
      mouseX.current = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY.current = (event.clientY / window.innerHeight) * 2 - 1;
      setAnimate(true);
    };

    const update = () => {
      if (animate) {
        const coeffX = 0.5;
        const coeffY = 1.5;

        const coeffRotateX = 0.05;
        const coeffRotateY = 0.1;
        const coeffRotateZ = -0.05;

        gsap.to(map.current.position, {
          duration: 5,
          x: -mouseX.current * coeffX + 2,
          y: mouseY.current * coeffY - 8,
          ease: "power3.out",
        });

        gsap.to(map.current.rotation, {
          duration: 5,
          x: -mouseY.current * coeffRotateX + 0.1,
          y: -mouseX.current * coeffRotateY + 3.8,
          z: -mouseX.current * coeffRotateZ,

          ease: "power3.out",
        });
        setAnimate(false);
      }

      gl.render(scene, camera);
      requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", onMouseMove, false);
    update();

    return () => {
      window.removeEventListener("mousemove", onMouseMove, false);
    };
  }, [animate, camera, gl, scene]);
  return (
    <group {...props} dispose={null} ref={map}>
      <mesh
        geometry={nodes.Cube012.geometry}
        material={materials.PaletteMaterial001}
        position={[-14.503, 7.77, 20.772]}
        scale={[3.935, 0.078, 5.155]}
      />
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials.projector}
        position={[-16.001, 7.563, 22.797]}
        scale={[0.017, 0.152, 0.017]}
      />
      <group position={[-8.966, 4.602, 21.849]} scale={[1.58, 0.084, 1.616]}>
        <mesh geometry={nodes.Cube012_1.geometry} material={materials.Murs} />
        <mesh geometry={nodes.Cube012_2.geometry} material={materials.Sol} />
        <mesh
          geometry={nodes.Cube012_3.geometry}
          material={materials["Mur Vegetal"]}
        />
        <mesh
          geometry={nodes.Cube012_4.geometry}
          material={materials["Screen.002"]}
        />
        <mesh
          geometry={nodes.Cube012_5.geometry}
          material={materials["Monitor.002"]}
        />
        <mesh
          geometry={nodes.Cube012_6.geometry}
          material={materials["Tower.002"]}
        />
        <mesh
          geometry={nodes.Cube012_7.geometry}
          material={materials["Keyboard.002"]}
        />
        <mesh
          geometry={nodes.Cube012_8.geometry}
          material={materials.CrimeTape_Distressed_shader}
        />
        <mesh
          geometry={nodes.Cube012_9.geometry}
          material={materials.Wardrobe_Mat}
        />
        <mesh geometry={nodes.Cube012_10.geometry} material={materials.doors} />
        <mesh
          geometry={nodes.Cube012_11.geometry}
          material={materials.handle}
        />
        <mesh
          geometry={nodes.Cube012_12.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Cube012_13.geometry}
          material={materials.blinn2SG}
        />
        <mesh geometry={nodes.Cube012_14.geometry} material={materials.d_mat} />
        <mesh
          geometry={nodes.Cube012_15.geometry}
          material={materials["Scene_-_Root.003"]}
        />
        <mesh
          geometry={nodes.Cube012_16.geometry}
          material={materials.blinn1SG}
        />
        <mesh
          geometry={nodes.Cube012_17.geometry}
          material={materials.Lantern}
        />
        <mesh
          geometry={nodes.Cube012_18.geometry}
          material={materials["Body.001"]}
        />
        <mesh
          geometry={nodes.Cube012_19.geometry}
          material={materials["Screen.003"]}
        />
        <mesh
          geometry={nodes.Cube012_20.geometry}
          material={materials["Button.001"]}
        />
        <mesh
          geometry={nodes.Cube012_21.geometry}
          material={materials["Pile.001"]}
        />
        <mesh geometry={nodes.Cube012_22.geometry} material={materials.iPad} />
        <mesh
          geometry={nodes.Cube012_23.geometry}
          material={materials["lambert1.004"]}
        />
        <mesh
          geometry={nodes.Cube012_24.geometry}
          material={materials.Checker}
        />
        <mesh
          geometry={nodes.Cube012_25.geometry}
          material={materials["lambert3.001"]}
        />
        <mesh
          geometry={nodes.Cube012_26.geometry}
          material={materials["material_0.001"]}
        />
        <mesh
          geometry={nodes.Cube012_27.geometry}
          material={materials["Mouse.002"]}
        />
        <mesh
          geometry={nodes.Cube012_28.geometry}
          material={materials.Monitor}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/room-comp-max.glb");

export default Room;
