import React from "react";

import {
  Header,
  WhatGPT3,
  Possibility,
  Features,
  Blog,
  Footer,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./App.css";
import "./index.css";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
