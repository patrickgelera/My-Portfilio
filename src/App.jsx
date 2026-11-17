import React, { Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Loading from "./components/UI/Loading";
import Home from "./pages/Home";
import { ImArrowUp2 } from "react-icons/im";
import ScrollProgress from "./components/ScrollProgress";
import PageTransition from "./components/PageTransition";
import profilePhoto from "./assets/images/profile2.png";
const About = React.lazy(() => import("./pages/About"));
const Contacts = React.lazy(() => import("./pages/Contacts"));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countDown, setCountDown] = useState(0);
  const [showUpButton, setShowUpButton] = useState(false);

  // Show scroll-to-top button only when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowUpButton(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Loading sequence: wait for the page, fonts, and profile photo to load
  useEffect(() => {
    let cancelled = false;
    let hideTimer;

    const pageLoaded = new Promise((resolve) => {
      if (document.readyState === "complete") resolve();
      else window.addEventListener("load", resolve, { once: true });
    });
    const fontsLoaded = document.fonts ? document.fonts.ready : Promise.resolve();
    const photoLoaded = new Promise((resolve) => {
      const img = new Image();
      img.onload = img.onerror = resolve;
      img.src = profilePhoto;
    });

    const tasks = [pageLoaded, fontsLoaded, photoLoaded];
    let done = 0;
    setCountDown(10);
    tasks.forEach((task) =>
      task.then(() => {
        done += 1;
        if (!cancelled) setCountDown(10 + (90 * done) / tasks.length);
      })
    );

    Promise.all(tasks).then(() => {
      // Short pause so the bar visibly reaches 100%
      if (!cancelled) hideTimer = setTimeout(() => setIsLoading(false), 400);
    });

    return () => {
      cancelled = true;
      clearTimeout(hideTimer);
    };
  }, []);

  let page = (
    <div className="centered">
      <Loading loaded={countDown} />
    </div>
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  if (!isLoading) {
    page = (
      <>
        <ScrollProgress />
        {showUpButton && (
          <button onClick={scrollToTop} className="ScrollToTop">
            <ImArrowUp2 />
          </button>
        )}
        <div className="MainHeader" id="top"></div>
        <Header />
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About animate={false} />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </PageTransition>
        </Suspense>
      </>
    );
  }
  return <div id="main-div">{page}</div>;
};

export default App;
