import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }) => {
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove("pageEnter");
    void el.offsetWidth; // force reflow to restart animation
    el.classList.add("pageEnter");
  }, [location.pathname]);

  return (
    <div ref={ref} className="pageEnter">
      {children}
    </div>
  );
};

export default PageTransition;
