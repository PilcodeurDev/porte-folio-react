import { useEffect } from "react";
import { PerspectiveCamera, Points, Scene, WebGLRenderer, PointsMaterial, BufferGeometry, Float32BufferAttribute, MathUtils, TextureLoader, Group, Clock, LineBasicMaterial, Line, MeshPhongMaterial, PlaneGeometry, Mesh, PointLight, AmbientLight } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import propTypes from "prop-types";
import { css, cssAM, figma, figmaAM, html, htmlAM, js, jsAM, pgSQL, pgSQLAM, three, threeAM, react, reactAM, ruby, rubyAM } from "../../assets/images";

export default function Skills3D({ containerId }) {
  useEffect(() => {
    const scene = new Scene();
    const container = document.getElementById(containerId);

    if (container) {
      const camera = new PerspectiveCamera(75, container.clientWidth / container.clientHeight, 1, 5000);
      camera.position.set(0, 0, 400);
      scene.add(camera);

      const ambientLight = new AmbientLight(0xffffff, 2);
      scene.add(ambientLight);

      const textureLoader = new TextureLoader();
      let Map = textureLoader.load(css);
      let alphaMap = textureLoader.load(cssAM);

      let material = new MeshPhongMaterial({
        map: Map,
        alphaMap: alphaMap,
        transparent: true
      });

      let geometry = new PlaneGeometry(400,450,50,50);
      let skill3D = new Mesh(geometry, material);

      // const points = new Float32Array(count * 3);
      // for (let i = 0; i < points.length; i++) {
      //   points[i] = MathUtils.randFloatSpread(distance * 2);
      // }

      // const pointGeometry = new BufferGeometry();
      // pointGeometry.setAttribute('position', new Float32BufferAttribute(points, 3));

      // const pointMaterial = new PointsMaterial({
      //   size,
      //   sizeAttenuation: true,
      //   transparent: true,
      //   alphaMap: alphaMap,
      //   alphaTest: 0.5,
      //   vertexColors: true
      // });

      // const pointsObject = new Points(pointGeometry, pointMaterial);

      const group = new Group();
      group.add(skill3D);

      // const lineMaterial = new LineBasicMaterial({
      //   color: 0xa1a1a1,
      //   depthTest: false,
      // });

      // const lineObject = new Line(pointGeometry, lineMaterial);
      // group.add(lineObject);

      scene.add(group);

      const renderer = new WebGLRenderer({ antialias: true, alpha: true });
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      renderer.domElement.style.position = "absolute";
      container.appendChild(renderer.domElement);

      renderer.setSize(container.clientWidth, container.clientHeight);

      const updateCanvasSize = () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      };

      window.addEventListener('resize', updateCanvasSize);
      updateCanvasSize();

      const controls = new OrbitControls(camera, renderer.domElement);
      const clock = new Clock();

      let mouseX = 0;
      window.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
      });

      function tick() {
        const time = clock.getElapsedTime();
        // group.rotation.y = time * 0.1;
        renderer.render(scene, camera);
        controls.update();
        requestAnimationFrame(tick);
        const ration = mouseX / window.innerWidth - 0.5 * 2;
      }

      tick();
    } else {
      console.error("L'élément avec l'id 'particules-container' n'a pas été trouvé.");
    }
  }, []);

  return null;
}

Skills3D.propTypes = {
  containerId: propTypes.string.isRequired
}
