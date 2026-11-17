import { useEffect, useRef, useState } from "react";
import styles from "./SectionScene.module.css";

const CONTENT = {
  shield: { title: "Building a security mindset", text: "From networks and infrastructure to cyber security.", fallback: "◇" },
  monitor: { title: "Ideas into working software", text: "Explore my web applications and real-time projects below.", fallback: "</>" },
  connections: { title: "Let’s connect", text: "Web development, QA, and a growing focus on cyber security.", fallback: "◎" },
};

export default function SectionScene({ variant }) {
  const hostRef = useRef(null);
  const controlRef = useRef(() => {});
  const [paused, setPaused] = useState(false);
  const content = CONTENT[variant];

  useEffect(() => { controlRef.current(paused); }, [paused]);

  useEffect(() => {
    const host = hostRef.current;
    let disposed = false;
    let loading = false;
    let visible = false;
    let teardown = () => {};
    let sync = () => {};
    let manuallyPaused = false;
    controlRef.current = (value) => { manuallyPaused = value; sync(); };
    const load = async () => {
      loading = true;
      const THREE = await import("three");
      if (disposed) return;
      let renderer;
      try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); }
      catch { return; }
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 20);
      camera.position.set(0, 0, 5);
      const group = new THREE.Group();
      scene.add(group);
      const resources = new Set();
      const add = (geometry, material, parent = group, wire = false) => {
        resources.add(geometry);
        resources.add(material);
        const object = wire ? new THREE.LineSegments(geometry, material) : new THREE.Mesh(geometry, material);
        parent.add(object);
        return object;
      };
      const surface = () => new THREE.MeshStandardMaterial({ color: 0x0b3437, metalness: 0.65, roughness: 0.3 });
      const line = (color = 0x00e676, opacity = 0.8) => new THREE.LineBasicMaterial({ color, transparent: true, opacity });
      const outline = (geometry, color) => {
        const edges = new THREE.EdgesGeometry(geometry);
        return add(edges, line(color), group, true);
      };
      scene.add(new THREE.AmbientLight(0xb4fff1, 2));
      const light = new THREE.PointLight(0x00bcd4, 35);
      light.position.set(2, 3, 4);
      scene.add(light);
      let orbit;
      if (variant === "shield") {
        const shape = new THREE.Shape();
        shape.moveTo(0, 1.05);
        shape.lineTo(0.8, 0.72);
        shape.lineTo(0.7, -0.25);
        shape.quadraticCurveTo(0.5, -0.8, 0, -1.05);
        shape.quadraticCurveTo(-0.5, -0.8, -0.7, -0.25);
        shape.lineTo(-0.8, 0.72);
        shape.closePath();
        const geometry = new THREE.ExtrudeGeometry(shape, { depth: 0.16, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.04, bevelSegments: 2, steps: 1 });
        add(geometry, surface());
        outline(geometry);
        const check = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(-0.32, 0, 0.23), new THREE.Vector3(-0.06, -0.25, 0.23),
          new THREE.Vector3(-0.06, -0.25, 0.23), new THREE.Vector3(0.4, 0.35, 0.23),
        ]);
        add(check, line(0xb4fff1), group, true);
      } else if (variant === "monitor") {
        const screen = new THREE.BoxGeometry(2.3, 1.4, 0.12);
        add(screen, surface());
        outline(screen, 0x00bcd4);
        add(new THREE.BoxGeometry(0.15, 0.45, 0.18), surface()).position.y = -0.92;
        add(new THREE.BoxGeometry(1, 0.08, 0.55), surface()).position.y = -1.16;
        [1.3, 0.85, 1.1, 0.6].forEach((width, index) => {
          const bar = add(new THREE.BoxGeometry(width, 0.045, 0.015), new THREE.MeshBasicMaterial({ color: index % 2 ? 0x00bcd4 : 0x00e676 }));
          bar.position.set(-0.23 + width / 8, 0.4 - index * 0.23, 0.075);
        });
        group.rotation.x = 0.08;
      } else {
        add(new THREE.IcosahedronGeometry(0.43, 0), surface());
        const core = new THREE.IcosahedronGeometry(0.44, 0);
        outline(core);
        core.dispose();
        orbit = new THREE.Group();
        group.add(orbit);
        for (let i = 0; i < 3; i++) {
          const ring = add(new THREE.TorusGeometry(1.05, 0.009, 6, 64), new THREE.MeshBasicMaterial({ color: i % 2 ? 0x00bcd4 : 0x00e676, transparent: true, opacity: 0.55 }), orbit);
          ring.rotation.set(i * 0.75, i * 0.6, 0);
          const node = add(new THREE.SphereGeometry(0.075, 12, 8), new THREE.MeshBasicMaterial({ color: 0xb4fff1 }), ring);
          node.position.x = 1.05;
        }
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.domElement.setAttribute("aria-hidden", "true");
      host.appendChild(renderer.domElement);
      host.dataset.ready = "true";
      const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
      let contextAvailable = true;
      let elapsed = 0;
      let previous = null;
      const draw = () => renderer.render(scene, camera);
      const animate = (time) => {
        if (previous !== null) elapsed += Math.min((time - previous) / 1000, 0.05);
        previous = time;
        group.rotation.y = Math.sin(elapsed * 0.45) * 0.4;
        group.position.y = Math.sin(elapsed * 0.8) * 0.06;
        if (orbit) orbit.rotation.z = elapsed * 0.12;
        draw();
      };
      sync = () => {
        previous = null;
        renderer.setAnimationLoop(contextAvailable && visible && !document.hidden && !motion.matches && !manuallyPaused ? animate : null);
        draw();
      };
      const resize = () => {
        const { width, height } = host.getBoundingClientRect();
        renderer.setSize(width, height);
        camera.aspect = width / Math.max(height, 1);
        camera.updateProjectionMatrix();
        draw();
      };
      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(host);
      const lost = (event) => { event.preventDefault(); contextAvailable = false; renderer.setAnimationLoop(null); delete host.dataset.ready; };
      renderer.domElement.addEventListener("webglcontextlost", lost);
      document.addEventListener("visibilitychange", sync);
      motion.addEventListener("change", sync);
      resize();
      sync();
      teardown = () => {
        renderer.setAnimationLoop(null);
        resizeObserver.disconnect();
        document.removeEventListener("visibilitychange", sync);
        motion.removeEventListener("change", sync);
        renderer.domElement.removeEventListener("webglcontextlost", lost);
        resources.forEach((resource) => resource.dispose());
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
        delete host.dataset.ready;
      };
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !loading) load().catch(() => {});
      sync();
    }, { rootMargin: "100px" });
    observer.observe(host);
    return () => {
      disposed = true;
      observer.disconnect();
      teardown();
      controlRef.current = () => {};
    };
  }, [variant]);

  return (
    <aside className={`${styles.panel} ${variant === "connections" ? styles.compact : ""}`}>
      <div className={styles.visual} ref={hostRef} aria-hidden="true">
        <span className={styles.fallback}>{content.fallback}</span>
      </div>
      <div className={styles.caption}>
        <h3>{content.title}</h3>
        <p>{content.text}</p>
        <button type="button" onClick={() => setPaused((value) => !value)} aria-pressed={paused} aria-label={`Pause ${variant} animation`}>
          {paused ? "Resume animation" : "Pause animation"}
        </button>
      </div>
    </aside>
  );
}
