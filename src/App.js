import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error  from "./pages/Error";

import {Switch, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, fas);

function App() {
  return(
    <>
  <Navbar />
      <switch>
        <Route exact path="/" component={Home} />
              <Route exact path="/rooms/" component={Rooms} />
              <Route exact path="/rooms/:cool" component={SingleRoom} />
              <Route component={Error} />
    </switch>
    <Footer />
    </>
);
}

export default App;
