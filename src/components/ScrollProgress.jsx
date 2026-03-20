import { useState, useEffect } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.pageYOffset;
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scrollProgress">
      <div className="scrollProgressFill" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ScrollProgress;
