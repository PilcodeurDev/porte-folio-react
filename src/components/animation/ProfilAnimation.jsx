/**
 * The external imports
 */
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

/**
 * The internal imports
 */
import Profil3D from "../../components/animation/Profil3D";

export default function ProfilAnimation() {
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
          <Suspense>
            <Canvas camera={{ position: [0, 0, 4.6], fov: 42 }}>
              <Profil3D
                img1={"/profil/profil-ellipse.png"}
                img2={"/profil/profiln&b-ellipse.png"}
                ratio={[3.2, 3.2]}
                screenSize={"phone"}
              />
            </Canvas>
          </Suspense>
        </div>
      ) : (
        <Suspense>
          <Canvas camera={{ position: [0, 0, 4.6], fov: 42 }}>
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
}
