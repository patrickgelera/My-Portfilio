import { useEffect, useRef } from "react";

const CHARS = "01アイウエオカキクケコ#$%&@{}[]<>/\\ABCDEF0123456789";

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const fontSize = 13;
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array.from({ length: columns }, () => Math.random() * -80);

    const draw = () => {
      ctx.fillStyle = "rgba(13, 17, 23, 0.055)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const y = drops[i] * fontSize;
        const alpha = 0.06 + (y / canvas.height) * 0.22;
        ctx.fillStyle = `rgba(0, 230, 118, ${alpha})`;
        ctx.fillText(char, i * fontSize, y);

        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.45;
      }
      animId = requestAnimationFrame(draw);
    };

    const onResize = () => {
      resize();
      columns = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * -80);
    };

    window.addEventListener("resize", onResize);
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default MatrixRain;
