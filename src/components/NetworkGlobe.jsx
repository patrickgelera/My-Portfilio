import { useEffect, useRef, useState } from "react";
import styles from "./NetworkGlobe.module.css";

const SKILLS = [
  { name: "Web Development", detail: "I build and maintain BigCommerce storefronts with React, JavaScript, and TypeScript, and contribute features and fixes to Shopify stores.", position: [-0.65, 0.5, 0.65] },
  { name: "QA", detail: "I test storefront features, investigate bugs, and check fixes to help deliver reliable shopping experiences.", position: [0.7, 0.3, 0.65] },
  { name: "Cyber Security", detail: "I am transitioning into cyber security, building on my telecommunications and networking background. I completed CompTIA Security+ training and am developing my knowledge of network security, infrastructure, and system vulnerabilities.", position: [0.65, -0.45, 0.7] },
  { name: "Telecom", detail: "Ten years in telecommunications engineering, technical documentation, and team leadership shaped my understanding of networks and infrastructure.", position: [-0.2, -0.65, 0.75] },
];

export default function NetworkGlobe() {
  const hostRef = useRef(null);
  const markerRefs = useRef([]);
  const locationRef = useRef(null);
  const pausedRef = useRef(false);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const host = hostRef.current;
    let disposed = false;
    let cleanup = () => {};

    // Load the renderer separately so the rest of the portfolio can appear first.
    import("three").then((THREE) => {
      if (disposed) return;
      let renderer;
      try {
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      } catch {
        return; // The CSS globe stays visible when WebGL is unavailable.
      }
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 30);
      camera.position.z = 4.2;
      const globe = new THREE.Group();
      globe.rotation.z = -0.18;
      // Geographic coordinates use longitude 121° E as the initial front meridian.
      const latitude = THREE.MathUtils.degToRad(14.6);
      const philippines = new THREE.Vector3(0, Math.sin(latitude), Math.cos(latitude)).multiplyScalar(1.04);
      const location = new THREE.Mesh(
        new THREE.SphereGeometry(0.045, 12, 8),
        new THREE.MeshBasicMaterial({ color: 0xffd580 })
      );
      location.position.copy(philippines);
      globe.add(location);
      const skillPositions = SKILLS.map((skill) => new THREE.Vector3(...skill.position).normalize().multiplyScalar(1.04));
      skillPositions.forEach((point) => {
        const marker = new THREE.Mesh(new THREE.SphereGeometry(0.035, 10, 6), new THREE.MeshBasicMaterial({ color: 0x00e676 }));
        marker.position.copy(point);
        globe.add(marker);
      });
      scene.add(globe);
      const grid = new THREE.LineSegments(
        new THREE.WireframeGeometry(new THREE.SphereGeometry(1, 24, 14)),
        new THREE.LineBasicMaterial({ color: 0x00bcd4, transparent: true, opacity: 0.16 })
      );
      globe.add(grid);
      const vertices = [];
      const nodes = [];
      for (let i = 0; i < 60; i++) {
        const y = 1 - (i / 59) * 2;
        const radius = Math.sqrt(1 - y * y);
        const angle = i * Math.PI * (3 - Math.sqrt(5));
        const point = new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
        nodes.push(point);
        vertices.push(...point.toArray());
      }
      globe.add(new THREE.Points(
        new THREE.BufferGeometry().setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3)),
        new THREE.PointsMaterial({ color: 0x00e676, size: 0.045, sizeAttenuation: true })
      ));
      const routes = [];
      const routeVertices = [];
      for (let i = 0; i < 12; i++) {
        const start = philippines;
        const end = nodes[(i * 5 + 17) % nodes.length];
        const points = [];
        for (let step = 0; step <= 48; step++) {
          const t = step / 48;
          points.push(start.clone().lerp(end, t).normalize().multiplyScalar(1.015 + Math.sin(t * Math.PI) * 0.18));
        }
        const curve = new THREE.CatmullRomCurve3(points);
        routes.push(curve);
        for (let j = 0; j < points.length - 1; j++) routeVertices.push(...points[j].toArray(), ...points[j + 1].toArray());
      }
      globe.add(new THREE.LineSegments(
        new THREE.BufferGeometry().setAttribute("position", new THREE.Float32BufferAttribute(routeVertices, 3)),
        new THREE.LineBasicMaterial({ color: 0x00e676, transparent: true, opacity: 0.35 })
      ));
      const signalPositions = new Float32Array(routes.length * 3);
      const signalGeometry = new THREE.BufferGeometry();
      signalGeometry.setAttribute("position", new THREE.BufferAttribute(signalPositions, 3));
      globe.add(new THREE.Points(signalGeometry, new THREE.PointsMaterial({ color: 0xb4fff1, size: 0.065 })));
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.domElement.setAttribute("aria-hidden", "true");
      host.appendChild(renderer.domElement);
      host.dataset.ready = "true";
      const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
      let visible = true;
      let elapsed = 0;
      let lastTime = null;
      let targetX = 0;
      let targetY = 0;
      const projected = new THREE.Vector3();
      const world = new THREE.Vector3();
      const cameraDirection = new THREE.Vector3();
      const positionLabel = (element, point) => {
        if (!element) return;
        world.copy(point).applyMatrix4(globe.matrixWorld);
        cameraDirection.copy(camera.position).sub(world);
        const front = world.dot(cameraDirection) > 0;
        projected.copy(world).project(camera);
        element.style.left = `${(projected.x * 0.5 + 0.5) * 100}%`;
        element.style.top = `${(-projected.y * 0.5 + 0.5) * 100}%`;
        element.style.visibility = front ? "visible" : "hidden";
      };
      const draw = () => {
        routes.forEach((route, i) => route.getPointAt((elapsed * 0.12 + i / routes.length) % 1).toArray(signalPositions, i * 3));
        signalGeometry.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
        skillPositions.forEach((point, i) => positionLabel(markerRefs.current[i], point));
        positionLabel(locationRef.current, philippines);
      };
      const animate = (time) => {
        if (lastTime !== null && !pausedRef.current) elapsed += Math.min((time - lastTime) / 1000, 0.05);
        lastTime = time;
        globe.rotation.y = elapsed * 0.12 + targetX * 0.25;
        globe.rotation.x += (targetY * 0.15 - globe.rotation.x) * 0.04;
        draw();
      };
      const syncAnimation = () => {
        lastTime = null;
        renderer.setAnimationLoop(visible && !document.hidden && !motion.matches ? animate : null);
        draw();
      };
      const resize = () => {
        const { width, height } = host.getBoundingClientRect();
        renderer.setSize(width, height);
        camera.aspect = width / Math.max(height, 1);
        camera.updateProjectionMatrix();
        draw();
      };
      const pointer = (event) => {
        const bounds = host.getBoundingClientRect();
        if (pausedRef.current) return;
        targetX = (event.clientX - bounds.left) / bounds.width - 0.5;
        targetY = (event.clientY - bounds.top) / bounds.height - 0.5;
      };
      const reset = () => { targetX = 0; targetY = 0; };
      const contextLost = (event) => {
        event.preventDefault();
        renderer.setAnimationLoop(null);
        delete host.dataset.ready;
      };
      const observer = new ResizeObserver(resize);
      observer.observe(host);
      const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; syncAnimation(); });
      intersection.observe(host);
      host.addEventListener("pointermove", pointer);
      host.addEventListener("pointerleave", reset);
      renderer.domElement.addEventListener("webglcontextlost", contextLost);
      document.addEventListener("visibilitychange", syncAnimation);
      motion.addEventListener("change", syncAnimation);
      resize();
      syncAnimation();
      cleanup = () => {
        renderer.setAnimationLoop(null);
        observer.disconnect();
        intersection.disconnect();
        host.removeEventListener("pointermove", pointer);
        host.removeEventListener("pointerleave", reset);
        renderer.domElement.removeEventListener("webglcontextlost", contextLost);
        document.removeEventListener("visibilitychange", syncAnimation);
        motion.removeEventListener("change", syncAnimation);
        scene.traverse((object) => {
          object.geometry?.dispose();
          object.material?.dispose();
        });
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
        delete host.dataset.ready;
      };
    }).catch(() => { /* Keep the static fallback if the renderer cannot load. */ });
    return () => { disposed = true; cleanup(); };
  }, []);

  return (
    <div className={styles.explorer}>
      <div
        className={styles.globe}
        ref={hostRef}
        onPointerEnter={() => { pausedRef.current = true; }}
        onPointerLeave={() => { pausedRef.current = false; }}
        onFocus={() => { pausedRef.current = true; }}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) pausedRef.current = false;
        }}
      >
        <div className={styles.fallback} aria-hidden="true"><span /><span /><span /></div>
        {SKILLS.map((skill, index) => (
          <button
            key={skill.name}
            ref={(element) => { markerRefs.current[index] = element; }}
            className={styles.node}
            style={{ left: `${index % 2 === 0 ? 30 : 70}%`, top: `${index < 2 ? 30 : 68}%` }}
            onClick={() => setSelected(index)}
            aria-label={`Explore ${skill.name} experience`}
            aria-pressed={selected === index}
          >{skill.name}</button>
        ))}
        <span className={styles.location} ref={locationRef}>● Philippines</span>
      </div>
      <div className={styles.skills} role="group" aria-label="Explore my experience">
        {SKILLS.map((skill, index) => (
          <button key={skill.name} aria-pressed={selected === index} onClick={() => setSelected(index)}>{skill.name}</button>
        ))}
      </div>
      <div className={styles.detail} aria-live="polite" aria-atomic="true">
        <strong>{SKILLS[selected].name}</strong>
        <p>{SKILLS[selected].detail}</p>
      </div>
    </div>
  );
}
