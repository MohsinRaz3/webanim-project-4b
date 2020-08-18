import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from '@material-ui/core/Grid';


import { Header } from "./components/Header/Header";
import { NavBar } from "./components/Navbar/Navbar";
import {CarouselCom} from './components/Carousel/CarouselCom';
import { Footerr } from "./components/Footer/Footer";
import {BackgroundVideo} from './components/Header/BackgroundVideo';
import PaperAnim from './components/PaperAnim/PaperAnim';


function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
      <Grid >
        <CssBaseline />
       <Grid> <NavBar />
       </Grid>
       <Grid>
        <Header />
        </Grid>
        <Grid container
  direction="row"
  justify="center"
  alignItems="center"
>

        <BackgroundVideo/>
        </Grid>
        <Grid>
        <PaperAnim/>
        </Grid>
        <Grid>
        <CarouselCom/>
        </Grid>
      </Grid>
      </div>
      <Footerr /> 
    </div>
  );
}

export default App;
