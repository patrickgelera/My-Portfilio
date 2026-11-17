import { useEffect, useRef, useState } from "react";
import styles from "./SkillCluster.module.css";

const GROUPS = [
  { name: "Frontend", color: "#00e676", tools: ["React", "TypeScript", "BigCommerce", "Shopify"], text: "Building responsive storefronts and interactive web experiences." },
  { name: "Backend", color: "#00bcd4", tools: ["Node.js", "PHP", "MySQL", "MongoDB"], text: "Connecting applications to APIs, databases, and real-time services." },
  { name: "QA & Dev Tools", color: "#ffd580", tools: ["Manual Testing", "Git", "Docker", "Selenium"], text: "Investigating bugs, verifying fixes, and supporting reliable releases." },
];

export default function SkillCluster() {
  const hostRef = useRef(null);
  const selectionRef = useRef(0);
  const syncRef = useRef(() => {});
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);

  useEffect(() => {
    selectionRef.current = selected;
    syncRef.current();
  }, [selected]);
  useEffect(() => {
    pausedRef.current = paused;
    syncRef.current();
  }, [paused]);

  useEffect(() => {
    const host = hostRef.current;
    let disposed = false;
    let started = false;
    let visible = false;
    let cleanup = () => {};
    const load = async () => {
      const THREE = await import("three");
      if (disposed) return;
      let renderer;
      try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); }
      catch { return; }
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 30);
      camera.position.z = 8;
      const cluster = new THREE.Group();
      scene.add(cluster);
      const resources = new Set();
      const mesh = (geometry, material, parent = cluster) => {
        resources.add(geometry);
        resources.add(material);
        const object = new THREE.Mesh(geometry, material);
        parent.add(object);
        return object;
      };
      const core = mesh(new THREE.IcosahedronGeometry(0.42, 1), new THREE.MeshBasicMaterial({ color: 0xb4fff1, wireframe: true }));
      const branches = GROUPS.map((group, index) => {
        const branch = new THREE.Group();
        cluster.add(branch);
        const angle = Math.PI / 2 + index * Math.PI * 2 / 3;
        const center = new THREE.Vector3(Math.cos(angle) * 1.55, Math.sin(angle) * 1.3, 0);
        const material = new THREE.MeshBasicMaterial({ color: group.color, transparent: true });
        mesh(new THREE.IcosahedronGeometry(0.22, 0), material, branch).position.copy(center);
        const points = [new THREE.Vector3(), center];
        group.tools.forEach((_, i) => {
          const theta = angle + (i - 1.5) * 0.65;
          const point = center.clone().add(new THREE.Vector3(Math.cos(theta) * 0.75, Math.sin(theta) * 0.65, (i % 2 ? 1 : -1) * 0.45));
          mesh(new THREE.SphereGeometry(0.07, 12, 8), material, branch).position.copy(point);
          points.push(center, point);
        });
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const lines = new THREE.LineBasicMaterial({ color: group.color, transparent: true });
        resources.add(geometry);
        resources.add(lines);
        branch.add(new THREE.LineSegments(geometry, lines));
        return { material, lines };
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      host.appendChild(renderer.domElement);
      host.dataset.ready = "true";
      const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
      let contextAvailable = true;
      let elapsed = 0;
      let previous = null;
      let pointerX = 0;
      let pointerY = 0;
      const draw = () => {
        branches.forEach(({ material, lines }, i) => {
          material.opacity = i === selectionRef.current ? 1 : 0.25;
          lines.opacity = i === selectionRef.current ? 0.8 : 0.12;
        });
        renderer.render(scene, camera);
      };
      const animate = (time) => {
        if (previous !== null) elapsed += Math.min((time - previous) / 1000, 0.05);
        previous = time;
        cluster.rotation.y = Math.sin(elapsed * 0.3) * 0.25 + pointerX * 0.2;
        cluster.rotation.x = Math.sin(elapsed * 0.2) * 0.08 + pointerY * 0.15;
        core.rotation.y = elapsed * 0.3;
        draw();
      };
      const sync = () => {
        previous = null;
        renderer.setAnimationLoop(contextAvailable && visible && !document.hidden && !motion.matches && !pausedRef.current ? animate : null);
        if (contextAvailable) draw();
      };
      syncRef.current = sync;
      const resize = () => {
        const { width, height } = host.getBoundingClientRect();
        renderer.setSize(width, height);
        camera.aspect = width / Math.max(height, 1);
        camera.position.z = camera.aspect < 1.2 ? 9 : 8;
        camera.updateProjectionMatrix();
        if (contextAvailable) draw();
      };
      const pointer = (event) => {
        const bounds = host.getBoundingClientRect();
        pointerX = (event.clientX - bounds.left) / bounds.width - 0.5;
        pointerY = (event.clientY - bounds.top) / bounds.height - 0.5;
      };
      const reset = () => { pointerX = 0; pointerY = 0; };
      const lost = (event) => { event.preventDefault(); contextAvailable = false; delete host.dataset.ready; sync(); };
      const restored = () => { contextAvailable = true; host.dataset.ready = "true"; resize(); sync(); };
      const observer = new ResizeObserver(resize);
      observer.observe(host);
      host.addEventListener("pointermove", pointer);
      host.addEventListener("pointerleave", reset);
      renderer.domElement.addEventListener("webglcontextlost", lost);
      renderer.domElement.addEventListener("webglcontextrestored", restored);
      document.addEventListener("visibilitychange", sync);
      motion.addEventListener("change", sync);
      resize();
      sync();
      cleanup = () => {
        renderer.setAnimationLoop(null);
        observer.disconnect();
        host.removeEventListener("pointermove", pointer);
        host.removeEventListener("pointerleave", reset);
        renderer.domElement.removeEventListener("webglcontextlost", lost);
        renderer.domElement.removeEventListener("webglcontextrestored", restored);
        document.removeEventListener("visibilitychange", sync);
        motion.removeEventListener("change", sync);
        resources.forEach((resource) => resource.dispose());
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
        delete host.dataset.ready;
      };
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !started) { started = true; load().catch(() => {}); }
      syncRef.current();
    }, { rootMargin: "100px" });
    observer.observe(host);
    return () => { disposed = true; observer.disconnect(); cleanup(); syncRef.current = () => {}; };
  }, []);

  const group = GROUPS[selected];
  return (
    <section className={styles.panel} aria-label="Interactive technology explorer">
      <div className={styles.visual} ref={hostRef} aria-hidden="true">
        <span className={styles.fallback}>React · Node.js · QA<br /><span>Connected by code</span></span>
        <span className={styles.visualLabel}>TECH / NETWORK</span>
      </div>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Explore my toolkit</p>
        <div className={styles.controls} role="group" aria-label="Technology categories">
          {GROUPS.map((item, index) => <button key={item.name} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}>{item.name}</button>)}
        </div>
        <div className={styles.detail} aria-live="polite" aria-atomic="true">
          <h3 style={{ color: group.color }}>{group.name}</h3>
          <p>{group.text}</p>
          <ul>{group.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
        </div>
        <button className={styles.pause} type="button" aria-pressed={paused} onClick={() => setPaused((value) => !value)}>{paused ? "Resume animation" : "Pause animation"}</button>
      </div>
    </section>
  );
}
