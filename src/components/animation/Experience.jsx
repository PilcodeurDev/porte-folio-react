/**
 * The external imports
 */
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";

/**
 * The internal imports
 */
import Profil3D from "../../components/animation/Profil3D";

export default function Experience() {
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

  return (
    <>
      {isBelowLG ? (
        <div className="h-[320px]">
          <Canvas
            camera={{ position: [0, 0, 4.6], fov: 42 }}
            style={{
              height: "300px",
              width: "300px",
              position: "fixed",
              top: "4%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Profil3D
              img1={"/src/assets/images/profil/profil-ellipse.png"}
              img2={"/src/assets/images/profil/profiln&b-ellipse.png"}
              ratio={[3.2, 3.2]}
            />
          </Canvas>
        </div>
      ) : (
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
            img1={"/src/assets/images/profil/profil.jpg"}
            img2={"/src/assets/images/profil/profiln&b.jpg"}
            ratio={[2.25, 3.5]}
          />
        </Canvas>
      )}
    </>
  );
}
