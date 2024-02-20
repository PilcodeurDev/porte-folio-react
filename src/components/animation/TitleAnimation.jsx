/**
 * The external imports
 */
import {
  CameraControls,
  Environment,
  Float,
  RenderTexture,
  Text,
  MeshReflectorMaterial,
  useFont,
} from "@react-three/drei";
import { useEffect, useRef } from "react";
import { degToRad } from "three/src/math/MathUtils";
import { Color } from "three";

/**
 * The internal imports
 */
import GoodNeighbor from "./GoodNeighbor";

const bloomColor = new Color("#fff");
bloomColor.multiplyScalar(1.5);

export default function Experience() {
  const controls = useRef();
  const meshFitCamera = useRef();

  const fitCamera = async () => {
    controls.current.fitToBox(meshFitCamera.current, true);
  };

  useEffect(() => {
    window.addEventListener("resize", fitCamera);

    return () => window.removeEventListener("resize", fitCamera);
  }, []);

  useEffect(() => {
    controls.current.dolly(-20);
    controls.current.smoothTime = 1.6;
    fitCamera();
  });

  useEffect(() => {
    fitCamera();
  }, []);

  return (
    <>
      <CameraControls ref={controls} />
      <mesh ref={meshFitCamera} position={[0, 0, 0]}>
        <boxGeometry args={[5, 2.5, 1]} />
        <meshBasicMaterial
          color="pink"
          transparent
          opacity={0.1}
          visible={false}
        />
      </mesh>
      <Text
        font={"fonts/Poppins-Black.ttf"}
        position-y={0.5}
        rotation-x={degToRad(30)}
        lineHeight={0.85}
        letterSpacing={-0.05}
        textAlign="center"
      >
        CREATEUR {"\n"}
        DE SITE WEB
        <meshBasicMaterial color={bloomColor} toneMapped={false}>
          <RenderTexture attach="map">
            <color attach="background" args={["#fff"]} />
            <Environment preset="sunset" />
            <Float floatIntensity={2} rotationIntensity={2}>
              <GoodNeighbor
                scale={2}
                rotation-x={degToRad(25)}
                rotation-y={-degToRad(180)}
                position-x={0}
                position-y={1}
                position-z={-1}
              />
            </Float>
          </RenderTexture>
        </meshBasicMaterial>
      </Text>
      <mesh position-y={-0.4} rotation-x={-Math.PI / 2 + degToRad(30)}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[100, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={5}
          roughness={1}
          depthScale={1}
          opacity={1}
          transparent
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#183966"
          metalness={0.5}
        />
      </mesh>
      <Environment preset="sunset" />
      <color attach="background" args={["#171720"]} />
    </>
  );
}

useFont.preload("fonts/Poppins-Black.ttf");
