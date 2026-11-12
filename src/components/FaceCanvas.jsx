import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FaceCanvas = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Mouse position tracking
    let mouse = { x: 0, y: 0 };
    const handleMouseMove = (event) => {
      // Map mouse position to -1 to 1 range
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    // Renderer setup
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
      });
    } catch {
      // WebGL unavailable: leave the canvas empty instead of crashing the page
      window.removeEventListener('mousemove', handleMouseMove);
      return;
    }
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Cyber Hologram Group
    const cyberGroup = new THREE.Group();
    scene.add(cyberGroup);

    const headGroup = new THREE.Group();
    cyberGroup.add(headGroup);

    // Materials (Neon & Glowing Wireframe Aesthetics)
    const neonTealMain = new THREE.MeshBasicMaterial({
      color: 0x00ffcc, // Bright neon cyan/teal
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });

    const neonTealAura = new THREE.MeshBasicMaterial({
      color: 0x00ffcc,
      wireframe: true,
      transparent: true,
      opacity: 0.2, // Glowing edge aura
    });

    const neonCreamMain = new THREE.MeshBasicMaterial({
      color: 0xffefb3, // Glow cream to match site accents
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });

    const neonCreamAura = new THREE.MeshBasicMaterial({
      color: 0xffefb3,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });

    const solidNeonTeal = new THREE.MeshBasicMaterial({
      color: 0x00ffcc,
      transparent: true,
      opacity: 0.85,
    });

    const solidNeonTealGlow = new THREE.MeshBasicMaterial({
      color: 0x00ffcc,
      transparent: true,
      opacity: 0.25,
    });

    const solidNeonCream = new THREE.MeshBasicMaterial({
      color: 0xffefb3,
      transparent: true,
      opacity: 0.9,
    });

    // 1. Head Wireframe Shell (Low-poly sphere)
    const headGeom = new THREE.SphereGeometry(1.3, 10, 10);
    
    // Core structure (cream neon)
    const headCore = new THREE.Mesh(headGeom, neonCreamMain);
    headGroup.add(headCore);

    // Glowing aura (teal neon, slightly larger)
    const headAura = new THREE.Mesh(headGeom, neonTealAura);
    headAura.scale.setScalar(1.03);
    headGroup.add(headAura);

    // 2. Ears (Low-poly Cones for cyber-kitsune/cat look)
    const earGeom = new THREE.ConeGeometry(0.38, 0.85, 4);

    // Left Ear
    const leftEarCore = new THREE.Mesh(earGeom, neonCreamMain);
    leftEarCore.rotation.set(0.2, 0, 0.5);
    leftEarCore.position.set(-0.75, 1.15, 0);

    const leftEarAura = new THREE.Mesh(earGeom, neonTealAura);
    leftEarAura.scale.setScalar(1.05);
    leftEarCore.add(leftEarAura);
    headGroup.add(leftEarCore);

    // Right Ear
    const rightEarCore = new THREE.Mesh(earGeom, neonCreamMain);
    rightEarCore.rotation.set(0.2, 0, -0.5);
    rightEarCore.position.set(0.75, 1.15, 0);

    const rightEarAura = new THREE.Mesh(earGeom, neonTealAura);
    rightEarAura.scale.setScalar(1.05);
    rightEarCore.add(rightEarAura);
    headGroup.add(rightEarCore);

    // 3. Eyes (Glowing Neon Rings / Toruses)
    const eyeGeom = new THREE.TorusGeometry(0.18, 0.02, 8, 32);
    
    const leftEye = new THREE.Mesh(eyeGeom, solidNeonTeal);
    leftEye.position.set(-0.35, 0.22, 1.05);
    const leftEyeGlow = new THREE.Mesh(new THREE.TorusGeometry(0.19, 0.038, 8, 32), solidNeonTealGlow);
    leftEye.add(leftEyeGlow);

    const rightEye = leftEye.clone();
    rightEye.position.x = 0.35;
    
    headGroup.add(leftEye);
    headGroup.add(rightEye);

    // 4. Pupils (Gaze tracking neon spheres)
    const pupilGeom = new THREE.SphereGeometry(0.045, 16, 16);
    
    const leftPupil = new THREE.Mesh(pupilGeom, solidNeonCream);
    const rightPupil = leftPupil.clone();

    // Group pupils separately to track gaze relative to eyes
    const pupilGroup = new THREE.Group();
    headGroup.add(pupilGroup);
    pupilGroup.add(leftPupil);
    pupilGroup.add(rightPupil);

    const baseLeftPupilPos = new THREE.Vector3(-0.35, 0.22, 1.15);
    const baseRightPupilPos = new THREE.Vector3(0.35, 0.22, 1.15);
    leftPupil.position.copy(baseLeftPupilPos);
    rightPupil.position.copy(baseRightPupilPos);

    // 5. Holographic Snout/Nose
    const noseGeom = new THREE.OctahedronGeometry(0.08, 0);
    const nose = new THREE.Mesh(noseGeom, solidNeonCream);
    nose.position.set(0, 0.04, 1.15);
    headGroup.add(nose);

    // 6. Floating Inner Core Particles (Teal Neon Dust)
    const particleCount = 70;
    const particleGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Random position inside head sphere
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 1.1; // radius slightly smaller than shell

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x00ffcc,
      size: 0.042,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    headGroup.add(particles);

    // 7. Rotating Outer Data Rings (Orbits)
    const ring1Geom = new THREE.TorusGeometry(1.85, 0.012, 8, 64);
    const ring1 = new THREE.Mesh(ring1Geom, neonTealMain);
    ring1.rotation.set(Math.PI / 3, Math.PI / 6, 0);
    cyberGroup.add(ring1);

    const ring2Geom = new THREE.TorusGeometry(2.15, 0.008, 8, 64);
    const ring2 = new THREE.Mesh(ring2Geom, neonCreamMain);
    ring2.rotation.set(Math.PI / 4, -Math.PI / 4, 0);
    cyberGroup.add(ring2);

    // Render loop variables
    let animationFrameId;
    let targetRotX = 0;
    let targetRotY = 0;
    const clock = new THREE.Clock();

    // Intersection Observer to pause rendering when off-screen
    let isVisible = true;
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    visibilityObserver.observe(container);

    // Animation loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return; // Pause calculations and rendering if off-screen

      const elapsedTime = clock.getElapsedTime();

      // Smoothly lerp head rotation to face the mouse
      targetRotY = mouse.x * 0.65;
      targetRotX = -mouse.y * 0.45;

      headGroup.rotation.y += (targetRotY - headGroup.rotation.y) * 0.08;
      headGroup.rotation.x += (targetRotX - headGroup.rotation.x) * 0.08;

      // Rotate data rings continuously
      ring1.rotation.z = elapsedTime * 0.15;
      ring2.rotation.z = -elapsedTime * 0.22;

      // Micro-gaze tracking for pupils
      const pupilShiftX = mouse.x * 0.038;
      const pupilShiftY = mouse.y * 0.028;
      
      leftPupil.position.set(
        baseLeftPupilPos.x + pupilShiftX,
        baseLeftPupilPos.y + pupilShiftY,
        baseLeftPupilPos.z
      );
      rightPupil.position.set(
        baseRightPupilPos.x + pupilShiftX,
        baseRightPupilPos.y + pupilShiftY,
        baseRightPupilPos.z
      );

      // Subtle breathing floating motion
      cyberGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.08 - 0.1;

      // Slowly rotate inner particles
      particles.rotation.y = elapsedTime * 0.06;
      particles.rotation.x = elapsedTime * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();

      // Dispose resources
      headGeom.dispose();
      earGeom.dispose();
      eyeGeom.dispose();
      pupilGeom.dispose();
      noseGeom.dispose();
      particleGeom.dispose();
      ring1Geom.dispose();
      ring2Geom.dispose();

      neonTealMain.dispose();
      neonTealAura.dispose();
      neonCreamMain.dispose();
      neonCreamAura.dispose();
      solidNeonTeal.dispose();
      solidNeonTealGlow.dispose();
      solidNeonCream.dispose();
      particleMat.dispose();

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '400px',
        maxWidth: '450px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        margin: '0 auto',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </div>
  );
};

export default FaceCanvas;
