import React from "react";
import "./Footer.css";
import Socialicons from "./Socialicons";

export default function Footer(){
  return(
    <div className="footer">
    <div className="container">
    <div className="row">

    <div className="col">
    <h4>contacts</h4>
    <ul className="list-unstyle">
    <li>happinessgodfrey@gmail.com</li>
    <li>+255627656597</li>
    <li>Dar es salaam</li>
    </ul>
    </div>
    </div>
    <hr />
    <div className="row text-md-right">
           <Socialicons />
         </div>
    <div className="row">
    <p className="col-sm">
    &copy;{new Date().getFullYear()} FrontenddevHappiness|All rights reserved| Tearms of service| Privacy
    </p>
    </div>

    </div>
    </div>
  );
}
