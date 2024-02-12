// Dans votre fichier Skills3D.js
import { useEffect } from "react";
import { PerspectiveCamera, Points, Scene, WebGLRenderer, PointsMaterial, BufferGeometry, Float32BufferAttribute, MathUtils, TextureLoader, Group, Clock, LineBasicMaterial, Line } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import propTypes from "prop-types";

export default function Skills3D({ containerId }) {
  useEffect(() => {
    const textureLoader = new TextureLoader();
    const alphaMap = textureLoader.load("./src/assets/alphamap.png");

    const scene = new Scene();
    const count = 100;
    const distance = 2;
    const size = 0.1;

    const container = document.getElementById(containerId);

    if (container) {
      const camera = new PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 100);
      camera.position.x = .5;
      camera.position.y = 3;
      camera.position.z = 2;
      scene.add(camera);

      const points = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      for (let i = 0; i < points.length; i++) {
        points[i] = MathUtils.randFloatSpread(distance * 2);
        colors[i] = Math.random() / 0.5 - 0.5;
      }

      const pointGeometry = new BufferGeometry();
      pointGeometry.setAttribute('position', new Float32BufferAttribute(points, 3));
      pointGeometry.setAttribute('color', new Float32BufferAttribute(colors, 3));

      const pointMaterial = new PointsMaterial({
        size,
        sizeAttenuation: true,
        transparent: true,
        alphaMap: alphaMap,
        alphaTest: 0.5,
        vertexColors: true
      });

      const pointsObject = new Points(pointGeometry, pointMaterial);

      const group = new Group();
      group.add(pointsObject);

      const lineMaterial = new LineBasicMaterial({
        color: 0xa1a1a1,
        depthTest: false,
      });

      const lineObject = new Line(pointGeometry, lineMaterial);
      group.add(lineObject);

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
        group.rotation.y = time * 0.1;
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
