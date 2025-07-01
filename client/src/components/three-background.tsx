import { useEffect, useRef } from "react";

declare global {
  interface Window {
    THREE: any;
  }
}

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<any>(null);

  useEffect(() => {
    const initThreeJS = async () => {
      // Load Three.js dynamically
      if (!window.THREE) {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/three@0.158.0/build/three.min.js';
        script.onload = () => initScene();
        document.head.appendChild(script);
      } else {
        initScene();
      }
    };

    const initScene = () => {
      if (!containerRef.current || !window.THREE) return;

      const THREE = window.THREE;
      const container = containerRef.current;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      // Create floating geometric shapes
      const geometry1 = new THREE.BoxGeometry(1, 1, 1);
      const geometry2 = new THREE.OctahedronGeometry(0.8);
      const geometry3 = new THREE.TetrahedronGeometry(0.6);

      const material1 = new THREE.MeshBasicMaterial({
        color: 0x00FF88,
        wireframe: true,
        transparent: true,
        opacity: 0.3
      });
      const material2 = new THREE.MeshBasicMaterial({
        color: 0x00D4FF,
        wireframe: true,
        transparent: true,
        opacity: 0.2
      });
      const material3 = new THREE.MeshBasicMaterial({
        color: 0x0E1525,
        wireframe: true,
        transparent: true,
        opacity: 0.4
      });

      const shapes: any[] = [];

      // Create multiple floating shapes
      for (let i = 0; i < 15; i++) {
        const geometries = [geometry1, geometry2, geometry3];
        const materials = [material1, material2, material3];

        const shape = new THREE.Mesh(
          geometries[Math.floor(Math.random() * geometries.length)],
          materials[Math.floor(Math.random() * materials.length)]
        );

        shape.position.x = (Math.random() - 0.5) * 20;
        shape.position.y = (Math.random() - 0.5) * 20;
        shape.position.z = (Math.random() - 0.5) * 20;

        shape.rotation.x = Math.random() * Math.PI;
        shape.rotation.y = Math.random() * Math.PI;
        shape.rotation.z = Math.random() * Math.PI;

        shapes.push(shape);
        scene.add(shape);
      }

      camera.position.z = 15;

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        shapes.forEach((shape, index) => {
          shape.rotation.x += 0.002 + index * 0.0001;
          shape.rotation.y += 0.003 + index * 0.0001;
          shape.rotation.z += 0.001 + index * 0.0001;

          // Floating motion
          shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
          shape.position.x += Math.cos(Date.now() * 0.0008 + index) * 0.001;
        });

        renderer.render(scene, camera);
      };

      animate();

      // Handle window resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      // Mouse movement effect
      let mouseX = 0, mouseY = 0;
      const handleMouseMove = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

        camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
        camera.position.y += (mouseY * 2 - camera.position.y) * 0.02;
      };

      document.addEventListener('mousemove', handleMouseMove);

      sceneRef.current = {
        cleanup: () => {
          window.removeEventListener('resize', handleResize);
          document.removeEventListener('mousemove', handleMouseMove);
          if (container && renderer.domElement) {
            container.removeChild(renderer.domElement);
          }
        }
      };
    };

    initThreeJS();

    return () => {
      if (sceneRef.current?.cleanup) {
        sceneRef.current.cleanup();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ pointerEvents: 'none' }}
    />
  );
}
