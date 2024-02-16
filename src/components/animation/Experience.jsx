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
import { Suspense, useEffect, useState } from "react";
import { Color } from "three";

/**
 * The internal imports
 */
import Profil3D from "../../components/animation/Profil3D";
import GoodNeighbor from "../animation/GoodNeighbor";
import { degToRad } from "three/src/math/MathUtils";

const bloomColor = new Color("#fff");
bloomColor.multiplyScalar(1.5);

export default function Experience({ animatedElement }) {
  const [isBelowLG, setIsBelowLG] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsBelowLG(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (animatedElement === "profil") {
    return (
      <>
        {isBelowLG ? (
          <div className="h-[320px]">
            <Suspense>
              <Canvas
                camera={{ position: [0, 0, 4.6], fov: 42 }}
                style={{
                  height: "300px",
                  width: "300px",
                  position: "fixed",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <Profil3D
                  img1={"/profil/profil-ellipse.png"}
                  img2={"/profil/profiln&b-ellipse.png"}
                  ratio={[3.2, 3.2]}
                />
              </Canvas>
            </Suspense>
          </div>
        ) : (
          <Suspense>
            <Canvas
              camera={{ position: [0, 0, 4.6], fov: 42 }}
              style={{
                height: "92%",
                width: "40%",
                position: "fixed",
                top: "4%",
              }}
            >
              <Profil3D
                img1={"/profil/profil.jpg"}
                img2={"/profil/profiln&b.jpg"}
                ratio={[2.25, 3.5]}
              />
            </Canvas>
          </Suspense>
        )}
      </>
    );
  } else if (animatedElement === "title") {
    return (
      <>
        <Canvas camera={{ position: [0, 2, 5.8], fov: 35 }}>
          <Suspense>
            <CameraControls />
            <color attach="background" args={["#171720"]} />
            <Text
              font={"fonts/Poppins-Black.ttf"}
              position-y={1}
              position-z={2}
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
            <mesh position-y={0.23} rotation-x={-Math.PI / 2}>
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
            <Environment preset="sunset" />
          </Suspense>
          <EffectComposer>
            <Bloom mipmapBlur intensity={1.2} />
          </EffectComposer>
        </Canvas>
      </>
    );
  }
}
