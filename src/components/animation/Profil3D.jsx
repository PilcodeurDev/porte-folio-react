import { shaderMaterial, useTexture } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { easing, geometry } from "maath";

export const ImageFadeMaterial = shaderMaterial(
  {
    effectFactor: 1.2,
    dispFactor: 0,
    tex: undefined,
    tex2: undefined,
    disp: undefined,
  },
  /* glsl*/ `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`,

  /* glsl*/ `
        varying vec2 vUv;
        uniform sampler2D tex;
        uniform sampler2D tex2;
        uniform sampler2D disp;
        uniform float _rot;
        uniform float dispFactor;
        uniform float effectFactor;
        void main() {
          vec2 uv = vUv;
          vec4 disp = texture2D(disp, uv);
          vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y );
          vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
          vec4 _texture = texture2D(tex, distortedPosition);
          vec4 _texture2 = texture2D(tex2, distortedPosition2);
          vec4 finalTexture = mix(_texture, _texture2, dispFactor);
          gl_FragColor = finalTexture;
          #include <tonemapping_fragment>
          #include <encodings_fragment>
        }`
);

extend({
  ImageFadeMaterial,
  RoundedPlaneGeometry: geometry.RoundedPlaneGeometry,
});

export default function Profil3D({ img1, img2, ratio, screenSize }) {
  const ref = useRef();
  const [texture1, texture2, dispTexture] = useTexture([
    img1,
    img2,
    "/profil/displacement/10.jpg",
  ]);
  const [hovered, setHover] = useState(false);
  useFrame((_state, delta) => {
    easing.damp(ref.current, "dispFactor", hovered ? 1 : 0, 0.4, delta);
  });

  return screenSize === "phone" ? (
    <mesh onClick={() => setHover(!hovered)}>
      <roundedPlaneGeometry
        args={ratio}
        // 9:16 aspect ratio = args={[2.25, 4]}
      />
      <imageFadeMaterial
        ref={ref}
        tex={texture1}
        tex2={texture2}
        disp={dispTexture}
        toneMapped={false}
      />
    </mesh>
  ) : (
    <mesh
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <roundedPlaneGeometry
        args={ratio}
        // 9:16 aspect ratio = args={[2.25, 4]}
      />
      <imageFadeMaterial
        ref={ref}
        tex={texture1}
        tex2={texture2}
        disp={dispTexture}
        toneMapped={false}
      />
    </mesh>
  );
}
