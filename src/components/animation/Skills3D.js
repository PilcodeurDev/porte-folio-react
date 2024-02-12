import { useEffect } from "react";
import { PerspectiveCamera, Scene, WebGLRenderer, MeshPhongMaterial, PlaneGeometry, Mesh, TextureLoader, Group, Clock, AmbientLight } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import PropTypes from "prop-types";
import { css, cssAM, figma, figmaAM, html, htmlAM, js, jsAM, pgSQL, pgSQLAM, three, threeAM, react, reactAM, ruby, rubyAM } from "../../assets/images";

const images = [css, figma, html, js, pgSQL, three, react, ruby];
const alphaMaps = [cssAM, figmaAM, htmlAM, jsAM, pgSQLAM, threeAM, reactAM, rubyAM];

const createMesh = (image, alphaMap) => {
  const textureLoader = new TextureLoader();
  const map = textureLoader.load(image);
  const alphaMapTexture = textureLoader.load(alphaMap);

  const material = new MeshPhongMaterial({
    map: map,
    alphaMap: alphaMapTexture,
    transparent: true,
  });

  const geometry = new PlaneGeometry(400, 450);
  return new Mesh(geometry, material);
};
export default function Skills3D ({ containerId }) {
  useEffect(() => {
    const container = document.getElementById(containerId);

    if (!container) {
      console.error(`L'élément avec l'id '${containerId}' n'a pas été trouvé.`);
      return;
    }

    try {
      // scene
      const scene = new Scene();

      // camera
      const camera = new PerspectiveCamera(75, container.clientWidth / container.clientHeight, 1, 5000);
      camera.position.set(0, 0, 1500);
      scene.add(camera);

      // light
      const ambientLight = new AmbientLight(0xffffff, 2);
      scene.add(ambientLight);

      // group
      const group = new Group();

      // create meshes and add to the group
      for (let i = 0; i < images.length; i++) {
        const skill3D = createMesh(images[i], alphaMaps[i]);
        skill3D.position.x = i * 450 - 1500;
        group.add(skill3D);
      }

      // add group to the scene
      scene.add(group);

      // renderer
      const renderer = new WebGLRenderer({ antialias: true, alpha: true });
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      renderer.domElement.style.position = "absolute";
      container.appendChild(renderer.domElement);

      renderer.setSize(container.clientWidth, container.clientHeight);

      // update canvas size
      const updateCanvasSize = () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      };

      window.addEventListener('resize', updateCanvasSize);
      updateCanvasSize();

      // controls
      const controls = new OrbitControls(camera, renderer.domElement);

      // clock
      const clock = new Clock();

      // mouse position
      let mouseX = 0;
      window.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
      });

      // animation loop
      const tick = () => {
        const time = clock.getElapsedTime();
        // group.rotation.y = time * 0.1;
        renderer.render(scene, camera);
        controls.update();
        requestAnimationFrame(tick);
        const ration = mouseX / window.innerWidth - 0.5 * 2;
      };

      // start animation
      tick();
    } catch (error) {
      console.error("Une erreur s'est produite lors de l'initialisation de la scène:", error);
    }
  }, [containerId]);

  return null;
};

Skills3D.propTypes = {
  containerId: PropTypes.string.isRequired
};
