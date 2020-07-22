import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error  from "./pages/Error";

import {Switch, Route} from "react-router-dom";

import Navbar from "./components/Navbar";

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
    </>
);
}

export default App;
