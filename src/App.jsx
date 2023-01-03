import React, { Fragment, Suspense } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Loading from "./components/UI/Loading";
import Home from "./pages/Home";
import { ImArrowUp2 } from "react-icons/im";
import { useEffect } from "react";
const About = React.lazy(() => import("./pages/About"));
const Projects = React.lazy(() => import("./pages/Projects"));
const Contacts = React.lazy(() => import("./pages/Contacts"));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countDown, setCountDown] = useState(0);
  const [showUpButton, setShowUpButton] = useState(false);
  let page = (
    <div className="centered">
      <Loading loaded={countDown} />
    </div>
  );
  const ScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  window.addEventListener("scroll", () => {
    if (window.pageYOffset === 0) {
      setShowUpButton(true);
    } else {
      setShowUpButton(false);
    }
  });

  setTimeout(() => {
    setCountDown(100);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, 3000);
  if (!isLoading) {
    page = (
      <>
        {!showUpButton && (
          <button onClick={ScrollToTop} className="ScrollToTop">
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About animate={false} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Suspense>
      </>
    );
  }
  return <div id="main-div">{page}</div>;
};

export default App;
