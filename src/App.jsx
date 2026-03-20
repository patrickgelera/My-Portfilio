import React, { Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Loading from "./components/UI/Loading";
import Home from "./pages/Home";
import { ImArrowUp2 } from "react-icons/im";
import ScrollProgress from "./components/ScrollProgress";
import PageTransition from "./components/PageTransition";
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

  // Loading sequence
  useEffect(() => {
    const fillTimer = setTimeout(() => setCountDown(100), 3000);
    const hideTimer = setTimeout(() => setIsLoading(false), 5000);
    return () => {
      clearTimeout(fillTimer);
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
