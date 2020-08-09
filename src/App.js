import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Header } from "./components/Header/Header";
import { NavBar } from "./components/Navbar/Navbar";
import {CarouselCom} from './components/Carousel/CarouselCom';
import { Footerr } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <section>
        <CssBaseline />
        <NavBar />
        <Header />
        <CarouselCom/>
      </section>
      <section>{/* <Footerr /> */}</section>
    </div>
  );
}

export default App;
