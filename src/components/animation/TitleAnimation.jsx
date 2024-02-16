/* eslint-disable react/no-unknown-property */
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
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Suspense, useEffect, useRef, useState } from "react";
import { Color } from "three";

/**
 * The internal imports
 */
import GoodNeighbor from "./GoodNeighbor";
import { degToRad } from "three/src/math/MathUtils";

const bloomColor = new Color("#fff");
bloomColor.multiplyScalar(1.5);

export default function Experience() {
  const [isBelowLG, setIsBelowLG] = useState(true);
  const controls = useRef();
  const meshFitCamera = useRef();

  const intro = async () => {
    controls.current.dolly(-20);
    controls.current.smoothTime = 1.6;
    fitCamera();
  };

  const fitCamera = async () => {
    controls.current.fitToBox(meshFitCamera.current, true);
  };

  useEffect(() => {
    intro();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", fitCamera);

    return () => {
      window.removeEventListener("resize", fitCamera);
    };
  }, []);

  return (
    <>
      <Canvas camera={{ position: [0, 0, 4.3], fov: 35 }}>
        <fog attach="fog" args={["#171720", 10, 25]} />
        <Suspense>
          <Environment preset="sunset" />
          <color attach="background" args={["#171720"]} />
          <CameraControls ref={controls} />
          <mesh ref={meshFitCamera} position={[0, 0.4, 0]}>
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
            rotation-x={degToRad(20)}
            lineHeight={0.8}
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
          <mesh position-y={-0.3} rotation-x={-Math.PI / 2 + degToRad(20)}>
            <planeGeometry args={[100, 100]} />
            <MeshReflectorMaterial
              blur={[100, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={20}
              roughness={1}
              depthScale={1}
              opacity={1}
              transparent
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#333"
              metalness={0.5}
            />
          </mesh>
        </Suspense>
        <EffectComposer>
          <Bloom mipmapBlur intensity={1.2} />
        </EffectComposer>
      </Canvas>
    </>
  );
}
