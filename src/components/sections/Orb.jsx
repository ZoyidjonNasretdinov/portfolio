"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


// Orb Component
const Orb= ({
  totalImage = 30,
  totalItems = 100,
  baseWidth = 1,
  baseHeight = 0.6,
  sphereRadius = 5,
  backgroundColor = "#3b3b3b",
}) => {
  const orbRef = useRef(null);

  useEffect(() => {
    if (!totalItems || totalItems <= 0) {
      console.error("Invalid totalItems value:", totalItems);
      return;
    }

    // Validate background color
    const validHex = /^#?[0-9A-Fa-f]{6}$/;
    const cleanColor = validHex.test(backgroundColor) ? backgroundColor.replace("#", "") : "3b3b3b";

    // Initialize Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = sphereRadius * 2; // Slightly further back

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance",
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(parseInt(cleanColor, 16) || 0x3b3b3b);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.LinearEncoding;
    renderer.gammaFactor = 2.2;

    if (orbRef.current) {
      orbRef.current.appendChild(renderer.domElement);
    }

    // Set up Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotateSpeed = 1.2;
    controls.minDistance = 6;
    controls.maxDistance = 10;
    controls.enableZoom = true;
    controls.autoRotate = true;
    controls.enablePan = false;

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    let loadedCount = 0;

    const getRandomImagePath = () => {
      return `assets/org/img${Math.floor(Math.random() * totalImage) + 1}.png`;
    };

    const createImagePlane = (texture) => {
      const imageWidth = texture.image?.width ?? 100;
      const imageHeight = texture.image?.height ?? 100;
      const imageAspect = imageWidth / imageHeight;
      let width = baseWidth;
      let height = baseHeight;

      if (imageAspect > 1) {
        height = width / imageAspect;
      } else {
        width = height * imageAspect;
      }

      return new THREE.PlaneGeometry(width, height);
    };

    const loadImageMesh = (phi, theta) => {
      textureLoader.load(
        getRandomImagePath(),
        (texture) => {
          const geometry = createImagePlane(texture);
          const material = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide,
            transparent: true,
            depthTest: true,
            encoding: THREE.LinearEncoding,
          });

          const mesh = new THREE.Mesh(geometry, material);
          mesh.position.set(
            sphereRadius * Math.sin(phi) * Math.cos(theta),
            sphereRadius * Math.sin(phi) * Math.sin(theta),
            sphereRadius * Math.cos(phi)
          );

          mesh.lookAt(new THREE.Vector3(mesh.position.x, mesh.position.y, mesh.position.z).multiplyScalar(1.1));
          scene.add(mesh);

          loadedCount++;
          if (loadedCount === totalItems) {
            animate();
          }
        },
        undefined,
        (error) => console.error("Texture loading error:", error)
      );
    };

    const createSphere = () => {
      for (let i = 0; i < totalItems; i++) {
        const phi = Math.acos(1 - (2 * i) / totalItems);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i; // Golden angle formula
        loadImageMesh(phi, theta);
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);
    createSphere();

    return () => {
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();
      scene.clear();
      if (orbRef.current) {
        orbRef.current.removeChild(renderer.domElement);
      }
    };
  }, [totalImage, totalItems, baseWidth, baseHeight, sphereRadius, backgroundColor]);

  return <div className="orb" ref={orbRef}></div>;
};

export default Orb;
