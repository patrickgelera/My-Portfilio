import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import LoadingSpinner from "./components/UI/LoadingSpinner";

import Home from "./pages/Home";
const About = React.lazy(() => import("./pages/About"));
const Projects = React.lazy(() => import("./pages/Projects"));
const Contacts = React.lazy(() => import("./pages/Contacts"));

const App = () => {
  return (
    <>
      <div className="MainHeader"></div>
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
};

export default App;
